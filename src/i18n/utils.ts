import { DEFAULT_LOCALE, LANGUAGES, ROUTE_MAP, UI_STRINGS } from './ui';
import type { Locale } from '../types/api';

export function getLocaleFromUrl(url: URL): Locale {
  const [, lang] = url.pathname.split('/');
  if (lang && lang in LANGUAGES) {
    return lang as Locale;
  }
  return DEFAULT_LOCALE;
}

export function useTranslations(locale: Locale) {
  return function t(key: keyof typeof UI_STRINGS['es'], params?: Record<string, string | number>): string {
    const dict = UI_STRINGS[locale] || UI_STRINGS[DEFAULT_LOCALE];
    let text: string = String(dict[key] || UI_STRINGS[DEFAULT_LOCALE][key] || String(key));
    if (params) {
      Object.entries(params).forEach(([paramKey, paramVal]) => {
        text = text.replace(`{${paramKey}}`, String(paramVal));
      });
    }
    return text;
  };
}

export function getTranslatedRoute(routeKey: keyof typeof ROUTE_MAP, locale: Locale): string {
  const route = ROUTE_MAP[routeKey];
  if (!route) return `/${locale}/`;
  return route[locale];
}

/**
 * Given a URL pathname (e.g. /es/pasteles-personalizados), returns the equivalent pathname in targetLocale (/en/custom-cakes).
 */
export function getEquivalentRoute(pathname: string, targetLocale: Locale): string {
  // Check exact matches in route map
  for (const [, paths] of Object.entries(ROUTE_MAP)) {
    if (paths.es === pathname || paths.en === pathname) {
      return paths[targetLocale];
    }
  }

  // Handle /es/menu/category-slug -> /en/menu/category-slug
  if (pathname.includes('/menu/')) {
    const parts = pathname.split('/menu/');
    if (parts.length === 2 && parts[1]) {
      return `/${targetLocale}/menu/${parts[1]}`;
    }
  }

  // Handle product pages: /es/productos/slug <-> /en/products/slug
  if (pathname.includes('/productos/') || pathname.includes('/products/')) {
    const slug = pathname.split('/').pop() || '';
    if (targetLocale === 'en') {
      return `/en/products/${slug}`;
    } else {
      return `/es/productos/${slug}`;
    }
  }

  // Fallback to home of target locale
  return `/${targetLocale}/`;
}
