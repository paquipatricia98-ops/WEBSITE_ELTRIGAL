import { e as createAstro, f as createComponent, h as addAttribute, r as renderTemplate, u as unescapeHTML, n as renderHead, m as maybeRenderHead, k as renderComponent, o as Fragment, l as renderScript, p as renderSlot } from './astro/server_BYp-mrTa.mjs';
import 'piccolore';
import 'clsx';
/* empty css                                   */

const SITE_CONFIG = {
  name: "Panadería y Pastelería El Trigal",
  legalName: "Panadería y Pastelería El Trigal LLC",
  description: {
    es: "La auténtica panadería latina y ecuatoriana en Orange, NJ: pan de Ambato fresco, pasteles personalizados, postres tradicionales, colada morada y guaguas de pan.",
    en: "The authentic Latin and Ecuadorian bakery in Orange, NJ: fresh Ambato bread, custom cakes, traditional desserts, and seasonal treats."
  },
  keywords: {
    es: "panadería ecuatoriana en Orange NJ, panadería latina, panadería hispana cerca de mi, panadería y pastelería ecuatoriana, pan de Ambato, colada morada y guaguas de pan, pasteles de tres leches, pasteles personalizados para cumpleaños, postres ecuatorianos, empanadas de queso y de viento, pan recién horneado, pan dulce latino",
    en: "Ecuadorian bakery near me, Latin bakery Orange NJ, Hispanic bakery, authentic Ambato bread, custom cakes NJ, tres leches cake, Ecuadorian desserts, fresh baked sweet bread"
  },
  address: {
    street: "23 S Essex Ave",
    city: "Orange",
    state: "NJ",
    zip: "07050",
    fullFormatted: "23 S Essex Ave, Orange, NJ 07050",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Panaderia+y+Pasteleria+El+Trigal+23+S+Essex+Ave+Orange+NJ+07050"
  },
  phone: {
    display: "(862) 704-2116",
    e164: "+18627042116",
    tel: "tel:+18627042116",
    whatsappDisplay: "(347) 842-9351",
    whatsapp: "https://wa.me/13478429351",
    businessDisplay: "(862) 704-2116",
    businessTel: "tel:+18627042116"
  },
  email: "eltrigalbakery2024@gmail.com",
  geo: {
    latitude: 40.7753,
    longitude: -74.2329
  },
  social: {
    facebook: "https://www.facebook.com/profile.php?id=61556764960773",
    instagram: "https://www.instagram.com/bakery.eltrigal/",
    tiktok: "https://www.tiktok.com/@bakery.eltrigal",
    googleBusiness: "https://www.google.com/maps/search/?api=1&query=Panaderia+y+Pasteleria+El+Trigal+23+S+Essex+Ave+Orange+NJ+07050"
  },
  hours: [
    { days: { es: "Lunes a Sábado", en: "Monday to Saturday" }, hours: "6:00 AM - 9:00 PM" },
    { days: { es: "Domingo", en: "Sunday" }, hours: "6:00 AM - 6:00 PM" }
  ],
  ordering: {
    doordashUrl: "https://www.doordash.com/store/panaderia-y-pasteleria-el-trigal-orange-33062059/54896547",
    ubereatsUrl: "https://www.ubereats.com/store/panaderia-y-pasteleria-el-trigal/gDo8qlwkUaiHR_z3ww21_A"
  },
  serviceAreas: ["Orange, NJ", "East Orange, NJ", "West Orange, NJ", "South Orange, NJ", "Essex County, NJ"]
};

