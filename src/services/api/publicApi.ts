import { z } from 'zod';
import { fetchApi } from './client';
import {
  CategorySummarySchema,
  FaqItemSchema,
  GalleryMediaItemSchema,
  ProductSchema,
  TestimonialSchema,
} from '../../schemas/api';
import {
  MOCK_CATEGORIES,
  MOCK_FAQS,
  MOCK_GALLERY,
  MOCK_PRODUCTS,
  MOCK_TESTIMONIALS,
} from './mockData';
import type { CategorySummary, FaqItem, GalleryMediaItem, Locale, Testimonial } from '../../types/api';
import type { Product } from '../../types/product';
import type { ContactFormData, CustomCakeFormData } from '../../schemas/forms';

function mapRenderProductToFrontend(raw: any, locale: Locale): Product {
  // Use a mock product as a base to satisfy strict schema requirements for missing fields
  const base = MOCK_PRODUCTS[0];
  
  return {
    ...base,
    id: raw._id || raw.id || raw.productId || base.id,
    name: raw.name || { es: raw.productName, en: raw.productName } || base.name,
    slug: raw.slug || { es: raw.productSlug, en: raw.productSlug } || base.slug,
    shortDescription: raw.shortDescription || raw.description || { es: raw.productDescription, en: raw.productDescription } || base.shortDescription,
    description: raw.description || { es: raw.productDescription, en: raw.productDescription } || base.description,
    basePriceCents: raw.basePriceCents !== undefined ? raw.basePriceCents : (raw.productPrice !== undefined ? Math.round(raw.productPrice * 100) : (raw.priceCents || base.basePriceCents)),
    media: (raw.media && raw.media.length > 0) ? raw.media.map((m: any, idx: number) => ({
      id: m.id || m._id || String(idx),
      publicId: m.publicId || String(idx),
      secureUrl: m.secureUrl,
      altText: m.altText || m.alt || { es: raw.productName || '', en: raw.productName || '' },
      isPrimary: m.isPrimary ?? idx === 0,
    })).filter((m: any) => !!m.secureUrl) : (raw.productImage ? [{ id: '1', publicId: '1', secureUrl: raw.productImage, altText: { es: raw.productName || '', en: raw.productName || '' }, isPrimary: true }] : []),
    ingredients: raw.ingredients || { es: raw.productIngredients, en: raw.productIngredients } || base.ingredients,
    productType: raw.type || base.productType,
    primaryCategory: raw.primaryCategory || base.primaryCategory,
  };
}

function flattenProductsResponse(data: any[], locale: Locale): Product[] {
  let flatProducts: any[] = [];
  
  for (const item of data) {
    if (item.products && Array.isArray(item.products)) {
      // It's a category object with nested products
      const mapped = item.products.map((p: any) => ({
        ...p,
        primaryCategory: {
          id: item.categoryId || 'cat-1',
          name: { es: item.categoryName, en: item.categoryName },
          slug: { es: item.categorySlug, en: item.categorySlug }
        }
      }));
      flatProducts.push(...mapped);
    } else {
      // It's already a product object
      flatProducts.push(item);
    }
  }
  
  return flatProducts.map((raw: any) => mapRenderProductToFrontend(raw, locale));
}

function mapCategoryToFrontend(raw: any): CategorySummary {
  return {
    id: raw._id || raw.id,
    name: raw.name || { es: '', en: '' },
    slug: raw.slug || { es: '', en: '' },
    description: raw.description || undefined,
    imageUrl: raw.image || raw.imageUrl,
    displayOrder: raw.sortOrder || raw.displayOrder,
    productCount: raw.productCount || 0,
  };
}

export async function getCategories(locale: Locale = 'es', type?: 'local' | 'imported'): Promise<CategorySummary[]> {
  const res = await fetchApi(
    'public/categories',
    z.any(),
    { query: { locale, status: 'published', type } },
    MOCK_CATEGORIES
  );
  if (res.success && Array.isArray(res.data)) {
    return res.data.map(mapCategoryToFrontend);
  }
  return MOCK_CATEGORIES;
}

export async function getCategoryBySlug(slug: string, locale: Locale = 'es'): Promise<CategorySummary | null> {
  const mockMatch = MOCK_CATEGORIES.find((c) => c.slug[locale] === slug || c.slug.es === slug || c.slug.en === slug) || null;
  const res = await fetchApi(
    `public/categories/${slug}`,
    z.any(),
    { query: { locale } },
    mockMatch
  );
  if (res.success && res.data) {
    return mapCategoryToFrontend(res.data);
  }
  return mockMatch;
}

