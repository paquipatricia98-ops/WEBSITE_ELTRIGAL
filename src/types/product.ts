import type { LocalizedText } from './api';

export type ProductType = 'simple' | 'variable' | 'custom' | 'seasonal' | 'retail';

export interface ProductVariant {
  id: string;
  sku: string | null;
  name: LocalizedText;
  priceCents: number;
  compareAtPriceCents: number | null;
  servings?: number;
  available: boolean;
}

export interface ProductOptionValue {
  id: string;
  name: LocalizedText;
  additionalPriceCents: number;
}

export interface ProductOption {
  id: string;
  name: LocalizedText;
  required: boolean;
  values: ProductOptionValue[];
}

export interface MediaAsset {
  id: string;
  publicId: string;
  secureUrl: string;
  altText: LocalizedText;
  width?: number;
  height?: number;
  isPrimary?: boolean;
}

export type Allergen =
  | 'gluten'
  | 'dairy'
  | 'eggs'
  | 'nuts'
  | 'peanuts'
  | 'soy'
  | 'sesame';

export interface Availability {
  isAvailable: boolean;
  leadTimeDays: number;
  seasonalMonths?: number[];
  customNotice?: LocalizedText;
}

export interface OrderingOptions {
  allowDirectCall: boolean;
  allowDoorDash: boolean;
  allowCustomQuote: boolean;
  doorDashUrl?: string;
}

export interface PublicSeo {
  title: LocalizedText;
  description: LocalizedText;
  keywords: string[];
}

export interface Product {
  id: string;
  sku: string | null;
  name: LocalizedText;
  slug: LocalizedText;
  shortDescription: LocalizedText;
  description: LocalizedText;
  primaryCategory: {
    id: string;
    name: LocalizedText;
    slug: LocalizedText;
  };
  categories: Array<{
    id: string;
    name: LocalizedText;
    slug: LocalizedText;
  }>;
  productType: ProductType;
  basePriceCents: number | null;
  compareAtPriceCents: number | null;
  currency: 'USD';
  priceLabel: LocalizedText | null;
  variants: ProductVariant[];
  options: ProductOption[];
  media: MediaAsset[];
  ingredients: LocalizedText | null;
  allergens: Allergen[];
  dietaryTags: string[];
  availability: Availability;
  ordering: OrderingOptions;
  tags: string[];
  featured: boolean;
  bestSeller: boolean;
  newProduct: boolean;
  seo: PublicSeo;
  type?: 'local' | 'imported';
  updatedAt: string;
}
