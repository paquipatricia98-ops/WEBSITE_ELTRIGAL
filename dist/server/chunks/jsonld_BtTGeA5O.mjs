import { S as SITE_CONFIG } from './BaseLayout_CmgIPuhw.mjs';

function getBakeryJsonLd(locale) {
  return {
    "@context": "https://schema.org",
    "@type": ["Bakery", "LocalBusiness", "FoodEstablishment"],
    "@id": `${SITE_CONFIG.social.googleBusiness}#bakery`,
    "name": SITE_CONFIG.name,
    "legalName": SITE_CONFIG.legalName,
    "description": SITE_CONFIG.description[locale],
    "url": `https://eltrigalbakery.com/${locale}/`,
    "telephone": SITE_CONFIG.phone.e164,
    "email": SITE_CONFIG.email,
    "priceRange": "$$",
    "image": "https://eltrigalbakery.com/og-image.jpg",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": SITE_CONFIG.address.street,
      "addressLocality": SITE_CONFIG.address.city,
      "addressRegion": SITE_CONFIG.address.state,
      "postalCode": SITE_CONFIG.address.zip,
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": SITE_CONFIG.geo.latitude,
      "longitude": SITE_CONFIG.geo.longitude
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "06:00",
        "closes": "21:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Sunday"],
        "opens": "06:00",
        "closes": "18:00"
      }
    ],
    "sameAs": [
      SITE_CONFIG.social.facebook,
      SITE_CONFIG.social.instagram,
      SITE_CONFIG.social.tiktok,
      SITE_CONFIG.social.googleBusiness
    ],
    "servesCuisine": ["Ecuadorean", "Bakery", "Pastries", "Empanadas", "Custom Cakes"],
    "acceptsReservations": "True",
    "hasMenu": `https://eltrigalbakery.com/${locale}/menu`,
    "founder": {
      "@type": "Person",
      "name": "Lizbeth Toroshina"
    },
    "foundingDate": "2000"
    // Reference value based on typical long-standing bakeries if actual year is unknown.
  };
}
function getProductJsonLd(product, locale) {
  const price = product.basePriceCents ? (product.basePriceCents / 100).toFixed(2) : "0.00";
  const primaryImage = product.media.find((m) => m.isPrimary) || product.media[0];
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name[locale],
    "description": product.description[locale] || product.shortDescription[locale],
    "image": primaryImage ? [primaryImage.secureUrl] : [],
    "sku": product.sku || product.id,
    "brand": {
      "@type": "Brand",
      "name": SITE_CONFIG.name
    },
    "offers": {
      "@type": "Offer",
      "url": `https://eltrigalbakery.com/${locale === "es" ? "es/productos" : "en/products"}/${product.slug[locale]}`,
      "priceCurrency": "USD",
      "price": price,
      "priceValidUntil": new Date(Date.now() + 365 * 24 * 60 * 60 * 1e3).toISOString().split("T")[0],
      "itemCondition": "https://schema.org/NewCondition",
      "availability": product.availability.isAvailable ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
      "seller": {
        "@type": "Organization",
        "name": SITE_CONFIG.name
      }
    }
  };
}
function getFaqJsonLd(faqs, locale) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question[locale],
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer[locale]
      }
    }))
  };
}
function getBreadcrumbJsonLd(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
}

export { getBakeryJsonLd as a, getProductJsonLd as b, getBreadcrumbJsonLd as c, getFaqJsonLd as g };
