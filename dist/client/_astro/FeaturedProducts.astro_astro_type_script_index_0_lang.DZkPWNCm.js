function C(t,r){return new Intl.NumberFormat(r==="es"?"es-US":"en-US",{style:"currency",currency:"USD"}).format(t/100)}async function f(){const t=document.getElementById("featured-products-pinterest-grid");if(!t)return;const r=t.dataset.locale,p=window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"?"/api/v1":t.dataset.api||"/api/v1";async function u(){const a=await fetch(`${p}/public/products/imported?limit=6`);if(!a.ok)throw new Error("API Error");return await a.json()}try{let a=function(e){const s=e.media?.find($=>$.isPrimary)||e.media?.[0],d=s&&(s.secureUrl||s.url)||"",i=s&&(s.alt?.[r]||s.altText?.[r]||e.name?.[r])||"",b=typeof e.slug=="object"?e.slug?.[r]||e.slug?.es||e.slug?.en||"":e.slug||"",h=typeof e.name=="object"?e.name?.[r]||e.name?.es||e.name?.en||"":e.name||"",m=r==="es"?`/es/productos/${b}`:`/en/products/${b}`,g=e.priceLabel?.[r]?e.priceLabel[r]:e.basePriceCents?C(e.basePriceCents,r):null,v=e.primaryCategory?.name?.[r]||e.primaryCategory?.name?.es||"",y=e.shortDescription?.[r]||e.shortDescription?.es||e.description?.[r]||"";return`
          <div class="pinterest-card w-full rounded-3xl overflow-hidden bg-brand-cream border-2 border-brand-gold/30 hover:border-brand-gold hover:shadow-lg hover:scale-[1.01] transition-all duration-300 shadow-sm p-4 text-left block">
            <div>
              <a href="${m}" class="relative block overflow-hidden rounded-2xl mb-4 border border-brand-gold/15 bg-brand-cream-dark">
                ${d?`
                  <img src="${d}" alt="${i}" class="w-full h-auto object-cover rounded-xl hover:scale-105 transition-transform duration-500" loading="lazy" />
                `:`
                  <div class="w-full h-48 flex items-center justify-center text-4xl text-brand-gold-secondary bg-brand-cream-dark rounded-xl">🇪🇨</div>
                `}
              </a>
              <div class="space-y-2">
                <div class="flex flex-wrap items-center justify-between gap-1">
                  <span class="text-xs font-semibold text-brand-gold-secondary uppercase tracking-wider">${v}</span>
                  <span class="flex items-center gap-1 bg-brand-brown text-brand-gold text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">🚚 Delivery</span>
                </div>
                <h3 class="font-serif font-bold text-xl text-brand-brown hover:text-brand-brown-dark transition-colors text-left">
                  <a href="${m}" class="focus:outline-none focus:underline">${h}</a>
                </h3>
                <p class="text-xs sm:text-sm text-brand-brown/75 leading-relaxed text-left">${y}</p>
              </div>
            </div>
            <div class="pt-3 mt-4 flex items-center justify-between border-t border-brand-gold/20 flex-wrap gap-2">
              ${g?`
                <span class="font-serif font-extrabold text-lg text-brand-brown">${g}</span>
              `:`
                <span class="text-xs text-brand-brown/50 italic">${r==="es"?"Consultar precio":"Ask for price"}</span>
              `}
              <a href="${m}" class="text-xs font-bold text-brand-brown-light hover:text-brand-brown flex items-center gap-1">
                <span>${r==="es"?"Ver más":"View"}</span>
                <span>→</span>
              </a>
            </div>
          </div>
        `};var P=a;const c=(await u()).data||[];if(c.length===0){t.className="w-full",t.innerHTML=`<div class="w-full text-center text-brand-brown/50 py-12">${r==="es"?"No hay productos importados por ahora.":"No imported products at the moment."}</div>`;return}const w=c.length,n=Math.min(w,4);let o="grid gap-6 items-start justify-center",l="max-w-7xl";n===1?(o+=" grid-cols-1",l="max-w-sm"):n===2?(o+=" grid-cols-1 sm:grid-cols-2",l="max-w-3xl"):n===3?(o+=" grid-cols-1 sm:grid-cols-2 md:grid-cols-3",l="max-w-5xl"):(o+=" grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",l="max-w-7xl"),t.className=`${o} ${l} w-full mx-auto py-4`;let x="";for(let e=0;e<n;e++)x+=`<div class="flex flex-col gap-6 w-full" id="prod-col-${e}"></div>`;t.innerHTML=x,c.forEach((e,s)=>{const d=s%n,i=t.querySelector(`#prod-col-${d}`);i&&(i.innerHTML+=a(e))})}catch(a){console.error("Error fetching imported products:",a),t.innerHTML=`<div class="w-full text-center text-red-500/80 py-12">${r==="es"?"Error al cargar los productos.":"Error loading products."}</div>`}}f();document.addEventListener("DOMContentLoaded",f);document.addEventListener("astro:page-load",f);
