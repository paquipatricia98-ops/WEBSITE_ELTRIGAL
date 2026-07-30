import { z } from 'zod';

export const LocalizedTextSchema = z.object({
  es: z.string(),
  en: z.string(),
});

export const MediaAssetSchema = z.object({
  id: z.string(),
  publicId: z.string(),
  secureUrl: z.string().url(),
  altText: LocalizedTextSchema,
  width: z.number().optional(),
  height: z.number().optional(),
  isPrimary: z.boolean().optional(),
});

export const ProductVariantSchema = z.object({
  id: z.string(),
  sku: z.string().nullable(),
  name: LocalizedTextSchema,
  priceCents: z.number().int(),
  compareAtPriceCents: z.number().int().nullable(),
  servings: z.number().int().optional(),
  available: z.boolean(),
});

export const ProductOptionValueSchema = z.object({
  id: z.string(),
  name: LocalizedTextSchema,
  additionalPriceCents: z.number().int(),
});

export const ProductOptionSchema = z.object({
  id: z.string(),
  name: LocalizedTextSchema,
  required: z.boolean(),
  values: z.array(ProductOptionValueSchema),
});

export const AllergenEnum = z.enum([
  'gluten',
  'dairy',
  'eggs',
  'nuts',
  'peanuts',
  'soy',
  'sesame',
]);

export const AvailabilitySchema = z.object({
  isAvailable: z.boolean(),
  leadTimeDays: z.number().int(),
  seasonalMonths: z.array(z.number().int()).optional(),
  customNotice: LocalizedTextSchema.optional(),
});

export const OrderingOptionsSchema = z.object({
  allowDirectCall: z.boolean(),
  allowDoorDash: z.boolean(),
  allowCustomQuote: z.boolean(),
  doorDashUrl: z.string().optional(),
});

export const PublicSeoSchema = z.object({
  title: LocalizedTextSchema,
  description: LocalizedTextSchema,
  keywords: z.array(z.string()),
});

export const CategorySummarySchema = z.object({
  id: z.string(),
  name: LocalizedTextSchema,
  slug: LocalizedTextSchema,
  description: LocalizedTextSchema.optional(),
  imageUrl: z.string().optional(),
  displayOrder: z.number().int().optional(),
  productCount: z.number().int().optional(),
});

export const ProductSchema = z.object({
  id: z.string(),
  sku: z.string().nullable(),
  name: LocalizedTextSchema,
  slug: LocalizedTextSchema,
  shortDescription: LocalizedTextSchema,
  description: LocalizedTextSchema,
  primaryCategory: z.object({
    id: z.string(),
    name: LocalizedTextSchema,
    slug: LocalizedTextSchema,
  }),
  categories: z.array(
    z.object({
      id: z.string(),
      name: LocalizedTextSchema,
      slug: LocalizedTextSchema,
    })
  ),
  productType: z.enum(['simple', 'variable', 'custom', 'seasonal', 'retail']),
  basePriceCents: z.number().int().nullable(),
  compareAtPriceCents: z.number().int().nullable(),
  currency: z.literal('USD'),
  priceLabel: LocalizedTextSchema.nullable(),
  variants: z.array(ProductVariantSchema),
  options: z.array(ProductOptionSchema),
  media: z.array(MediaAssetSchema),
  ingredients: LocalizedTextSchema.nullable(),
  allergens: z.array(AllergenEnum),
  dietaryTags: z.array(z.string()),
  availability: AvailabilitySchema,
  ordering: OrderingOptionsSchema,
  tags: z.array(z.string()),
  featured: z.boolean(),
  bestSeller: z.boolean(),
  newProduct: z.boolean(),
  seo: PublicSeoSchema,
  updatedAt: z.string(),
});

export const TestimonialSchema = z.object({
  id: z.string(),
  authorName: z.string(),
  authorLocation: z.string(),
  content: LocalizedTextSchema,
  rating: z.number().min(1).max(5),
  avatarUrl: z.string().optional(),
  date: z.string(),
});

export const FaqItemSchema = z.object({
  id: z.string(),
  category: z.enum(['general', 'custom-cakes', 'orders', 'catering']),
  question: LocalizedTextSchema,
  answer: LocalizedTextSchema,
  displayOrder: z.number().int(),
});

export const GalleryMediaItemSchema = z.object({
  id: z.string(),
  publicId: z.string(),
  secureUrl: z.string().url(),
  altText: LocalizedTextSchema,
  title: LocalizedTextSchema,
  category: z.enum(['cakes', 'breads', 'pastries', 'store']),
  aspectRatio: z.string(),
});

export function createApiResponseSchema<T extends z.ZodTypeAny>(dataSchema: T) {
  return z.discriminatedUnion('success', [
    z.object({
      success: z.literal(true),
      data: dataSchema,
      meta: z.object({
        requestId: z.string().optional(),
        timestamp: z.string().optional(),
        page: z.number().int().optional(),
        limit: z.number().int().optional(),
        totalItems: z.number().int().optional(),
        totalPages: z.number().int().optional(),
      }),
    }),
    z.object({
      success: z.literal(false),
      error: z.object({
        code: z.string(),
        message: z.string(),
        details: z
          .array(
            z.object({
              field: z.string().optional(),
              rule: z.string().optional(),
              message: z.string(),
            })
          )
          .optional(),
      }),
      meta: z
        .object({
          requestId: z.string().optional(),
          timestamp: z.string().optional(),
        })
        .optional(),
    }),
  ]);
}