const DEFAULT_LOCALE = "es";
const ROUTE_MAP = {
  "home": { es: "/es/", en: "/en/" },
  "menu": { es: "/es/menu", en: "/en/menu" },
  "custom-cakes": { es: "/es/pasteles-personalizados", en: "/en/custom-cakes" },
  "ecuadorian-bakery": { es: "/es/panaderia-ecuatoriana", en: "/en/ecuadorian-bakery" },
  "ecuadorian-products": { es: "/es/productos-ecuatorianos", en: "/en/ecuadorian-products" },
  "catering": { es: "/es/catering-eventos", en: "/en/catering-events" },
  "our-story": { es: "/es/nuestra-historia", en: "/en/our-story" },
  "gallery": { es: "/es/galeria", en: "/en/gallery" },
  "faq": { es: "/es/preguntas-frecuentes", en: "/en/faq" },
  "contact": { es: "/es/contacto", en: "/en/contact" },
  "privacy": { es: "/es/privacidad", en: "/en/privacy" },
  "terms": { es: "/es/terminos", en: "/en/terms" }
};
const UI_STRINGS = {
  es: {
    // Navigation
    "nav.home": "Inicio",
    "nav.menu": "Catálogo",
    "nav.ecuadorianBakery": "Panadería",
    "nav.customCakes": "Productos 🇪🇨",
    "nav.ecuadorianProducts": "Productos 🇪🇨",
    "nav.catering": "Catering",
    "nav.ourStory": "Nosotros",
    "nav.gallery": "Galería",
    "nav.faq": "FAQ",
    "nav.contact": "Contacto",
    "nav.orderNow": "Ordenar Ahora",
    "nav.quoteCake": "Cotizar Pastel",
    "nav.callUs": "Llamar",
    "nav.directions": "Cómo Llegar",
    "nav.openMenu": "Abrir menú principal",
    "nav.closeMenu": "Cerrar menú",
    "nav.switchLanguage": "Cambiar idioma",
    // Hero Section
    "hero.badge": "Tradición ambateña en Orange, New Jersey",
    "hero.title": "Sabores que nos conectan con Ecuador",
    "hero.subtitle": "En Panadería y Pastelería El Trigal encontrarás el auténtico sabor de Ecuador con una gran variedad de panes tradicionales ambateños, pasteles personalizados, deliciosos postres y productos ecuatorianos. Todo elaborado con recetas tradicionales e ingredientes de la mejor calidad. ¡Te esperamos para compartir el sabor de nuestra tierra!",
    "hero.ctaMenu": "Ver nuestros productos",
    "hero.ctaQuote": "Cotizar Pastel Personalizado",
    "hero.feature1": "Pan fresco desde las 6:00 AM",
    "hero.feature2": "Recetas artesanales con sabor ecuatoriano",
    "hero.feature3": "Pasteles personalizados para toda ocasión",
    // Home Sections
    "home.featuredTitle": "Nuestros Productos Destacados",
    "home.featuredSubtitle": "Los favoritos de nuestra comunidad ecuatoriana y latina en Orange, NJ",
    "home.categoriesTitle": "Explora Nuestras Categorías",
    "home.categoriesSubtitle": "Desde pan de Ambato hasta bocaditos y pasteles finos",
    "home.ecuadorianBreadTitle": "Dulzura que se transmite de generación en generación",
    "home.ecuadorianBreadText": "Siente el aroma y el sabor que han conquistado generaciones. En Panadería y Pastelería El Trigal elaboramos diariamente el auténtico pan ambateño con recetas tradicionales e ingredientes de la mejor calidad. Disfruta de nuestras empanadas de queso, cachitos, enrollados, pan de maíz, pan integral, pan de leche, pan dulce, pan de chocolate y muchas delicias más, horneadas con el mismo amor y dedicación de siempre.",
    "home.ecuadorianBreadCta": "Descubrir nuestros productos",
    "home.customCakesTitle": "Pasteles Únicos para Tus Celebraciones",
    "home.customCakesText": "Transformamos tu visión en un pastel espectacular. Elige tu sabor, relleno y diseño favorito para bodas, bautizos, cumpleaños y eventos.",
    "home.customCakesCta": "Ver Catálogo y Cotizar",
    "home.historyBadge": "🇪🇨 UN RINCÓN DE ECUADOR EN ORANGE, NJ",
    "home.historyTitle": "Conoce Bakery “El Trigal”",
    "home.historyText": "Somos una panadería ecuatoriana de tradición ambateña ubicada en Orange, New Jersey. Ofrecemos panes y productos horneados, pasteles, postres, bebidas y una variedad de productos ecuatorianos que nos conectan con nuestra tierra. Trabajamos para brindar productos frescos, precios accesibles y un espacio limpio y acogedor donde puedas disfrutar y compartir en familia.",
    "home.historyCta": "Conoce nuestra historia",
    "home.processTitle": "¿Cómo Cotizar tu Pastel Personalizado?",
    "home.processStep1Title": "1. Elige Fecha y Porciones",
    "home.processStep1Text": "Selecciona el día de tu evento y la cantidad de invitados.",
    "home.processStep2Title": "2. Define Sabor y Diseño",
    "home.processStep2Text": "Elige masas, rellenos, tema y sube fotos de referencia.",
    "home.processStep3Title": "3. Recibe la Cotización",
    "home.processStep3Text": "Te contactamos para confirmar detalles y el precio final.",
    "home.testimonialsTitle": "Lo que Dicen Nuestros Clientes",
    "home.testimonialsSubtitle": "Historias reales de la comunidad de Orange, NJ",
    "home.faqTitle": "Preguntas Frecuentes",
    "home.locationTitle": "Visítanos en Orange, NJ",
    "home.locationSubtitle": "Tu panadería ecuatoriana de confianza",
    "home.finalCtaTitle": "¿Tienes antojo de pan fresco ecuatoriano o necesitas un pastel?",
    "home.finalCtaText": "Visítanos hoy o haz tu pedido por teléfono o DoorDash.",
    // Menu Page
    "menu.title": "Nuestro Catálogo Completo",
    "menu.subtitle": "Explora la variedad de panes, pasteles, bocaditos y productos tradicionales ecuatorianos.",
    "menu.searchPlaceholder": "Buscar pan, pastel, empanada...",
    "menu.allCategories": "Todas las Categorías",
    "menu.availabilityAll": "Todos los productos",
    "menu.availabilityInStock": "Disponible hoy",
    "menu.noResultsTitle": "No encontramos productos",
    "menu.noResultsText": "Intenta buscar con otros términos o seleccionar otra categoría.",
    "menu.clearFilters": "Limpiar filtros",
    // Product Detail Page
    "product.servings": "Porciones recomendadas",
    "product.leadTime": "Tiempo de anticipación",
    "product.leadTimeDays": "{days} días de anticipación",
    "product.allergensTitle": "Información de Alérgenos",
    "product.ingredientsTitle": "Ingredientes Principales",
    "product.dietaryTags": "Etiquetas Nutricionales",
    "product.orderingTitle": "¿Cómo Comprar este Producto?",
    "product.callToOrder": "Llamar al (347) 842-9351",
    "product.orderDoorDash": "Pedir por DoorDash",
    "product.quoteCustomCake": "Solicitar Cotización",
    "product.relatedTitle": "Productos Relacionados",
    "product.available": "Disponible",
    "product.unavailable": "Temporalmente no disponible",
    // Forms
    "form.contactTitle": "Envíanos un Mensaje",
    "form.nameLabel": "Nombre completo *",
    "form.emailLabel": "Correo electrónico *",
    "form.phoneLabel": "Teléfono (opcional)",
    "form.subjectLabel": "Asunto *",
    "form.messageLabel": "Mensaje *",
    "form.send": "Enviar Mensaje",
    "form.sending": "Enviando...",
    "form.successContact": "¡Gracias por escribirnos! Te responderemos muy pronto.",
    "form.errorGeneral": "Ocurrió un error. Por favor inténtalo de nuevo o llámanos directamente.",
    "cakeForm.title": "Formulario de Cotización de Pastel",
    "cakeForm.customerName": "Nombre y Apellido *",
    "cakeForm.email": "Correo Electrónico *",
    "cakeForm.phone": "Teléfono con código de área (E.164) *",
    "cakeForm.eventDate": "Fecha del Evento *",
    "cakeForm.eventType": "Tipo de Evento *",
    "cakeForm.servings": "Número de Porciones Estimadas *",
    "cakeForm.budget": "Presupuesto Aproximado (USD)",
    "cakeForm.flavor": "Sabor de Bizcocho Deseado",
    "cakeForm.filling": "Relleno Deseado",
    "cakeForm.theme": "Tema o Estilo del Pastel",
    "cakeForm.message": "Detalles adicionales o especificaciones de decoración",
    "cakeForm.consent": "Acepto recibir comunicación de Panadería El Trigal para coordinar la cotización. *",
    "cakeForm.submit": "Enviar Solicitud de Cotización",
    "cakeForm.success": "¡Solicitud recibida con éxito! Nuestro equipo de pastelería te contactará a la brevedad.",
    // Event Types
    "eventType.birthday": "Cumpleaños",
    "eventType.baptism": "Bautizo",
    "eventType.communion": "Primera Comunión",
    "eventType.confirmation": "Confirmación",
    "eventType.wedding": "Boda / Matrimonio",
    "eventType.graduation": "Graduación",
    "eventType.corporate": "Evento Corporativo",
    "eventType.other": "Otro Evento Especial",
    // Footer
    "footer.aboutTitle": "Panadería El Trigal",
    "footer.aboutText": "La auténtica tradición panadera de Ambato, Ecuador, horneada diariamente en Orange, NJ.",
    "footer.quickLinks": "Enlaces Rápidos",
    "footer.hoursTitle": "Horarios de Atención",
    "footer.contactTitle": "Información de Contacto",
    "footer.copyright": "© {year} Panadería y Pastelería El Trigal. Todos los derechos reservados.",
    "footer.privacy": "Política de Privacidad",
    "footer.terms": "Términos de Servicio",
    // Common
    "common.backToMenu": "Volver al Catálogo",
    "common.viewDetails": "Ver Detalle",
    "common.loading": "Cargando...",
    "common.errorTitle": "Error al cargar datos",
    "common.errorText": "No se pudo obtener la información del servidor. Mostrando catálogo guardado.",
    "common.tryAgain": "Reintentar"
  },
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.menu": "Catalog",
    "nav.ecuadorianBakery": "Bakery",
    "nav.customCakes": "Products 🇪🇨",
    "nav.ecuadorianProducts": "Products 🇪🇨",
    "nav.catering": "Catering",
    "nav.ourStory": "Story",
    "nav.gallery": "Gallery",
    "nav.faq": "FAQ",
    "nav.contact": "Contact",
    "nav.orderNow": "Order Now",
    "nav.quoteCake": "Quote a Cake",
    "nav.callUs": "Call Us",
    "nav.directions": "Get Directions",
    "nav.openMenu": "Open main menu",
    "nav.closeMenu": "Close menu",
    "nav.switchLanguage": "Switch language",
    // Hero Section
    "hero.badge": "Ambato Tradition in New Jersey",
    "hero.title": "Authentic Flavors of Ecuador in Orange, NJ",
    "hero.subtitle": "At El Trigal Bakery and Pastry Shop you will find the authentic taste of Ecuador with a wide variety of traditional Ambato breads, custom cakes, delicious desserts and Ecuadorian products. Everything is made with traditional recipes and the highest quality ingredients. We wait for you to share the taste of our land!",
    "hero.ctaMenu": "Explore Catalog",
    "hero.ctaQuote": "Quote Custom Cake",
    "hero.feature1": "Daily fresh baking from 6:00 AM",
    "hero.feature2": "100% artisanal recipes from Ambato",
    "hero.feature3": "High-quality Ecuadorian ingredients",
    // Home Sections
    "home.featuredTitle": "Our Featured Products",
    "home.featuredSubtitle": "Community favorites in Orange, NJ",
    "home.categoriesTitle": "Explore Our Categories",
    "home.categoriesSubtitle": "From Ambato bread to pastries and custom cakes",
    "home.ecuadorianBreadTitle": "Freshly Baked Ecuadorian Bread",
    "home.ecuadorianBreadText": "Feel the aroma and flavor that have conquered generations. At El Trigal Bakery and Pastry Shop we bake authentic Ambato bread daily with traditional recipes and the highest quality ingredients. Enjoy our cheese empanadas, cachitos, enrollados, corn bread, whole wheat bread, milk bread, sweet bread, chocolate bread and many more delicacies, baked with the same love and dedication as always.",
    "home.ecuadorianBreadCta": "Discover Ecuadorian Bakery",
    "home.customCakesTitle": "Unique Custom Cakes for Every Event",
    "home.customCakesText": "We turn your vision into a stunning custom cake. Choose your preferred flavor, filling, and design for weddings, birthdays, and anniversaries.",
    "home.customCakesCta": "View Cake Catalog & Quote",
    "home.historyBadge": "🇪🇨 A TASTE OF ECUADOR IN ORANGE, NJ",
    "home.historyTitle": "Meet Bakery “El Trigal”",
    "home.historyText": "We are an Ecuadorian bakery with Ambato traditions located in Orange, New Jersey. We offer breads, baked goods, custom cakes, desserts, beverages, and a variety of Ecuadorian products that connect us to our homeland. We strive to provide fresh products, affordable prices, and a clean, welcoming space where you can enjoy and share with your family.",
    "home.historyCta": "Read Our Story",
    "home.processTitle": "How to Order a Custom Cake?",
    "home.processStep1Title": "1. Pick Date & Servings",
    "home.processStep1Text": "Select your event date and estimated guest count.",
    "home.processStep2Title": "2. Select Flavor & Theme",
    "home.processStep2Text": "Choose cake bases, fillings, theme, and upload design photos.",
    "home.processStep3Title": "3. Get Your Quote",
    "home.processStep3Text": "We will contact you to confirm details and provide the final price.",
    "home.testimonialsTitle": "What Our Customers Say",
    "home.testimonialsSubtitle": "Real stories from our Orange, NJ community",
    "home.faqTitle": "Frequently Asked Questions",
    "home.locationTitle": "Visit Us in Orange, NJ",
    "home.locationSubtitle": "Your trusted Ecuadorian bakery",
    "home.finalCtaTitle": "Craving fresh Ecuadorian bread or need a custom cake?",
    "home.finalCtaText": "Visit us today or place your order via phone or DoorDash.",
    // Menu Page
    "menu.title": "Our Full Catalog",
    "menu.subtitle": "Browse our selection of breads, cakes, snacks, and traditional Ecuadorian goods.",
    "menu.searchPlaceholder": "Search bread, cake, empanada...",
    "menu.allCategories": "All Categories",
    "menu.availabilityAll": "All products",
    "menu.availabilityInStock": "Available today",
    "menu.noResultsTitle": "No products found",
    "menu.noResultsText": "Try adjusting your search terms or selecting a different category.",
    "menu.clearFilters": "Clear filters",
    // Product Detail Page
    "product.servings": "Recommended servings",
    "product.leadTime": "Advance notice required",
    "product.leadTimeDays": "{days} days advance notice",
    "product.allergensTitle": "Allergen Information",
    "product.ingredientsTitle": "Main Ingredients",
    "product.dietaryTags": "Dietary Tags",
    "product.orderingTitle": "How to Order This Item",
    "product.callToOrder": "Call (347) 842-9351",
    "product.orderDoorDash": "Order on DoorDash",
    "product.quoteCustomCake": "Request Quote",
    "product.relatedTitle": "Related Products",
    "product.available": "Available",
    "product.unavailable": "Temporarily out of stock",
    // Forms
    "form.contactTitle": "Send Us a Message",
    "form.nameLabel": "Full Name *",
    "form.emailLabel": "Email Address *",
    "form.phoneLabel": "Phone (optional)",
    "form.subjectLabel": "Subject *",
    "form.messageLabel": "Message *",
    "form.send": "Send Message",
    "form.sending": "Sending...",
    "form.successContact": "Thank you for reaching out! We will reply very soon.",
    "form.errorGeneral": "An error occurred. Please try again or call us directly.",
    "cakeForm.title": "Custom Cake Quote Request",
    "cakeForm.customerName": "Full Name *",
    "cakeForm.email": "Email Address *",
    "cakeForm.phone": "Phone number with area code (E.164) *",
    "cakeForm.eventDate": "Event Date *",
    "cakeForm.eventType": "Event Type *",
    "cakeForm.servings": "Estimated Servings *",
    "cakeForm.budget": "Approximate Budget (USD)",
    "cakeForm.flavor": "Desired Cake Flavor",
    "cakeForm.filling": "Desired Filling",
    "cakeForm.theme": "Cake Theme or Style",
    "cakeForm.message": "Additional details or decoration specs",
    "cakeForm.consent": "I agree to be contacted by El Trigal Bakery to coordinate the quote. *",
    "cakeForm.submit": "Submit Quote Request",
    "cakeForm.success": "Request submitted successfully! Our bakery team will contact you shortly.",
    // Event Types
    "eventType.birthday": "Birthday",
    "eventType.baptism": "Baptism",
    "eventType.communion": "First Communion",
    "eventType.confirmation": "Confirmation",
    "eventType.wedding": "Wedding",
    "eventType.graduation": "Graduation",
    "eventType.corporate": "Corporate Event",
    "eventType.other": "Other Special Event",
    // Footer
    "footer.aboutTitle": "El Trigal Bakery",
    "footer.aboutText": "The authentic baking tradition of Ambato, Ecuador, freshly baked daily in Orange, NJ.",
    "footer.quickLinks": "Quick Links",
    "footer.hoursTitle": "Operating Hours",
    "footer.contactTitle": "Contact Information",
    "footer.copyright": "© {year} Panadería y Pastelería El Trigal. All rights reserved.",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
    // Common
    "common.backToMenu": "Back to Catalog",
    "common.viewDetails": "View Details",
    "common.loading": "Loading...",
    "common.errorTitle": "Data loading error",
    "common.errorText": "Could not fetch data from server. Showing cached catalog.",
    "common.tryAgain": "Try Again"
  }
};

