export type Locale = 'es' | 'en';

export type LocalizedText = {
  es: string;
  en: string;
};

export interface ApiMeta {
  requestId?: string;
  timestamp?: string;
  page?: number;
  limit?: number;
  totalItems?: number;
  totalPages?: number;
}

export interface ApiFieldError {
  field?: string;
  rule?: string;
  message: string;
}

export interface ApiErrorDetail {
  code: string;
  message: string;
  details?: ApiFieldError[];
}

export interface ApiResponseSuccess<T> {
  success: true;
  data: T;
  meta: ApiMeta;
}

export interface ApiResponseError {
  success: false;
  error: ApiErrorDetail;
  meta?: ApiMeta;
}

export type ApiResponse<T> = ApiResponseSuccess<T> | ApiResponseError;

export interface CategorySummary {
  id: string;
  name: LocalizedText;
  slug: LocalizedText;
  description?: LocalizedText;
  imageUrl?: string;
  displayOrder?: number;
  productCount?: number;
}

export interface Testimonial {
  id: string;
  authorName: string;
  authorLocation: string;
  content: LocalizedText;
  rating: number;
  avatarUrl?: string;
  date: string;
}

export interface GoogleReview {
  authorAttribution: {
    displayName: string;
    photoUri?: string;
  };
  rating: number;
  text?: {
    text: string;
  };
  publishTime?: string;
}

export interface GoogleReviewsResponse {
  rating?: number;
  userRatingCount?: number;
  reviews: GoogleReview[];
}

export interface FaqItem {
  id: string;
  category: 'general' | 'custom-cakes' | 'orders' | 'catering';
  question: LocalizedText;
  answer: LocalizedText;
  displayOrder: number;
}

export interface GalleryMediaItem {
  id: string;
  publicId: string;
  secureUrl: string;
  altText: LocalizedText;
  title: LocalizedText;
  category: 'cakes' | 'breads' | 'pastries' | 'store';
  aspectRatio: string;
}
