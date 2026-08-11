import { z } from 'zod';
import { fetchApi } from './client';
import {
  FaqItemSchema,
  GalleryMediaItemSchema,
  TestimonialSchema,
  GoogleReviewsResponseSchema,
} from '../../schemas/api';
import {
  MOCK_CATEGORIES,
  MOCK_FAQS,
  MOCK_GALLERY,
  MOCK_PRODUCTS,
  MOCK_TESTIMONIALS,
} from './mockData';
import type { CategorySummary, FaqItem, GalleryMediaItem, Locale, Testimonial, GoogleReviewsResponse } from '../../types/api';
import type { Product } from '../../types/product';
import type { ContactFormData, CustomCakeFormData } from '../../schemas/forms';

function mapRenderProductToFrontend(raw: any): Product {
  // Use a mock product as a base to satisfy strict schema requirements for missing fields
  const base = MOCK_PRODUCTS[0] || {
    id: '', sku: null, name: { es: '', en: '' }, slug: { es: '', en: '' },
    shortDescription: { es: '', en: '' }, description: { es: '', en: '' },
    primaryCategory: { id: '', name: { es: '', en: '' }, slug: { es: '', en: '' } },
    categories: [], productType: 'simple', basePriceCents: 0, compareAtPriceCents: null,
    currency: 'USD', priceLabel: null, variants: [], options: [], media: [],
    ingredients: null, allergens: [], dietaryTags: [],
    availability: { isAvailable: false, leadTimeDays: 0 },
    ordering: { allowDirectCall: true, allowDoorDash: false, allowCustomQuote: false },
    tags: [], featured: false, bestSeller: false, newProduct: false,
    seo: { title: { es: '', en: '' }, description: { es: '', en: '' }, keywords: [] },
    updatedAt: new Date().toISOString()
  };
  const nameObj = typeof raw.name === 'object' && raw.name !== null
    ? { es: raw.name.es || raw.name.en || raw.productName || '', en: raw.name.en || raw.name.es || raw.productName || '' }
    : { es: raw.name || raw.productName || '', en: raw.name || raw.productName || '' };

  const slugObj = typeof raw.slug === 'object' && raw.slug !== null
    ? { es: raw.slug.es || raw.slug.en || raw.productSlug || '', en: raw.slug.en || raw.slug.es || raw.productSlug || '' }
    : { es: raw.slug || raw.productSlug || '', en: raw.slug || raw.productSlug || '' };

  const descObj = typeof raw.description === 'object' && raw.description !== null
    ? { es: raw.description.es || raw.description.en || raw.productDescription || '', en: raw.description.en || raw.description.es || raw.productDescription || '' }
    : { es: raw.description || raw.productDescription || '', en: raw.description || raw.productDescription || '' };

  const shortDescObj = {
    es: (typeof raw.shortDescription === 'object' && raw.shortDescription?.es) || (typeof raw.shortDescription === 'string' && raw.shortDescription) || descObj.es,
    en: (typeof raw.shortDescription === 'object' && raw.shortDescription?.en) || (typeof raw.shortDescription === 'string' && raw.shortDescription) || descObj.en,
  };

  const primaryCat = raw.primaryCategory ? {
    id: raw.primaryCategory.id || raw.primaryCategory._id || '',
    name: typeof raw.primaryCategory.name === 'object' && raw.primaryCategory.name ? raw.primaryCategory.name : { es: raw.primaryCategory.name || '', en: raw.primaryCategory.name || '' },
    slug: typeof raw.primaryCategory.slug === 'object' && raw.primaryCategory.slug ? raw.primaryCategory.slug : { es: raw.primaryCategory.slug || '', en: raw.primaryCategory.slug || '' },
  } : base.primaryCategory;

  const isAvailable = raw.availability
    ? (raw.availability.isAvailable ?? (raw.availability.status === 'available' || raw.availability.status === 'always' || raw.availability.status === 'in_stock'))
    : true;

  const seoObj = {
    title: {
      es: raw.seo?.es?.metaTitle || raw.productoSeo?.metaTitle || nameObj.es,
      en: raw.seo?.en?.metaTitle || raw.productoSeo?.metaTitle || nameObj.en,
    },
    description: {
      es: raw.seo?.es?.metaDescription || raw.productoSeo?.metaDescription || shortDescObj.es,
      en: raw.seo?.en?.metaDescription || raw.productoSeo?.metaDescription || shortDescObj.en,
    },
    keywords: [],
  };

  return {
    ...base,
    id: raw._id || raw.id || raw.productId || base.id,
    name: nameObj,
    slug: slugObj,
    shortDescription: shortDescObj,
    description: descObj,
    basePriceCents: raw.basePriceCents !== undefined ? raw.basePriceCents : (raw.productPrice !== undefined ? Math.round(raw.productPrice * 100) : (raw.priceCents || base.basePriceCents)),
    media: (raw.media && raw.media.length > 0) ? raw.media.map((m: any, idx: number) => ({
      id: m.id || m._id || String(idx),
      publicId: m.publicId || String(idx),
      secureUrl: m.secureUrl,
      altText: typeof m.altText === 'object' && m.altText ? m.altText : (typeof m.alt === 'object' && m.alt ? m.alt : { es: nameObj.es, en: nameObj.en }),
      isPrimary: m.isPrimary ?? idx === 0,
    })).filter((m: any) => !!m.secureUrl) : (raw.productImage ? [{ id: '1', publicId: '1', secureUrl: raw.productImage, altText: nameObj, isPrimary: true }] : []),
    ingredients: typeof raw.ingredients === 'object' && raw.ingredients !== null ? raw.ingredients : (typeof raw.ingredients === 'string' ? { es: raw.ingredients, en: raw.ingredients } : (raw.productIngredients ? { es: raw.productIngredients, en: raw.productIngredients } : null)),
    allergens: raw.allergens || raw.productoAllergens || [],
    availability: {
      isAvailable,
      leadTimeDays: raw.availability?.leadTimeHours ? Math.ceil(raw.availability.leadTimeHours / 24) : 0,
    },
    productType: raw.type || raw.productType || base.productType,
    type: raw.type || 'local',
    primaryCategory: primaryCat,
    seo: seoObj,
  };
}