export interface GetProductsParams {
  locale?: Locale;
  page?: number;
  limit?: number;
  categorySlug?: string;
  search?: string;
  featured?: boolean;
  availability?: boolean;
  type?: 'local' | 'imported';
}

export async function getProducts(params: GetProductsParams = {}): Promise<{ products: Product[]; total: number }> {
  const { locale = 'es', page = 1, limit = 24, categorySlug, search, featured, availability, type } = params;

  // Local filter for mock fallback
  let filteredMock = [...MOCK_PRODUCTS];
  if (categorySlug) {
    filteredMock = filteredMock.filter((p) =>
      p.primaryCategory.slug[locale] === categorySlug ||
      p.primaryCategory.slug.es === categorySlug ||
      p.primaryCategory.slug.en === categorySlug
    );
  }
  if (search) {
    const q = search.toLowerCase();
    filteredMock = filteredMock.filter(
      (p) =>
        p.name[locale].toLowerCase().includes(q) ||
        p.description[locale].toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q))
    );
  }
  if (featured !== undefined) {
    filteredMock = filteredMock.filter((p) => p.featured === featured);
  }

  const res = await fetchApi(
    'public/products',
    z.any(),
    {
      query: {
        locale,
        page,
        limit,
        categorySlug,
        search,
        type,
        featured: featured ? 'true' : undefined,
        availability: availability !== undefined ? (availability ? 'true' : 'false') : undefined,
      },
    },
    []
  );

  if (res.success && Array.isArray(res.data)) {
    const products = flattenProductsResponse(res.data, locale);
    return {
      products,
      total: res.meta?.totalItems ?? products.length,
    };
  }

  return { products: [], total: 0 };
}

export async function getLocalProducts(locale: Locale = 'es', limit = 24): Promise<{ products: Product[]; total: number }> {
  const res = await fetchApi(
    'public/products',
    z.any(),
    { query: { locale, limit, type: 'local' } },
    []
  );

  if (res.success && Array.isArray(res.data)) {
    const products = flattenProductsResponse(res.data, locale);
    return {
      products,
      total: res.meta?.totalItems ?? products.length,
    };
  }

  return { products: [], total: 0 };
}

export async function getImportedProducts(locale: Locale = 'es', limit = 24): Promise<{ products: Product[]; total: number }> {
  const res = await fetchApi(
    'public/products',
    z.any(),
    { query: { locale, limit, type: 'imported' } },
    []
  );

  if (res.success && Array.isArray(res.data)) {
    const products = flattenProductsResponse(res.data, locale);
    return {
      products,
      total: res.meta?.totalItems ?? products.length,
    };
  }

  return { products: [], total: 0 };
}

export async function getProductBySlug(slug: string, locale: Locale = 'es'): Promise<Product | null> {
  const res = await fetchApi(
    `public/products/${slug}`,
    z.any(),
    { query: { locale } },
    null
  );

  return res.success && res.data ? mapRenderProductToFrontend(res.data, locale) : null;
}

export async function getRelatedProducts(slug: string, locale: Locale = 'es', limit = 4): Promise<Product[]> {
  const res = await fetchApi(
    `public/products/${slug}/related`,
    z.array(ProductSchema),
    { query: { locale, limit } },
    []
  );

  return res.success ? res.data : [];
}

export async function getFaqs(locale: Locale = 'es'): Promise<FaqItem[]> {
  const res = await fetchApi(
    'public/faqs',
    z.array(FaqItemSchema),
    { query: { locale } },
    MOCK_FAQS
  );
  return res.success ? res.data : MOCK_FAQS;
}

export async function getTestimonials(locale: Locale = 'es'): Promise<Testimonial[]> {
  const res = await fetchApi(
    'public/testimonials',
    z.array(TestimonialSchema),
    { query: { locale } },
    MOCK_TESTIMONIALS
  );
  return res.success ? res.data : MOCK_TESTIMONIALS;
}

export async function getGallery(page = 1, limit = 24): Promise<GalleryMediaItem[]> {
  const res = await fetchApi(
    'public/gallery',
    z.array(GalleryMediaItemSchema),
    { query: { page, limit } },
    MOCK_GALLERY
  );
  return res.success ? res.data : MOCK_GALLERY;
}

export async function submitContact(data: ContactFormData) {
  return fetchApi(
    'public/contact',
    z.object({ received: z.boolean() }),
    { method: 'POST', body: data },
    { received: true }
  );
}

export async function submitCustomCakeRequest(data: CustomCakeFormData) {
  return fetchApi(
    'public/custom-cake-requests',
    z.object({ id: z.string(), status: z.string() }),
    { method: 'POST', body: data },
    { id: 'cake-req-mock-123', status: 'received' }
  );
}