function useTranslations(locale) {
  return function t(key, params) {
    const dict = UI_STRINGS[locale] || UI_STRINGS[DEFAULT_LOCALE];
    let text = String(dict[key] || UI_STRINGS[DEFAULT_LOCALE][key] || String(key));
    if (params) {
      Object.entries(params).forEach(([paramKey, paramVal]) => {
        text = text.replace(`{${paramKey}}`, String(paramVal));
      });
    }
    return text;
  };
}
function getEquivalentRoute(pathname, targetLocale) {
  for (const [, paths] of Object.entries(ROUTE_MAP)) {
    if (paths.es === pathname || paths.en === pathname) {
      return paths[targetLocale];
    }
  }
  if (pathname.includes("/menu/")) {
    const parts = pathname.split("/menu/");
    if (parts.length === 2 && parts[1]) {
      return `/${targetLocale}/menu/${parts[1]}`;
    }
  }
  if (pathname.includes("/productos/") || pathname.includes("/products/")) {
    const slug = pathname.split("/").pop() || "";
    if (targetLocale === "en") {
      return `/en/products/${slug}`;
    } else {
      return `/es/productos/${slug}`;
    }
  }
  return `/${targetLocale}/`;
}

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$a = createAstro("https://eltrigalbakery.com");
const $$SeoHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$SeoHead;
  const {
    title,
    description,
    locale,
    ogImage = "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1200&h=630&auto=format&fit=crop&q=80",
    jsonLd,
    noindex = false
  } = Astro2.props;
  const siteTitle = title ? `${title} | ${SITE_CONFIG.name}` : `${SITE_CONFIG.name} | Pan de Ambato y Pasteles en Orange, NJ`;
  const metaDescription = description || SITE_CONFIG.description[locale];
  const metaKeywords = SITE_CONFIG.keywords[locale];
  const canonicalUrl = new URL(Astro2.url.pathname, Astro2.site);
  const currentPath = Astro2.url.pathname;
  const esUrl = new URL(getEquivalentRoute(currentPath, "es"), Astro2.site).href;
  const enUrl = new URL(getEquivalentRoute(currentPath, "en"), Astro2.site).href;
  return renderTemplate`<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"><link rel="icon" type="image/svg+xml" href="/favicon.svg?v=2"><link rel="mask-icon" href="/favicon.svg?v=2" color="#F25C27"><link rel="apple-touch-icon" href="/favicon.svg?v=2"><meta name="generator"${addAttribute(Astro2.generator, "content")}><!-- Primary Meta Tags --><title>${siteTitle}</title><meta name="title"${addAttribute(siteTitle, "content")}><meta name="description"${addAttribute(metaDescription, "content")}><meta name="keywords"${addAttribute(metaKeywords, "content")}>${noindex && renderTemplate`<meta name="robots" content="noindex, nofollow">`}<!-- Canonical & Hreflang --><link rel="canonical"${addAttribute(canonicalUrl.href, "href")}><link rel="alternate" hreflang="es"${addAttribute(esUrl, "href")}><link rel="alternate" hreflang="en"${addAttribute(enUrl, "href")}><link rel="alternate" hreflang="x-default"${addAttribute(esUrl, "href")}><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"${addAttribute(canonicalUrl.href, "content")}><meta property="og:title"${addAttribute(siteTitle, "content")}><meta property="og:description"${addAttribute(metaDescription, "content")}><meta property="og:image"${addAttribute(ogImage, "content")}><meta property="og:locale"${addAttribute(locale === "es" ? "es_US" : "en_US", "content")}><meta property="og:site_name"${addAttribute(SITE_CONFIG.name, "content")}><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${addAttribute(canonicalUrl.href, "content")}><meta property="twitter:title"${addAttribute(siteTitle, "content")}><meta property="twitter:description"${addAttribute(metaDescription, "content")}><meta property="twitter:image"${addAttribute(ogImage, "content")}><!-- Google Fonts --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;0,800;1,600&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet"><!-- Structured Data JSON-LD -->${jsonLd && renderTemplate(_a || (_a = __template(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(JSON.stringify(jsonLd)))}${renderHead()}</head>`;
}, "/Users/user/Documents/EL TRIGAL/WEBSITE_ELTRIGAL/src/components/seo/SeoHead.astro", void 0);