function flattenProductsResponse(data: any[]): Product[] {
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
  
  return flatProducts.map((raw: any) => mapRenderProductToFrontend(raw));
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

export async function getCategories(
  optionsOrLocale: { locale?: Locale; type?: 'local' | 'imported'; featured?: boolean } | Locale = 'es',
  typeParam?: 'local' | 'imported'
): Promise<any[]> {
  const options = typeof optionsOrLocale === 'object' && optionsOrLocale !== null
    ? optionsOrLocale
    : { locale: optionsOrLocale, type: typeParam || 'local' };

  const { locale = 'es', type = 'local', featured } = options;
  const res = await fetchApi(
    'public/categories',
    z.any(),
    { query: { locale, type, featured } },
    []
  );

  let list: any[] = [];
  if (res.success && res.data) {
    const raw = res.data;
    list = Array.isArray(raw) ? raw : (Array.isArray(raw?.data) ? raw.data : []);
  }

  if (!list.length) {
    const adminRes = await fetchApi(
      'admin/categories',
      z.any(),
      { query: { type } },
      []
    );
    if (adminRes.success && adminRes.data) {
      const rawAdmin = adminRes.data;
      list = Array.isArray(rawAdmin) ? rawAdmin : (Array.isArray(rawAdmin?.data) ? rawAdmin.data : []);
    }
  }

  const mapped = list.map((cat: any) => {
    const nameEs = typeof cat.name === 'object' ? cat.name.es : cat.name;
    const nameEn = typeof cat.name === 'object' ? cat.name.en : cat.name;
    const slugEs = typeof cat.slug === 'object' ? cat.slug.es : cat.slug;
    const slugEn = typeof cat.slug === 'object' ? cat.slug.en : cat.slug;
    const descEs = typeof cat.description === 'object' ? cat.description?.es : (cat.description || cat.descriptionShort || '');
    const descEn = typeof cat.description === 'object' ? cat.description?.en : (cat.description || cat.descriptionShort || '');

    const images = Array.isArray(cat.images) && cat.images.length > 0 
      ? cat.images 
      : (cat.image ? [cat.image] : []);

    return {
      id: cat._id || cat.id,
      name: { es: nameEs || '', en: nameEn || nameEs || '' },
      slug: { es: slugEs || '', en: slugEn || slugEs || '' },
      description: { es: descEs || '', en: descEn || descEs || '' },
      featured: cat.featured === true,
      allergens: cat.allergens || [],
      type: cat.type || 'local',
      images: images.map((img: any) => ({
        url: img.secureUrl || img.url || '',
        alt: img.alt?.es || nameEs || 'Categoría'
      }))
    };
  });

  const filteredByType = mapped.filter(c => c.type === type);
  if (featured !== undefined) {
    return filteredByType.filter(c => c.featured === featured);
  }
  return filteredByType;
}

export async function getCategoryBySlug(slug: string, locale: Locale = 'es'): Promise<CategorySummary | null> {
  const res = await fetchApi(
    `public/categories/${slug}`,
    z.any(),
    { query: { locale } },
    null
  );
  if (res.success && res.data) {
    return mapCategoryToFrontend(res.data);
  }
  return MOCK_CATEGORIES.find((c) => c.slug[locale] === slug || c.slug.es === slug || c.slug.en === slug || c.id === slug) || null;
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

  const res = await fetchApi(
    'public/products',
    z.any(),
    {
      query: {
        locale,
        page,
        limit: Math.max(limit, 100),
        categorySlug,
        search,
        type,
        featured: featured ? 'true' : undefined,
        availability: availability !== undefined ? (availability ? 'true' : 'false') : undefined,
      },
    },
    null
  );

  let products: Product[] = [];
  if (res.success && Array.isArray(res.data)) {
    products = flattenProductsResponse(res.data);
  } else {
    // Fallback to mock products only if API request failed completely
    products = MOCK_PRODUCTS;
  }

  if (categorySlug) {
    products = products.filter((p) =>
      p.primaryCategory.slug[locale] === categorySlug ||
      p.primaryCategory.slug.es === categorySlug ||
      p.primaryCategory.slug.en === categorySlug ||
      p.categories.some((c) => c.slug[locale] === categorySlug || c.slug.es === categorySlug || c.slug.en === categorySlug)
    );
  }
  if (search) {
    const q = search.toLowerCase();
    products = products.filter(
      (p) =>
        p.name[locale].toLowerCase().includes(q) ||
        p.description[locale].toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q))
    );
  }
  if (featured !== undefined) {
    products = products.filter((p) => p.featured === featured);
  }

  return {
    products,
    total: products.length,
  };
}

