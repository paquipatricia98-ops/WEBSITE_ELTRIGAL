import { e as createAstro, f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../../chunks/astro/server_DYzyEL0a.mjs';
import 'piccolore';
import { $ as $$BaseLayout, u as useTranslations } from '../../../chunks/BaseLayout_CmgIPuhw.mjs';
import { $ as $$Breadcrumbs } from '../../../chunks/Breadcrumbs_sYitnpyE.mjs';
import { $ as $$ProductCard } from '../../../chunks/ProductCard_BS--r9Mz.mjs';
import { d as getCategoryBySlug, e as getProducts } from '../../../chunks/publicApi_BrKjFmYz.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://eltrigalbakery.com");
const prerender = false;
const $$categorySlug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$categorySlug;
  const locale = "es";
  const t = useTranslations(locale);
  const { categorySlug } = Astro2.params;
  const category = await getCategoryBySlug(categorySlug || "", locale);
  if (category && category.slug.es && categorySlug !== category.slug.es) {
    return Astro2.redirect(`/es/menu/${category.slug.es}`);
  }
  const { products } = await getProducts({ locale, categorySlug: category?.slug.es || categorySlug || "" });
  const breadcrumbs = [
    { name: t("nav.home"), url: "/es/" },
    { name: t("nav.menu"), url: "/es/menu" },
    { name: category?.name[locale] || categorySlug || "", url: `/es/menu/${categorySlug}` }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": category?.name[locale] || "Categor\xEDa del Men\xFA", "description": category?.description?.[locale] || "Cat\xE1logo de panader\xEDa y pasteler\xEDa El Trigal en Orange, NJ.", "locale": locale }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10"> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": breadcrumbs, "locale": locale })} <div class="mb-10 space-y-3"> <h1 class="font-serif text-3xl sm:text-5xl font-extrabold text-brand-brown"> ${category?.name[locale] || categorySlug} </h1> ${category?.description && renderTemplate`<p class="text-brand-brown/80 text-base sm:text-lg max-w-3xl"> ${category.description[locale]} </p>`} </div> ${products.length > 0 ? renderTemplate`<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"> ${products.map((product) => renderTemplate`${renderComponent($$result2, "ProductCard", $$ProductCard, { "product": product, "locale": locale })}`)} </div>` : renderTemplate`<div class="text-center py-16 bg-brand-cream-dark/30 rounded-3xl border border-dashed border-brand-brown/30 space-y-4"> <div class="text-5xl">🥖</div> <h3 class="font-serif text-2xl font-bold text-brand-brown">${t("menu.noResultsTitle")}</h3> <a href="/es/menu" class="inline-block px-6 py-2.5 rounded-full bg-brand-gold text-brand-brown font-bold text-xs"> ${t("common.backToMenu")} </a> </div>`} </div> ` })}`;
}, "/Users/user/Documents/EL TRIGAL/WEBSITE_ELTRIGAL/src/pages/es/menu/[categorySlug].astro", void 0);

const $$file = "/Users/user/Documents/EL TRIGAL/WEBSITE_ELTRIGAL/src/pages/es/menu/[categorySlug].astro";
const $$url = "/es/menu/[categorySlug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$categorySlug,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
