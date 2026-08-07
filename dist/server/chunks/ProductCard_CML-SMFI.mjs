import { e as createAstro, f as createComponent, m as maybeRenderHead, h as addAttribute, k as renderComponent, r as renderTemplate } from './astro/server_BYp-mrTa.mjs';
import 'piccolore';
import { $ as $$CloudinaryImage } from './CloudinaryImage_DpWQm9Rh.mjs';

function formatPriceCents(cents, locale = "es") {
  if (cents === null || cents === void 0 || isNaN(cents)) {
    return "";
  }
  const dollars = cents / 100;
  return new Intl.NumberFormat(locale === "es" ? "es-US" : "en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(dollars);
}

const $$Astro = createAstro("https://eltrigalbakery.com");
const $$ProductCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProductCard;
  const { product, locale } = Astro2.props;
  const primaryImage = product.media.find((m) => m.isPrimary) || product.media[0];
  const productUrl = locale === "es" ? `/es/productos/${product.slug[locale] || product.slug.es}` : `/en/products/${product.slug[locale] || product.slug.en}`;
  const formattedPrice = product.priceLabel?.[locale] ? product.priceLabel[locale] : product.basePriceCents ? formatPriceCents(product.basePriceCents, locale) : null;
  return renderTemplate`${maybeRenderHead()}<article class="bg-brand-cream border border-brand-gold/30 rounded-2xl overflow-hidden shadow-warm hover:shadow-warm-hover transition-all duration-300 flex flex-col group h-full"> <!-- Image Container --> <a${addAttribute(productUrl, "href")} class="relative block overflow-hidden aspect-[4/3] bg-brand-cream-dark"> ${primaryImage ? renderTemplate`${renderComponent($$result, "CloudinaryImage", $$CloudinaryImage, { "src": primaryImage.secureUrl, "alt": primaryImage.altText[locale] || product.name[locale], "width": 600, "height": 450, "class": "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" })}` : renderTemplate`<div class="w-full h-full flex items-center justify-center text-4xl text-brand-gold-secondary">
🍞
</div>`} </a> <!-- Content --> <div class="p-5 flex flex-col flex-grow space-y-2"> <!-- Category row + Delivery badge --> <div class="flex flex-wrap items-center justify-between gap-1"> <span class="text-xs font-semibold text-brand-gold-secondary uppercase tracking-wider"> ${product.primaryCategory.name[locale]} </span> <span class="flex items-center gap-1 bg-brand-brown text-brand-gold text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
🚚 Delivery
</span> </div> <h3 class="font-serif font-bold text-xl text-brand-brown group-hover:text-brand-brown-dark transition-colors line-clamp-1"> <a${addAttribute(productUrl, "href")} class="focus:outline-none focus:underline"> ${product.name[locale]} </a> </h3> <p class="text-xs sm:text-sm text-brand-brown/75 line-clamp-2 leading-relaxed flex-grow"> ${product.shortDescription[locale]} </p> <!-- Price Row --> <div class="pt-2 flex items-center justify-between border-t border-brand-gold/20"> ${formattedPrice ? renderTemplate`<span class="font-serif font-extrabold text-xl text-brand-brown">${formattedPrice}</span>` : renderTemplate`<span class="text-xs text-brand-brown/50 italic">${locale === "es" ? "Consultar precio" : "Ask for price"}</span>`} <a${addAttribute(productUrl, "href")} class="text-xs font-bold text-brand-brown/60 hover:text-brand-brown underline-offset-2 hover:underline transition-colors"> ${locale === "es" ? "Ver m\xE1s \u2192" : "View \u2192"} </a> </div> </div> </article>`;
}, "/Users/user/Documents/EL TRIGAL/WEBSITE_ELTRIGAL/src/components/products/ProductCard.astro", void 0);

export { $$ProductCard as $, formatPriceCents as f };