const $$Astro$9 = createAstro("https://eltrigalbakery.com");
const $$Logo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Logo;
  const { size = "md", variant = "inline", class: className = "", showText = true, theme = "light" } = Astro2.props;
  const dimensions = {
    sm: "w-10 h-10",
    md: "w-12 h-12",
    lg: "w-16 h-16",
    xl: "w-24 h-24"
  }[size];
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`inline-flex items-center space-x-3 group ${className}`, "class")}> <!-- Logo SVG Emblem matching official El Trigal logo image --> <div${addAttribute(`${dimensions} relative shrink-0 rounded-full shadow-md group-hover:scale-105 transition-transform duration-300`, "class")}> <svg viewBox="0 0 200 200" class="w-full h-full drop-shadow" xmlns="http://www.w3.org/2000/svg"> <!-- Outer Dark Brown Ring --> <circle cx="100" cy="100" r="98" fill="#4A3C31" stroke="#D4AF37" stroke-width="4"></circle> <!-- Outer Gold Ring with Embellishments --> <circle cx="100" cy="100" r="90" fill="none" stroke="#D4AF37" stroke-width="6"></circle> <circle cx="100" cy="100" r="84" fill="#FDFBF7" stroke="#C5A059" stroke-width="2" stroke-dasharray="3 3"></circle> <!-- Inner Gold Ring --> <circle cx="100" cy="100" r="76" fill="#D4AF37"></circle> <!-- Center Cream Disc --> <circle cx="100" cy="100" r="68" fill="#FDFBF7" stroke="#4A3C31" stroke-width="3"></circle> <circle cx="100" cy="100" r="64" fill="none" stroke="#4A3C31" stroke-width="1"></circle> <!-- Curved BAKERY Text Arc --> <path id="bakeryArc" d="M 52,90 A 50,50 0 0,1 148,90" fill="none"></path> <text font-family="'Playfair Display', Georgia, serif" font-size="15" font-weight="800" fill="#4A3C31" letter-spacing="3"> <textPath href="#bakeryArc" startOffset="50%" text-anchor="middle">
BAKERY
</textPath> </text> <!-- Steam Lines --> <path d="M 94,54 Q 96,48 94,44" fill="none" stroke="#4A3C31" stroke-width="2" stroke-linecap="round"></path> <path d="M 100,52 Q 102,46 100,42" fill="none" stroke="#4A3C31" stroke-width="2" stroke-linecap="round"></path> <path d="M 106,54 Q 108,48 106,44" fill="none" stroke="#4A3C31" stroke-width="2" stroke-linecap="round"></path> <!-- Main EL TRIGAL Text --> <text x="100" y="108" font-family="'Playfair Display', Georgia, serif" font-size="20" font-weight="900" fill="#4A3C31" text-anchor="middle" letter-spacing="1">
EL TRIGAL
</text> <!-- Rolling Pin (Rodillo) --> <g fill="#4A3C31"> <!-- Handles --> <rect x="58" y="122" width="10" height="4" rx="2"></rect> <rect x="132" y="122" width="10" height="4" rx="2" stroke="#4A3C31"></rect> <!-- Barrel --> <rect x="68" y="119" width="64" height="10" rx="3"></rect> <line x1="72" y1="124" x2="128" y2="124" stroke="#FDFBF7" stroke-width="1.5" opacity="0.6"></line> </g> <!-- Wheat Stalks (Espigas de Trigo) --> <g stroke="#4A3C31" stroke-width="2" fill="#4A3C31"> <!-- Left Stalk --> <path d="M 100,154 Q 76,148 56,134" fill="none" stroke-linecap="round"></path> <circle cx="60" cy="136" r="3"></circle> <circle cx="68" cy="140" r="3"></circle> <circle cx="76" cy="144" r="3"></circle> <circle cx="85" cy="148" r="3"></circle> <!-- Right Stalk --> <path d="M 100,154 Q 124,148 144,134" fill="none" stroke-linecap="round"></path> <circle cx="140" cy="136" r="3"></circle> <circle cx="132" cy="140" r="3"></circle> <circle cx="124" cy="144" r="3"></circle> <circle cx="115" cy="148" r="3"></circle> </g> </svg> </div> <!-- Text side branding with variant styling --> ${showText && renderTemplate`<div class="flex flex-col justify-center"> <span${addAttribute(`font-serif text-xl sm:text-2xl font-black tracking-tight transition-colors ${theme === "dark" ? "text-brand-cream group-hover:text-white" : "text-brand-brown group-hover:text-brand-brown-dark"}`, "class")}>
El Trigal
</span> ${variant === "inline" && renderTemplate`<div class="flex items-center space-x-1.5 pt-0.5"> <span class="h-0.5 w-3 bg-brand-gold rounded-full"></span> <span class="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-brand-gold-secondary whitespace-nowrap">
Panadería & Pastelería
</span> </div>`} ${variant === "stacked" && renderTemplate`<div class="flex flex-col leading-tight pt-0.5"> <span class="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-brand-gold-secondary">
PANADERÍA &
</span> <span class="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-brand-gold-secondary">
PASTELERÍA
</span> </div>`} ${variant === "badge" && renderTemplate`<div class="mt-1"> <span class="inline-block px-2 py-0.5 rounded-full bg-brand-brown text-brand-gold text-[9px] font-extrabold uppercase tracking-widest border border-brand-gold/40">
Panadería & Pastelería
</span> </div>`} </div>`} </div>`;
}, "/Users/user/Documents/EL TRIGAL/WEBSITE_ELTRIGAL/src/components/ui/Logo.astro", void 0);

const $$Astro$8 = createAstro("https://eltrigalbakery.com");
const $$SocialLinks = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$SocialLinks;
  const { size = "md", class: className = "", showLabels = false } = Astro2.props;
  const dimensions = {
    sm: "w-8 h-8 text-xs",
    md: "w-10 h-10 text-sm",
    lg: "w-12 h-12 text-base"
  }[size];
  const iconSizes = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6"
  }[size];
  const socialLinks = [
    {
      name: "TikTok",
      url: SITE_CONFIG.social.tiktok,
      bgClass: "bg-[#000000] text-white hover:shadow-[0_0_15px_rgba(255,255,255,0.4)] border border-slate-800",
      iconPath: "M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.82.56-1.36 1.47-1.44 2.45-.1 1.2.47 2.38 1.47 3.06.94.63 2.18.73 3.18.26 1.05-.48 1.76-1.52 1.83-2.67.06-2.58.02-5.17.03-7.75.01-4.27.01-8.53.01-12.8z"
    },
    {
      name: "Instagram",
      url: SITE_CONFIG.social.instagram,
      bgClass: "bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white hover:shadow-[0_0_15px_rgba(220,39,67,0.5)]",
      iconPath: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
    },
    {
      name: "Facebook",
      url: SITE_CONFIG.social.facebook,
      bgClass: "bg-[#1877F2] text-white hover:shadow-[0_0_15px_rgba(24,119,242,0.5)]",
      iconPath: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`flex items-center space-x-2.5 ${className}`, "class")}> ${socialLinks.map((item) => renderTemplate`<a${addAttribute(item.url, "href")} target="_blank" rel="noopener noreferrer"${addAttribute(`${dimensions} rounded-full ${item.bgClass} flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1 shadow-md focus:outline-none focus:ring-2 focus:ring-brand-gold`, "class")}${addAttribute(`S\xEDguenos en ${item.name} de El Trigal`, "aria-label")}${addAttribute(`S\xEDguenos en ${item.name}`, "title")}> <svg${addAttribute(`${iconSizes} fill-current`, "class")} viewBox="0 0 24 24"> <path${addAttribute(item.iconPath, "d")}></path> </svg> ${showLabels && renderTemplate`<span class="sr-only">${item.name}</span>`} </a>`)} </div>`;
}, "/Users/user/Documents/EL TRIGAL/WEBSITE_ELTRIGAL/src/components/ui/SocialLinks.astro", void 0);

