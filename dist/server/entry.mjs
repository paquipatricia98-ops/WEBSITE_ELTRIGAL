import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_DXpdQOg7.mjs';
import { manifest } from './manifest_Bso7Tf8M.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/500.astro.mjs');
const _page3 = () => import('./pages/en/catering-events.astro.mjs');
const _page4 = () => import('./pages/en/contact.astro.mjs');
const _page5 = () => import('./pages/en/custom-cakes.astro.mjs');
const _page6 = () => import('./pages/en/ecuadorian-bakery.astro.mjs');
const _page7 = () => import('./pages/en/ecuadorian-products.astro.mjs');
const _page8 = () => import('./pages/en/faq.astro.mjs');
const _page9 = () => import('./pages/en/gallery.astro.mjs');
const _page10 = () => import('./pages/en/menu/_categoryslug_.astro.mjs');
const _page11 = () => import('./pages/en/menu.astro.mjs');
const _page12 = () => import('./pages/en/our-story.astro.mjs');
const _page13 = () => import('./pages/en/privacy.astro.mjs');
const _page14 = () => import('./pages/en/products/_productslug_.astro.mjs');
const _page15 = () => import('./pages/en/terms.astro.mjs');
const _page16 = () => import('./pages/en.astro.mjs');
const _page17 = () => import('./pages/es/catering-eventos.astro.mjs');
const _page18 = () => import('./pages/es/contacto.astro.mjs');
const _page19 = () => import('./pages/es/galeria.astro.mjs');
const _page20 = () => import('./pages/es/menu/_categoryslug_.astro.mjs');
const _page21 = () => import('./pages/es/menu.astro.mjs');
const _page22 = () => import('./pages/es/nuestra-historia.astro.mjs');
const _page23 = () => import('./pages/es/panaderia-ecuatoriana.astro.mjs');
const _page24 = () => import('./pages/es/pasteles-personalizados.astro.mjs');
const _page25 = () => import('./pages/es/preguntas-frecuentes.astro.mjs');
const _page26 = () => import('./pages/es/privacidad.astro.mjs');
const _page27 = () => import('./pages/es/productos/_productslug_.astro.mjs');
const _page28 = () => import('./pages/es/productos-ecuatorianos.astro.mjs');
const _page29 = () => import('./pages/es/terminos.astro.mjs');
const _page30 = () => import('./pages/es.astro.mjs');
const _page31 = () => import('./pages/robots.txt.astro.mjs');
const _page32 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/node.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/500.astro", _page2],
    ["src/pages/en/catering-events.astro", _page3],
    ["src/pages/en/contact.astro", _page4],
    ["src/pages/en/custom-cakes.astro", _page5],
    ["src/pages/en/ecuadorian-bakery.astro", _page6],
    ["src/pages/en/ecuadorian-products.astro", _page7],
    ["src/pages/en/faq.astro", _page8],
    ["src/pages/en/gallery.astro", _page9],
    ["src/pages/en/menu/[categorySlug].astro", _page10],
    ["src/pages/en/menu/index.astro", _page11],
    ["src/pages/en/our-story.astro", _page12],
    ["src/pages/en/privacy.astro", _page13],
    ["src/pages/en/products/[productSlug].astro", _page14],
    ["src/pages/en/terms.astro", _page15],
    ["src/pages/en/index.astro", _page16],
    ["src/pages/es/catering-eventos.astro", _page17],
    ["src/pages/es/contacto.astro", _page18],
    ["src/pages/es/galeria.astro", _page19],
    ["src/pages/es/menu/[categorySlug].astro", _page20],
    ["src/pages/es/menu/index.astro", _page21],
    ["src/pages/es/nuestra-historia.astro", _page22],
    ["src/pages/es/panaderia-ecuatoriana.astro", _page23],
    ["src/pages/es/pasteles-personalizados.astro", _page24],
    ["src/pages/es/preguntas-frecuentes.astro", _page25],
    ["src/pages/es/privacidad.astro", _page26],
    ["src/pages/es/productos/[productSlug].astro", _page27],
    ["src/pages/es/productos-ecuatorianos.astro", _page28],
    ["src/pages/es/terminos.astro", _page29],
    ["src/pages/es/index.astro", _page30],
    ["src/pages/robots.txt.ts", _page31],
    ["src/pages/index.astro", _page32]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "mode": "standalone",
    "client": "file:///Users/user/Documents/EL%20TRIGAL/WEBSITE_ELTRIGAL/dist/client/",
    "server": "file:///Users/user/Documents/EL%20TRIGAL/WEBSITE_ELTRIGAL/dist/server/",
    "host": false,
    "port": 4321,
    "assets": "_astro"
};
const _exports = createExports(_manifest, _args);
const handler = _exports['handler'];
const startServer = _exports['startServer'];
const options = _exports['options'];
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { handler, options, pageMap, startServer };
