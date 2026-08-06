import { e as createAstro, f as createComponent, m as maybeRenderHead, h as addAttribute, r as renderTemplate } from './astro/server_DYzyEL0a.mjs';
import 'piccolore';
import 'clsx';

const $$Astro = createAstro("https://eltrigalbakery.com");
const $$CloudinaryImage = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CloudinaryImage;
  const { src, alt, width = 800, height = 600, class: className = "", aspectRatio, priority = false } = Astro2.props;
  function getCloudinaryUrl(url, targetWidth) {
    if (url.includes("res.cloudinary.com")) {
      return url.replace("/upload/", `/upload/f_auto,q_auto,w_${targetWidth}/`);
    }
    return url;
  }
  const srcSmall = getCloudinaryUrl(src, 400);
  const srcMedium = getCloudinaryUrl(src, 800);
  const srcLarge = getCloudinaryUrl(src, 1200);
  const srcSet = `${srcSmall} 400w, ${srcMedium} 800w, ${srcLarge} 1200w`;
  return renderTemplate`${maybeRenderHead()}<img${addAttribute(srcMedium, "src")}${addAttribute(srcSet, "srcset")} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"${addAttribute(alt, "alt")}${addAttribute(width, "width")}${addAttribute(height, "height")}${addAttribute(priority ? "eager" : "lazy", "loading")}${addAttribute(priority ? "sync" : "async", "decoding")}${addAttribute(`object-cover ${className}`, "class")}${addAttribute(aspectRatio ? `aspect-ratio: ${aspectRatio};` : void 0, "style")}>`;
}, "/Users/user/Documents/EL TRIGAL/WEBSITE_ELTRIGAL/src/components/ui/CloudinaryImage.astro", void 0);

export { $$CloudinaryImage as $ };