const $$Astro$7 = createAstro("https://eltrigalbakery.com");
const $$DoorDashButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$DoorDashButton;
  const { size = "md", class: className = "", showText = true } = Astro2.props;
  const doordashUrl = SITE_CONFIG.ordering?.doordashUrl;
  const paddingClasses = {
    sm: "px-3 py-1.5 text-xs",
    md: "px-4 py-2 text-xs sm:text-sm",
    lg: "px-6 py-3.5 text-sm sm:text-base min-h-[48px]"
  }[size];
  const iconSizes = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6"
  }[size];
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(doordashUrl, "href")} target="_blank" rel="noopener noreferrer"${addAttribute(`inline-flex items-center justify-center space-x-1.5 font-black rounded-full bg-[#FF3008] text-white hover:bg-[#e02b07] transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#FF3008] whitespace-nowrap shrink-0 ${paddingClasses} ${className}`, "class")} aria-label="Ordenar en DoorDash de El Trigal" title="Ordenar en DoorDash"> <!-- DoorDash Brand Wing Icon --> <svg${addAttribute(`${iconSizes} fill-current shrink-0`, "class")} viewBox="0 0 24 24"> <path d="M23.071 7.424a3.642 3.642 0 0 0-3.315-1.905H.934a.934.934 0 0 0-.66 1.594l5.62 5.62a3.642 3.642 0 0 0 3.315 1.905h18.397a.934.934 0 0 0 .66-1.594l-5.195-5.62zm-5.195 5.62a3.642 3.642 0 0 0-3.315-1.905H.934a.934.934 0 0 0-.66 1.594l5.62 5.62a3.642 3.642 0 0 0 3.315 1.905h8.455a.934.934 0 0 0 .66-1.594l-1.134-1.226z"></path> </svg> ${showText && renderTemplate`<span class="whitespace-nowrap tracking-wide uppercase text-[11px] sm:text-xs">DOORDASH</span>`} </a>`;
}, "/Users/user/Documents/EL TRIGAL/WEBSITE_ELTRIGAL/src/components/ui/DoorDashButton.astro", void 0);

const $$Astro$6 = createAstro("https://eltrigalbakery.com");
const $$UberEatsButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$UberEatsButton;
  const { size = "md", class: className = "", showText = true } = Astro2.props;
  const ubereatsUrl = SITE_CONFIG.ordering?.ubereatsUrl;
  const paddingClasses = {
    sm: "px-3 py-1.5 text-xs",
    md: "px-4 py-2 text-xs sm:text-sm",
    lg: "px-6 py-3.5 text-sm sm:text-base min-h-[48px]"
  }[size];
  const iconSizes = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6"
  }[size];
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(ubereatsUrl, "href")} target="_blank" rel="noopener noreferrer"${addAttribute(`inline-flex items-center justify-center space-x-1.5 font-black rounded-full bg-[#06C167] text-white hover:bg-[#05a357] transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#06C167] whitespace-nowrap shrink-0 ${paddingClasses} ${className}`, "class")} aria-label="Ordenar en Uber Eats de El Trigal" title="Ordenar en Uber Eats"> <!-- Official Uber Eats Utensils SVG Icon --> <svg${addAttribute(`${iconSizes} fill-current shrink-0`, "class")} viewBox="0 0 24 24"> <path d="M11 9H9V2H7v7H5V2H3v7c0 2.12 1.46 3.9 3.43 4.38l-.71 7.62h2.56l-.7-7.62C9.54 12.9 11 11.12 11 9zm7-7h-2v18h2V9h2V2h-2zm0 5h-2V4h2v3z"></path> </svg> ${showText && renderTemplate`<span class="whitespace-nowrap tracking-wide font-extrabold uppercase text-[11px] sm:text-xs">UBER EATS</span>`} </a>`;
}, "/Users/user/Documents/EL TRIGAL/WEBSITE_ELTRIGAL/src/components/ui/UberEatsButton.astro", void 0);

