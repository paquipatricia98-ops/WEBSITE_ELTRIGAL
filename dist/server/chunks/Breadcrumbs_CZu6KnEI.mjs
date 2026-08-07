import { e as createAstro, f as createComponent, m as maybeRenderHead, r as renderTemplate, h as addAttribute } from './astro/server_BYp-mrTa.mjs';
import 'piccolore';
import 'clsx';

const $$Astro = createAstro("https://eltrigalbakery.com");
const $$Breadcrumbs = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Breadcrumbs;
  const { items } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<nav aria-label="Breadcrumb" class="py-3 px-4 bg-brand-cream-dark/50 rounded-lg mb-6 border border-brand-gold/20 text-xs sm:text-sm"> <ol class="flex flex-wrap items-center space-x-2 text-brand-brown/80"> ${items.map((item, index) => {
    const isLast = index === items.length - 1;
    return renderTemplate`<li class="flex items-center space-x-2"> ${index > 0 && renderTemplate`<span class="text-brand-gold font-bold select-none">/</span>`} ${isLast ? renderTemplate`<span class="font-bold text-brand-brown truncate max-w-[200px] sm:max-w-xs" aria-current="page"> ${item.name} </span>` : renderTemplate`<a${addAttribute(item.url, "href")} class="hover:text-brand-gold transition-colors font-medium"> ${item.name} </a>`} </li>`;
  })} </ol> </nav>`;
}, "/Users/user/Documents/EL TRIGAL/WEBSITE_ELTRIGAL/src/components/ui/Breadcrumbs.astro", void 0);

export { $$Breadcrumbs as $ };