export async function getLocalProducts(locale: Locale = 'es', limit = 24): Promise<{ products: Product[]; total: number }> {
  const { products } = await getProducts({ locale, limit, type: 'local' });
  return { products, total: products.length };
}

export async function getImportedProducts(locale: Locale = 'es', limit = 24): Promise<{ products: Product[]; total: number }> {
  const { products } = await getProducts({ locale, limit, type: 'imported' });
  return { products, total: products.length };
}

export async function getProductBySlug(slug: string, locale: Locale = 'es'): Promise<Product | null> {
  const mockMatch = MOCK_PRODUCTS.find(
    (p) => p.slug[locale] === slug || p.slug.es === slug || p.slug.en === slug || p.id === slug
  ) || null;

  const res = await fetchApi(
    `public/products/${slug}`,
    z.any(),
    { query: { locale } },
    mockMatch
  );

  if (res.success && res.data) {
    return mapRenderProductToFrontend(res.data);
  }

  return mockMatch;
}

export async function getRelatedProducts(slug: string, locale: Locale = 'es', limit = 4): Promise<Product[]> {
  const res = await fetchApi(
    `public/products/${slug}/related`,
    z.any(),
    { query: { locale, limit } },
    []
  );

  if (res.success && res.data) {
    const dataObj: any = res.data;
    const rawItems: any[] = Array.isArray(dataObj) ? dataObj : (Array.isArray(dataObj?.data) ? dataObj.data : []);
    if (rawItems.length > 0) {
      return rawItems.map((raw: any) => mapRenderProductToFrontend(raw));
    }
  }

  const [localRes, importedRes] = await Promise.all([
    getProducts({ locale, type: 'local', limit: 100 }),
    getProducts({ locale, type: 'imported', limit: 100 })
  ]);
  const allProds = [...localRes.products, ...importedRes.products];
  const currentProduct = allProds.find((p) => p.slug.es === slug || p.slug.en === slug || p.id === slug);

  if (currentProduct) {
    const related = allProds.filter(
      (p) =>
        p.id !== currentProduct.id &&
        p.type === currentProduct.type &&
        (p.primaryCategory.id === currentProduct.primaryCategory.id ||
          p.primaryCategory.slug.es === currentProduct.primaryCategory.slug.es)
    );
    if (related.length > 0) return related.slice(0, limit);

    return allProds.filter((p) => p.id !== currentProduct.id && p.type === currentProduct.type).slice(0, limit);
  }

  return allProds.filter((p) => p.slug.es !== slug && p.slug.en !== slug).slice(0, limit);
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

export async function getGoogleReviews(locale: Locale = 'es'): Promise<GoogleReviewsResponse | null> {
  const res = await fetchApi(
    'public/reviews',
    GoogleReviewsResponseSchema,
    { query: { locale } }
  );
  return res.success ? res.data : null;
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

export async function getFeaturedCatalogs(locale: Locale = 'es'): Promise<any[]> {
  const res = await fetchApi(
    'public/catalogs/featured',
    z.any(),
    { query: { locale } },
    []
  );

  let list: any[] = [];
  if (res.success && res.data) {
    const raw = res.data;
    list = Array.isArray(raw) ? raw : (Array.isArray(raw?.data) ? raw.data : []);
  }

  return list.map((cat: any) => {
    const nameEs = typeof cat.name === 'object' ? cat.name.es : cat.name;
    const nameEn = typeof cat.name === 'object' ? cat.name.en : cat.name;
    const slugEs = typeof cat.slug === 'object' ? cat.slug.es : cat.slug;
    const slugEn = typeof cat.slug === 'object' ? cat.slug.en : cat.slug;
    const descEs = typeof cat.description === 'object' ? cat.description?.es : (cat.description || '');
    const descEn = typeof cat.description === 'object' ? cat.description?.en : (cat.description || '');

    const images = Array.isArray(cat.images) && cat.images.length > 0 
      ? cat.images 
      : (cat.image ? [cat.image] : []);

    return {
      id: cat._id || cat.id,
      name: { es: nameEs || '', en: nameEn || nameEs || '' },
      slug: { es: slugEs || '', en: slugEn || slugEs || '' },
      description: { es: descEs || '', en: descEn || descEs || '' },
      featured: cat.featured === true,
      type: cat.type || 'local',
      images: images.map((img: any) => ({
        url: img.secureUrl || img.url || '',
        alt: img.alt?.es || nameEs || 'Catálogo'
      }))
    };
  });
}