const $$Astro$5 = createAstro("https://eltrigalbakery.com");
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Header;
  const { locale } = Astro2.props;
  const t = useTranslations(locale);
  const currentPath = Astro2.url.pathname;
  const navLinks = [
    { label: t("nav.home"), href: `/${locale}/` },
    { label: t("nav.menu"), href: `/${locale}/menu` },
    { label: t("nav.ecuadorianProducts"), href: locale === "es" ? "/es/productos-ecuatorianos" : "/en/ecuadorian-products" },
    { label: t("nav.catering"), href: locale === "es" ? "/es/catering-eventos" : "/en/catering-events" },
    { label: t("nav.ourStory"), href: locale === "es" ? "/es/nuestra-historia" : "/en/our-story" },
    { label: t("nav.contact"), href: locale === "es" ? "/es/contacto" : "/en/contact" }
  ];
  const esRoute = getEquivalentRoute(currentPath, "es");
  const enRoute = getEquivalentRoute(currentPath, "en");
  return renderTemplate`${maybeRenderHead()}<header class="sticky top-0 z-40 w-full bg-brand-cream/95 backdrop-blur-md border-b border-brand-gold/30 shadow-warm"> <div class="w-full max-w-7xl xl:max-w-[1400px] 2xl:max-w-[1700px] 3xl:max-w-[92vw] mx-auto px-4 sm:px-6 lg:px-8"> <div class="flex items-center justify-between h-20 w-full"> <!-- Brand Logo --> <a${addAttribute(`/${locale}/`, "href")} class="focus:outline-none focus:ring-2 focus:ring-brand-brown rounded-lg p-1 shrink-0"> ${renderComponent($$result, "Logo", $$Logo, { "size": "md" })} </a> <!-- Desktop Navigation Links --> <nav class="hidden lg:flex items-center space-x-1 xl:space-x-1.5 shrink" aria-label="Main Navigation"> ${navLinks.map((link) => {
    const isActive = currentPath === link.href || link.href !== `/${locale}/` && currentPath.startsWith(link.href);
    return renderTemplate`<a${addAttribute(link.href, "href")}${addAttribute(`px-2.5 py-1.5 xl:px-3 xl:py-2 rounded-lg font-bold text-xs xl:text-sm transition-all duration-200 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-brand-brown ${isActive ? "bg-brand-brown text-brand-gold border border-brand-gold/50 shadow-md" : "text-brand-brown hover:bg-brand-brown hover:text-brand-gold"}`, "class")}> ${link.label} </a>`;
  })} </nav> <!-- Right Header Actions (Social Links + Language Switcher + DoorDash & Uber Eats Buttons) --> <div class="flex items-center space-x-1.5 sm:space-x-2 shrink-0"> <!-- Desktop Social Links in Header --> <div class="hidden 2xl:flex items-center pr-1"> ${renderComponent($$result, "SocialLinks", $$SocialLinks, { "size": "sm" })} </div> <!-- Desktop Language Selector --> <div class="hidden sm:flex items-center bg-brand-cream-dark border border-brand-gold/40 rounded-full p-0.5 text-xs font-bold whitespace-nowrap flex-nowrap shrink-0"> <a${addAttribute(esRoute, "href")}${addAttribute(`px-2.5 py-1 rounded-full transition-all whitespace-nowrap ${locale === "es" ? "bg-brand-brown text-brand-gold shadow-sm" : "text-brand-brown hover:text-brand-gold-secondary"}`, "class")} title="Español" aria-label="Cambiar a Español">
ES
</a> <a${addAttribute(enRoute, "href")}${addAttribute(`px-2.5 py-1 rounded-full transition-all whitespace-nowrap ${locale === "en" ? "bg-brand-brown text-brand-gold shadow-sm" : "text-brand-brown hover:text-brand-gold-secondary"}`, "class")} title="English" aria-label="Switch to English">
EN
</a> </div> <!-- DoorDash & Uber Eats Direct Order CTAs --> <div class="hidden lg:flex items-center space-x-1.5 shrink-0"> ${renderComponent($$result, "DoorDashButton", $$DoorDashButton, { "size": "sm" })} ${renderComponent($$result, "UberEatsButton", $$UberEatsButton, { "size": "sm" })} </div> <!-- Mobile Menu Hamburger Button --> <button id="open-mobile-menu" type="button" class="lg:hidden p-2.5 rounded-lg text-brand-brown hover:bg-brand-gold/10 focus:outline-none focus:ring-2 focus:ring-brand-gold cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center relative z-10 active:scale-95" aria-expanded="false" aria-controls="mobile-drawer"${addAttribute(t("nav.openMenu"), "aria-label")}> <svg class="w-6 h-6 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg> </button> </div> </div> </div></header>`;
}, "/Users/user/Documents/EL TRIGAL/WEBSITE_ELTRIGAL/src/components/navigation/Header.astro", void 0);

const $$Astro$4 = createAstro("https://eltrigalbakery.com");
const $$MobileMenu = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$MobileMenu;
  const { locale, currentPath } = Astro2.props;
  const t = useTranslations(locale);
  const navItems = [
    { label: t("nav.home"), href: `/${locale}/` },
    { label: t("nav.menu"), href: `/${locale}/menu` },
    { label: t("nav.ecuadorianProducts"), href: locale === "es" ? "/es/productos-ecuatorianos" : "/en/ecuadorian-products" },
    { label: t("nav.catering"), href: locale === "es" ? "/es/catering-eventos" : "/en/catering-events" },
    { label: t("nav.ourStory"), href: locale === "es" ? "/es/nuestra-historia" : "/en/our-story" },
    { label: t("nav.contact"), href: locale === "es" ? "/es/contacto" : "/en/contact" }
  ];
  const esRoute = getEquivalentRoute(currentPath, "es");
  const enRoute = getEquivalentRoute(currentPath, "en");
  return renderTemplate`${maybeRenderHead()}<div id="mobile-drawer" class="fixed inset-0 z-[9999] hidden" role="dialog" aria-modal="true"${addAttribute(t("nav.openMenu"), "aria-label")}> <!-- Backdrop --> <div id="mobile-drawer-backdrop" class="fixed inset-0 bg-brand-brown/80 backdrop-blur-md transition-opacity z-[9999]"></div> <!-- Drawer panel --> <div class="fixed inset-y-0 right-0 z-[10000] w-full max-w-xs sm:max-w-md bg-brand-cream shadow-2xl flex flex-col border-l-2 border-brand-gold"> <!-- Inner scrollable container --> <div class="flex-1 overflow-y-auto p-6 pt-[max(1.5rem,env(safe-area-inset-top))] pb-[max(2rem,env(safe-area-inset-bottom))] flex flex-col"> <div class="space-y-4 flex-1"> <!-- Drawer header --> <div class="flex items-center justify-between pb-4 border-b border-brand-brown/10"> ${renderComponent($$result, "Logo", $$Logo, { "size": "sm" })} <button id="close-mobile-menu" type="button" class="p-2 text-brand-brown hover:text-brand-gold focus:outline-none focus:ring-2 focus:ring-brand-gold rounded-md min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer active:scale-95"${addAttribute(t("nav.closeMenu"), "aria-label")}> <svg class="w-6 h-6 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path> </svg> </button> </div> <!-- Language selector --> <div class="py-3 border-b border-brand-brown/10 flex items-center justify-around bg-brand-cream-dark/50 rounded-lg p-2"> <a${addAttribute(esRoute, "href")}${addAttribute(`px-4 py-2 rounded-md font-semibold text-sm transition-colors min-h-[40px] flex items-center justify-center ${locale === "es" ? "bg-brand-brown text-brand-gold shadow" : "text-brand-brown hover:bg-brand-gold/20"}`, "class")}>
Español
</a> <a${addAttribute(enRoute, "href")}${addAttribute(`px-4 py-2 rounded-md font-semibold text-sm transition-colors min-h-[40px] flex items-center justify-center ${locale === "en" ? "bg-brand-brown text-brand-gold shadow" : "text-brand-brown hover:bg-brand-gold/20"}`, "class")}>
English
</a> </div> <!-- Navigation links (6 Active Official Pages Only) --> <nav class="flex flex-col py-2"> ${navItems.map((item, index) => {
    const isActive = currentPath === item.href || item.href !== `/${locale}/` && currentPath.startsWith(item.href);
    return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <a${addAttribute(item.href, "href")}${addAttribute(`block px-4 py-3 rounded-lg font-bold text-base transition-colors min-h-[44px] flex items-center ${isActive ? "bg-brand-brown text-brand-cream border-l-4 border-brand-gold mb-1" : "text-brand-brown hover:bg-brand-gold/10"}`, "class")}> ${item.label} </a> ${index < navItems.length - 1 && renderTemplate`<div class="px-4"> <hr class="border-t border-brand-brown/10 my-0.5"> </div>`}` })}`;
  })} </nav> </div> <!-- Mobile/iPad Drawer Bottom Actions (DoorDash, Uber Eats, Contact Info, Social Links) --> <div class="pt-6 mt-8 border-t border-brand-brown/10 space-y-5 shrink-0"> <div class="flex items-center justify-center gap-3"> ${renderComponent($$result, "DoorDashButton", $$DoorDashButton, { "size": "md" })} ${renderComponent($$result, "UberEatsButton", $$UberEatsButton, { "size": "md" })} </div> <div class="text-center text-sm text-brand-brown/90 space-y-4 pt-2"> <div class="font-medium leading-relaxed">
📍 ${SITE_CONFIG.address.fullFormatted}<br>
📞 Llamadas: ${SITE_CONFIG.phone.businessDisplay}<br>
💬 WhatsApp: ${SITE_CONFIG.phone.whatsappDisplay} </div> <div class="flex justify-center pt-2"> ${renderComponent($$result, "SocialLinks", $$SocialLinks, { "size": "lg" })} </div> </div> </div> </div> </div> </div> ${renderScript($$result, "/Users/user/Documents/EL TRIGAL/WEBSITE_ELTRIGAL/src/components/navigation/MobileMenu.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/user/Documents/EL TRIGAL/WEBSITE_ELTRIGAL/src/components/navigation/MobileMenu.astro", void 0);

const $$Astro$3 = createAstro("https://eltrigalbakery.com");
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Footer;
  const { locale } = Astro2.props;
  const t = useTranslations(locale);
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  const footerNav = [
    { label: t("nav.menu"), href: `/${locale}/menu` },
    { label: t("nav.ecuadorianProducts"), href: locale === "es" ? "/es/productos-ecuatorianos" : "/en/ecuadorian-products" },
    { label: t("nav.catering"), href: locale === "es" ? "/es/catering-eventos" : "/en/catering-events" },
    { label: t("nav.ourStory"), href: locale === "es" ? "/es/nuestra-historia" : "/en/our-story" },
    { label: t("nav.contact"), href: locale === "es" ? "/es/contacto" : "/en/contact" }
  ];
  return renderTemplate`${maybeRenderHead()}<footer class="w-full bg-brand-brown text-brand-cream border-t-4 border-brand-gold pt-16 pb-24 md:pb-12 mt-auto"> <div class="w-full max-w-7xl xl:max-w-[1400px] 2xl:max-w-[1700px] 3xl:max-w-[92vw] mx-auto px-4 sm:px-6 lg:px-8"> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-brand-gold/20"> <!-- Col 1: Brand Info --> <div class="space-y-4 flex flex-col items-center text-center md:items-start md:text-left"> ${renderComponent($$result, "Logo", $$Logo, { "size": "md", "theme": "dark" })} <p class="text-sm text-brand-cream/80 leading-relaxed"> ${t("footer.aboutText")} </p> <!-- Social Icons in Official Brand Colors --> <div class="pt-2 flex justify-center md:justify-start w-full"> ${renderComponent($$result, "SocialLinks", $$SocialLinks, { "size": "md" })} </div> </div> <!-- Col 2: Quick Links --> <div class="space-y-4"> <h3 class="font-serif text-lg font-bold text-brand-gold border-b border-brand-gold/30 pb-2"> ${t("footer.quickLinks")} </h3> <ul class="space-y-2 text-sm"> ${footerNav.map((link) => renderTemplate`<li> <a${addAttribute(link.href, "href")} class="text-brand-cream/80 hover:text-brand-gold transition-colors inline-block py-1"> ${link.label} </a> </li>`)} </ul> </div> <!-- Col 3: Hours --> <div class="space-y-4"> <h3 class="font-serif text-lg font-bold text-brand-gold border-b border-brand-gold/30 pb-2"> ${t("footer.hoursTitle")} </h3> <ul class="space-y-3 text-sm"> ${SITE_CONFIG.hours.map((h) => renderTemplate`<li class="flex flex-col"> <span class="font-semibold text-brand-cream">${h.days[locale]}</span> <span class="text-brand-gold-secondary text-xs">${h.hours}</span> </li>`)} </ul> <div class="pt-2 text-xs text-brand-cream/70 bg-brand-cream/5 p-3 rounded-lg border border-brand-gold/20">
