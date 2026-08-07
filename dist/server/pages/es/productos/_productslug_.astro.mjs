import { e as createAstro, f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../../../chunks/astro/server_BYp-mrTa.mjs';
import 'piccolore';
import { $ as $$BaseLayout, u as useTranslations, a as $$DoorDashButton, b as $$UberEatsButton } from '../../../chunks/BaseLayout_CNquR-ll.mjs';
import { $ as $$Breadcrumbs } from '../../../chunks/Breadcrumbs_CZu6KnEI.mjs';
import { $ as $$CloudinaryImage } from '../../../chunks/CloudinaryImage_DpWQm9Rh.mjs';
import { f as formatPriceCents, $ as $$ProductCard } from '../../../chunks/ProductCard_CML-SMFI.mjs';
import { h as getProductBySlug, i as getRelatedProducts } from '../../../chunks/publicApi_Df2ikEzm.mjs';
import { b as getProductJsonLd, c as getBreadcrumbJsonLd } from '../../../chunks/jsonld__ujoVyex.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://eltrigalbakery.com");
const prerender = false;
const $$productSlug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$productSlug;
  const locale = "es";
  const t = useTranslations(locale);
  const { productSlug } = Astro2.params;
  const product = await getProductBySlug(productSlug || "", locale);
  if (!product) {
    return Astro2.redirect("/es/404");
  }
  if (product.slug.es && productSlug !== product.slug.es) {
    return Astro2.redirect(`/es/productos/${product.slug.es}`);
  }
  const relatedProducts = await getRelatedProducts(product.slug.es || productSlug || "", locale, 3);
  const primaryImage = product.media.find((m) => m.isPrimary) || product.media[0];
  const formattedBasePrice = product.priceLabel?.[locale] ? product.priceLabel[locale] : product.basePriceCents ? formatPriceCents(product.basePriceCents, locale) : "";
  const breadcrumbs = [
    { name: t("nav.home"), url: "/es/" },
    { name: t("nav.menu"), url: "/es/menu" },
    { name: product.primaryCategory.name[locale], url: `/es/menu/${product.primaryCategory.slug.es}` },
    { name: product.name[locale], url: `/es/productos/${product.slug.es}` }
  ];
  const productSchema = getProductJsonLd(product, locale);
  const breadcrumbSchema = getBreadcrumbJsonLd(
    breadcrumbs.map((b) => ({ name: b.name, url: `https://eltrigalbakery.com${b.url}` }))
  );
  const combinedSchema = [productSchema, breadcrumbSchema];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": product.seo.title[locale] || product.name[locale], "description": product.seo.description[locale] || product.shortDescription[locale], "locale": locale, "ogImage": primaryImage?.secureUrl, "jsonLd": combinedSchema }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10"> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": breadcrumbs, "locale": locale })} <!-- Main Product Layout --> <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-2"> <!-- Gallery Column --> <div class="lg:col-span-6 space-y-4"> <div class="rounded-3xl overflow-hidden shadow-2xl border-2 border-brand-gold/40 bg-brand-cream-dark aspect-[4/3]"> ${primaryImage ? renderTemplate`${renderComponent($$result2, "CloudinaryImage", $$CloudinaryImage, { "src": primaryImage.secureUrl, "alt": primaryImage.altText[locale] || product.name[locale], "width": 1e3, "height": 750, "priority": true, "class": "w-full h-full object-cover" })}` : renderTemplate`<div class="w-full h-full flex items-center justify-center text-6xl text-brand-gold">🍞</div>`} </div> ${product.media.length > 1 && renderTemplate`<div class="grid grid-cols-4 gap-3"> ${product.media.map((med) => renderTemplate`<div class="rounded-xl overflow-hidden border border-brand-gold/30 aspect-square"> ${renderComponent($$result2, "CloudinaryImage", $$CloudinaryImage, { "src": med.secureUrl, "alt": med.altText[locale], "width": 200, "height": 200, "class": "w-full h-full object-cover" })} </div>`)} </div>`} </div> <!-- Info Column --> <div class="lg:col-span-6 space-y-6"> <!-- Category & Tags --> <div class="flex flex-wrap items-center gap-2"> <span class="px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full bg-brand-brown text-brand-gold"> ${product.primaryCategory.name[locale]} </span> ${product.availability.isAvailable ? renderTemplate`<span class="px-3 py-1 text-xs font-bold rounded-full bg-green-100 text-green-800 border border-green-300">
✓ ${t("product.available")} </span>` : renderTemplate`<span class="px-3 py-1 text-xs font-bold rounded-full bg-red-100 text-red-800 border border-red-300"> ${t("product.unavailable")} </span>`} </div> <!-- Product Name & Price --> <div> <h1 class="font-serif text-3xl sm:text-4xl font-extrabold text-brand-brown leading-tight"> ${product.name[locale]} </h1> <div class="mt-3 flex items-baseline space-x-3"> <span class="font-serif text-3xl font-extrabold text-brand-brown"> ${formattedBasePrice} </span> </div> </div> <!-- Description --> <p class="text-base text-brand-brown/85 leading-relaxed border-t border-brand-brown/10 pt-4"> ${product.description[locale] || product.shortDescription[locale]} </p> <!-- Ingredients (if present) --> ${product.ingredients?.[locale] && renderTemplate`<div class="bg-brand-cream-dark/50 border border-brand-gold/25 rounded-2xl px-5 py-4 space-y-1"> <h3 class="text-xs font-bold uppercase tracking-widest text-brand-brown/60">🌾 Ingredientes</h3> <p class="text-sm text-brand-brown/85 leading-relaxed">${product.ingredients[locale]}</p> </div>`} <!-- Allergens (if present) --> ${product.allergens && product.allergens.length > 0 && renderTemplate`<div class="bg-brand-cream-dark/50 border border-brand-gold/25 rounded-2xl px-5 py-4 space-y-1"> <h3 class="text-xs font-bold uppercase tracking-widest text-brand-brown/60">⚠️ Alérgenos</h3> <p class="text-sm text-brand-brown/85 leading-relaxed">${product.allergens.join(", ")}</p> </div>`} <!-- Lead Time / Notice --> ${product.availability.leadTimeDays > 0 && renderTemplate`<div class="bg-brand-gold/15 p-4 rounded-2xl border border-brand-gold/30 text-xs sm:text-sm font-semibold text-brand-brown flex items-center space-x-3"> <span class="text-lg">🕒</span> <span> ${product.availability.customNotice?.[locale] || t("product.leadTimeDays", { days: product.availability.leadTimeDays })} </span> </div>`} <!-- Variants --> ${product.variants.length > 0 && renderTemplate`<div class="space-y-2"> <span class="block text-xs font-bold text-brand-brown uppercase tracking-wider">Variantes Disponibles:</span> <div class="grid grid-cols-1 sm:grid-cols-2 gap-3"> ${product.variants.map((variant) => renderTemplate`<div class="p-3 rounded-xl border border-brand-gold/40 bg-brand-cream-dark/50 flex justify-between items-center text-sm"> <span class="font-semibold text-brand-brown">${variant.name[locale]}</span> <span class="font-bold text-brand-brown">${formatPriceCents(variant.priceCents, locale)}</span> </div>`)} </div> </div>`} <!-- Delivery Ordering Options (DoorDash & Uber Eats) --> ${renderTemplate`<div class="space-y-3 pt-2 border-t border-brand-brown/10"> <div class="flex items-center gap-2"> <span class="text-lg">🚚</span> <h3 class="font-serif font-bold text-base text-brand-brown">Delivery disponible</h3> </div> <p class="text-xs text-brand-brown/60">Ordena en línea a través de nuestras plataformas de entrega:</p> <div class="flex flex-wrap items-center gap-3"> ${renderComponent($$result2, "DoorDashButton", $$DoorDashButton, { "size": "md" })} ${renderComponent($$result2, "UberEatsButton", $$UberEatsButton, { "size": "md" })} </div> </div>`} ${product.ordering.allowCustomQuote && renderTemplate`<a${addAttribute(`/es/pasteles-personalizados#cotizar`, "href")} class="block w-full py-3.5 px-4 rounded-xl bg-brand-cream border-2 border-brand-gold text-brand-brown font-bold text-sm text-center hover:bg-brand-gold/10">
🎂 ${t("product.quoteCustomCake")} </a>`} </div> </div> </div>  ${relatedProducts.length > 0 && renderTemplate`<div class="mt-2 border-t border-brand-gold/20 pt-6"> <div class="bg-brand-cream-dark/40 rounded-3xl p-6 sm:p-10 space-y-6"> <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4"> <div> <p class="text-xs font-semibold uppercase tracking-widest text-brand-gold-secondary mb-1">
Más de ${product.primaryCategory.name[locale]} </p> <h2 class="font-serif text-xl sm:text-2xl font-bold text-brand-brown">
También te puede gustar
</h2> </div> <a${addAttribute(`/es/menu/${product.primaryCategory.slug.es}`, "href")} class="shrink-0 text-xs font-bold text-brand-brown/60 hover:text-brand-brown border border-brand-brown/20 hover:border-brand-brown/50 px-4 py-2 rounded-full transition-all duration-200">
Ver todos →
</a> </div> <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"> ${relatedProducts.map((rel) => renderTemplate`${renderComponent($$result2, "ProductCard", $$ProductCard, { "product": rel, "locale": locale })}`)} </div> </div> </div>`}` })}`;
}, "/Users/user/Documents/EL TRIGAL/WEBSITE_ELTRIGAL/src/pages/es/productos/[productSlug].astro", void 0);

const $$file = "/Users/user/Documents/EL TRIGAL/WEBSITE_ELTRIGAL/src/pages/es/productos/[productSlug].astro";
const $$url = "/es/productos/[productSlug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$productSlug,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
