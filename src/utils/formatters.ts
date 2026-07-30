import type { Locale } from '../types/api';

/**
 * Formats a price given in cents to USD currency string.
 * Example: 1250 -> "$12.50"
 */
export function formatPriceCents(cents: number | null | undefined, locale: Locale = 'es'): string {
  if (cents === null || cents === undefined || isNaN(cents)) {
    return '';
  }
  const dollars = cents / 100;
  return new Intl.NumberFormat(locale === 'es' ? 'es-US' : 'en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(dollars);
}

/**
 * Formats ISO date string to localized date
 */
export function formatDate(dateString: string, locale: Locale = 'es'): string {
  try {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return dateString;
    return new Intl.DateTimeFormat(locale === 'es' ? 'es-US' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(date);
  } catch {
    return dateString;
  }
}