🔥 <span class="font-semibold text-brand-gold">${locale === "es" ? "Pan caliente:" : "Hot bread:"}</span> ${locale === "es" ? "Tandas a las 6:00 AM y 4:00 PM." : "Batches at 6:00 AM & 4:00 PM."} </div> </div> <!-- Col 4: Contact & Location --> <div class="space-y-4"> <h3 class="font-serif text-lg font-bold text-brand-gold border-b border-brand-gold/30 pb-2"> ${t("footer.contactTitle")} </h3> <address class="not-italic space-y-3 text-sm text-brand-cream/80"> <div class="flex items-start space-x-2"> <span class="text-brand-gold shrink-0">📍</span> <a${addAttribute(SITE_CONFIG.address.googleMapsUrl, "href")} target="_blank" rel="noopener noreferrer" class="hover:text-brand-gold transition-colors"> ${SITE_CONFIG.address.fullFormatted} </a> </div> <div class="flex items-center space-x-2"> <span class="text-emerald-400 shrink-0">💬</span> <a${addAttribute(SITE_CONFIG.phone.whatsapp, "href")} target="_blank" rel="noopener noreferrer" class="hover:text-emerald-300 transition-colors">
WhatsApp: ${SITE_CONFIG.phone.whatsappDisplay} </a> </div> <div class="flex items-center space-x-2"> <span class="text-brand-gold shrink-0">📞</span> <a${addAttribute(SITE_CONFIG.phone.businessTel, "href")} class="hover:text-brand-gold transition-colors">
Llamadas: ${SITE_CONFIG.phone.businessDisplay} </a> </div> <div class="flex items-center space-x-2"> <span class="text-brand-gold shrink-0">✉️</span> <a${addAttribute(`mailto:${SITE_CONFIG.email}`, "href")} class="hover:text-brand-gold transition-colors break-all"> ${SITE_CONFIG.email} </a> </div> </address> </div> </div> <!-- Bottom legal bar --> <div class="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-brand-cream/60 space-y-4 sm:space-y-0"> <div> ${t("footer.copyright", { year: currentYear })} </div> <div class="flex space-x-6"> <a${addAttribute(locale === "es" ? "/es/privacidad" : "/en/privacy", "href")} class="hover:text-brand-gold transition-colors"> ${t("footer.privacy")} </a> <a${addAttribute(locale === "es" ? "/es/terminos" : "/en/terms", "href")} class="hover:text-brand-gold transition-colors"> ${t("footer.terms")} </a> </div> </div> </div> </footer>`;
}, "/Users/user/Documents/EL TRIGAL/WEBSITE_ELTRIGAL/src/components/navigation/Footer.astro", void 0);

const $$Astro$2 = createAstro("https://eltrigalbakery.com");
const $$MobileBottomBar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$MobileBottomBar;
  const { locale } = Astro2.props;
  const t = useTranslations(locale);
  return renderTemplate`${maybeRenderHead()}<aside class="md:hidden fixed bottom-0 left-0 right-0 z-30 bg-brand-brown text-brand-cream border-t-2 border-brand-gold shadow-2xl pb-[env(safe-area-inset-bottom,0px)]"> <div class="grid grid-cols-4 divide-x divide-brand-gold/30 text-center py-2 text-xs font-semibold"> <!-- Call Us --> <a${addAttribute(SITE_CONFIG.phone.tel, "href")} class="flex flex-col items-center justify-center py-1 px-1 text-brand-gold hover:text-brand-cream transition-colors active:scale-95"${addAttribute(`${t("nav.callUs")}: ${SITE_CONFIG.phone.display}`, "aria-label")}> <svg class="w-4 h-4 mb-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path> </svg> <span class="text-[9px] truncate">${t("nav.callUs")}</span> </a> <!-- Directions --> <a${addAttribute(SITE_CONFIG.address.googleMapsUrl, "href")} target="_blank" rel="noopener noreferrer" class="flex flex-col items-center justify-center py-1 px-1 text-brand-gold hover:text-brand-cream transition-colors active:scale-95"${addAttribute(t("nav.directions"), "aria-label")}> <svg class="w-4 h-4 mb-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path> </svg> <span class="text-[9px] truncate">${t("nav.directions")}</span> </a> <!-- DoorDash Direct Order --> <a${addAttribute(SITE_CONFIG.ordering.doordashUrl, "href")} target="_blank" rel="noopener noreferrer" class="flex flex-col items-center justify-center py-1 px-1 bg-[#FF3008] text-white font-extrabold hover:bg-[#e02b07] transition-colors active:scale-95" aria-label="Ordenar en DoorDash"> <svg class="w-4 h-4 mb-0.5 fill-current" viewBox="0 0 24 24"> <path d="M23.071 7.424a3.642 3.642 0 0 0-3.315-1.905H.934a.934.934 0 0 0-.66 1.594l5.62 5.62a3.642 3.642 0 0 0 3.315 1.905h18.397a.934.934 0 0 0 .66-1.594l-5.195-5.62zm-5.195 5.62a3.642 3.642 0 0 0-3.315-1.905H.934a.934.934 0 0 0-.66 1.594l5.62 5.62a3.642 3.642 0 0 0 3.315 1.905h8.455a.934.934 0 0 0 .66-1.594l-1.134-1.226z"></path> </svg> <span class="text-[9px] font-black tracking-tighter uppercase">DOORDASH</span> </a> <!-- Uber Eats Direct Order --> <a${addAttribute(SITE_CONFIG.ordering.ubereatsUrl, "href")} target="_blank" rel="noopener noreferrer" class="flex flex-col items-center justify-center py-1 px-1 bg-[#06C167] text-white font-extrabold hover:bg-[#05a357] transition-colors active:scale-95" aria-label="Ordenar en Uber Eats"> <svg class="w-4 h-4 mb-0.5 fill-current" viewBox="0 0 24 24"> <path d="M18.06 23h-1.66V1.87h1.66V23zm-6.25 0h-1.66V1.87h1.66V23zm-6.25 0H3.9V1.87h1.66V23zm14.1-13.62c0-1.89-1.25-3.44-2.95-3.92V1.87h-1.66v4.61c-1.7.48-2.95 2.03-2.95 3.9v3.08h1.66v7.67h1.66v-7.67h2.58v7.67h1.66V9.38z"></path> </svg> <span class="text-[9px] font-black tracking-tighter uppercase">UBER EATS</span> </a> </div> </aside>`;
}, "/Users/user/Documents/EL TRIGAL/WEBSITE_ELTRIGAL/src/components/navigation/MobileBottomBar.astro", void 0);

const $$Astro$1 = createAstro("https://eltrigalbakery.com");
const $$WhatsAppWidget = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$WhatsAppWidget;
  const { locale } = Astro2.props;
  const greetingTitle = locale === "es" ? "PANADER\xCDA EL TRIGAL" : "EL TRIGAL BAKERY";
  const greetingText = locale === "es" ? "\xA1Hola! \u{1F44B} \xBFC\xF3mo te puedo ayudar hoy?" : "Hello! \u{1F44B} How can I help you today?";
  const ctaText = locale === "es" ? "Abrir chat de WhatsApp" : "Open WhatsApp chat";
  const whatsappMsg = locale === "es" ? encodeURIComponent("\xA1Hola Panader\xEDa El Trigal! Quisiera informaci\xF3n sobre sus productos o pasteles.") : encodeURIComponent("Hello El Trigal Bakery! I would like information about your products or custom cakes.");
  const whatsappUrl = `${SITE_CONFIG.phone.whatsapp}?text=${whatsappMsg}`;
  return renderTemplate`<!-- Floating WhatsApp Container -->${maybeRenderHead()}<div id="whatsapp-widget" class="fixed bottom-[calc(4.5rem+env(safe-area-inset-bottom,0px))] md:bottom-6 right-4 sm:right-6 z-40 flex flex-col items-end pointer-events-none"> <!-- Popup Speech Card --> <div id="whatsapp-card" class="pointer-events-auto mb-3 max-w-xs sm:max-w-sm bg-brand-cream p-4 rounded-2xl shadow-2xl border-2 border-brand-gold/40 transition-all duration-300 transform translate-y-2 opacity-0 hidden flex items-start space-x-3 relative group" role="dialog" aria-label="WhatsApp Chat Widget"> <!-- Close button --> <button id="close-whatsapp-card" type="button" class="absolute top-2 right-2 text-brand-brown/60 hover:text-brand-brown p-1 rounded-full hover:bg-brand-brown/10 focus:outline-none" aria-label="Cerrar ventana de WhatsApp"> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path> </svg> </button> <!-- Avatar with Online Indicator --> <div class="relative shrink-0 pt-1"> ${renderComponent($$result, "Logo", $$Logo, { "size": "sm", "showText": false })} <span class="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-brand-cream rounded-full"></span> </div> <!-- Message Content --> <div class="pr-4 space-y-1"> <div class="flex items-center space-x-1.5"> <span class="text-xs font-extrabold uppercase tracking-wider text-brand-brown"> ${greetingTitle} </span> <span class="text-[10px] bg-green-100 text-green-800 font-bold px-1.5 py-0.5 rounded">Online</span> </div> <p class="text-brand-brown text-[15px] leading-snug"> ${greetingText} </p> <a${addAttribute(whatsappUrl, "href")} target="_blank" rel="noopener noreferrer" class="inline-flex items-center space-x-1.5 pt-1 text-xs font-bold text-emerald-700 hover:text-emerald-800 hover:underline"> <span>${ctaText}</span> <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path> </svg> </a> </div> <!-- Speech bubble triangle tail --> <div class="absolute -bottom-2 right-6 w-4 h-4 bg-brand-cream border-r-2 border-b-2 border-brand-gold/40 transform rotate-45"></div> </div> <!-- Green WhatsApp Floating Button --> <a id="whatsapp-trigger"${addAttribute(whatsappUrl, "href")} target="_blank" rel="noopener noreferrer" class="pointer-events-auto relative w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-emerald-300 group" aria-label="Abrir WhatsApp Panadería El Trigal"> <!-- Pulse ring --> <span class="absolute inset-0 rounded-full bg-emerald-400 opacity-75 animate-ping"></span> <!-- WhatsApp Icon --> <svg class="w-8 h-8 fill-current relative z-10" viewBox="0 0 24 24"> <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.005 3.674 3.748-.982zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"></path> </svg> </a> </div> ${renderScript($$result, "/Users/user/Documents/EL TRIGAL/WEBSITE_ELTRIGAL/src/components/ui/WhatsAppWidget.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/user/Documents/EL TRIGAL/WEBSITE_ELTRIGAL/src/components/ui/WhatsAppWidget.astro", void 0);

const $$Astro = createAstro("https://eltrigalbakery.com");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { title, description, locale = "es", ogImage, jsonLd, noindex } = Astro2.props;
  const currentPath = Astro2.url.pathname;
  return renderTemplate`<!--xhtml--><html${addAttribute(locale, "lang")} class="h-full w-full bg-brand-cream text-brand-brown"> ${renderComponent($$result, "SeoHead", $$SeoHead, { "title": title, "description": description, "locale": locale, "ogImage": ogImage, "jsonLd": jsonLd, "noindex": noindex })}${maybeRenderHead()}<body class="min-h-screen w-full flex flex-col antialiased selection:bg-brand-gold selection:text-brand-brown bg-brand-cream text-brand-brown"> <!-- Skip to main content link for screen readers --> <a href="#main-content" class="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-brand-gold text-brand-brown font-bold rounded-md shadow-lg"> ${locale === "es" ? "Saltar al contenido principal" : "Skip to main content"} </a> ${renderComponent($$result, "Header", $$Header, { "locale": locale })} ${renderComponent($$result, "MobileMenu", $$MobileMenu, { "locale": locale, "currentPath": currentPath })} <main id="main-content" class="w-full flex-grow focus:outline-none pb-16 md:pb-0"> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "MobileBottomBar", $$MobileBottomBar, { "locale": locale })} ${renderComponent($$result, "Footer", $$Footer, { "locale": locale })} ${renderComponent($$result, "WhatsAppWidget", $$WhatsAppWidget, { "locale": locale })} </body></html>`;
}, "/Users/user/Documents/EL TRIGAL/WEBSITE_ELTRIGAL/src/components/layout/BaseLayout.astro", void 0);

export { $$BaseLayout as $, SITE_CONFIG as S, $$DoorDashButton as a, $$UberEatsButton as b, $$SocialLinks as c, useTranslations as u };
