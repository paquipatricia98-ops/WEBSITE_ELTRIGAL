async function b(){const g=document.getElementById("dynamic-fallback-container");if(!g)return;const c=window.location.pathname.replace(/\/$/,""),L=window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"?"/api/v1":g.dataset.api||"/api/v1",D=c.startsWith("/es/productos/"),x=c.startsWith("/en/products/");if(!D&&!x)return;const e=x?"en":"es",m=c.split("/"),f=decodeURIComponent(m[m.length-1]);if(!f)return;const d=document.getElementById("standard-404"),n=document.getElementById("dynamic-loading"),i=document.getElementById("dynamic-product-content");d&&d.classList.add("hidden"),n&&n.classList.remove("hidden");try{const l=await fetch(`${L}/public/products/${encodeURIComponent(f)}?locale=${e}`);if(!l.ok)throw new Error("Product not found in API");const t=(await l.json()).data;if(!t)throw new Error("No product data");const a=(r,P)=>r?typeof r=="string"?r:typeof r=="object"?r[P]||r.es||r.en||"":String(r):"",o=a(t.name||t.productoName,e),I=a(t.description||t.productoDescription||t.shortDescription,e),u=a(t.primaryCategory?.name,e)||(e==="es"?"Panadería":"Bakery"),h=a(t.primaryCategory?.slug,e)||"",w=t.media||[],s=w.find(r=>r.isPrimary)||w[0],y=s?s.secureUrl||s.url||"":t.productoImage||"",E=s&&a(s.altText||s.alt,e)||o,v=t.basePriceCents||(t.productoPrice?Math.round(t.productoPrice*100):0),C=t.priceLabel?.[e]?t.priceLabel[e]:v?new Intl.NumberFormat(e==="es"?"es-US":"en-US",{style:"currency",currency:"USD"}).format(v/100):"",$=a(t.ingredients||t.productoIngredients,e),p=t.allergens||t.productoAllergens||[],k=Array.isArray(p)?p.join(", "):String(p);document.title=`${o} | El Trigal Bakery`,i&&(i.innerHTML=`
            <div class="mb-6 flex items-center space-x-2 text-xs sm:text-sm font-semibold text-brand-brown/70">
              <a href="/${e}/" class="hover:underline">${e==="es"?"Inicio":"Home"}</a>
              <span>/</span>
              <a href="/${e}/catalogo" class="hover:underline">${e==="es"?"Catálogo":"Catalog"}</a>
              <span>/</span>
              ${h?`<a href="/${e}/menu/${h}" class="hover:underline">${u}</a><span>/</span>`:""}
              <span class="text-brand-brown font-bold">${o}</span>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-2">
              <div class="lg:col-span-6 space-y-4">
                <div class="rounded-3xl overflow-hidden shadow-2xl border-2 border-brand-gold/40 bg-brand-cream-dark w-full flex items-center justify-center">
                  ${y?`
                    <img src="${y}" alt="${E}" width="1000" height="1200" class="w-full h-auto block rounded-3xl" />
                  `:`
                    <div class="w-full h-64 flex items-center justify-center text-6xl text-brand-gold">🍞</div>
                  `}
                </div>
              </div>

              <div class="lg:col-span-6 space-y-6">
                <div class="flex flex-wrap items-center gap-2">
                  <span class="px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full bg-brand-brown text-brand-gold">
                    ${u}
                  </span>
                  <span class="px-3 py-1 text-xs font-bold rounded-full bg-green-100 text-green-800 border border-green-300">
                    ✓ ${e==="es"?"Disponible":"Available"}
                  </span>
                </div>

                <div>
                  <h1 class="font-serif text-3xl sm:text-4xl font-extrabold text-brand-brown leading-tight">
                    ${o}
                  </h1>
                  <div class="mt-3 flex items-baseline space-x-3">
                    <span class="font-serif text-3xl font-extrabold text-brand-brown">
                      ${C}
                    </span>
                  </div>
                </div>

                <p class="text-base text-brand-brown/85 leading-relaxed border-t border-brand-brown/10 pt-4">
                  ${I}
                </p>

                ${$?`
                  <div class="bg-brand-cream-dark/50 border border-brand-gold/25 rounded-2xl px-5 py-4 space-y-1">
                    <h3 class="text-xs font-bold uppercase tracking-widest text-brand-brown/60">🌾 ${e==="es"?"Ingredientes":"Ingredients"}</h3>
                    <p class="text-sm text-brand-brown/85 leading-relaxed">${$}</p>
                  </div>
                `:""}

                ${k?`
                  <div class="bg-brand-cream-dark/50 border border-brand-gold/25 rounded-2xl px-5 py-4 space-y-1">
                    <h3 class="text-xs font-bold uppercase tracking-widest text-brand-brown/60">⚠️ ${e==="es"?"Alérgenos":"Allergens"}</h3>
                    <p class="text-sm text-brand-brown/85 leading-relaxed">${k}</p>
                  </div>
                `:""}

                <div class="space-y-3 pt-2 border-t border-brand-brown/10">
                  <div class="flex items-center gap-2">
                    <span class="text-lg">🚚</span>
                    <h3 class="font-serif font-bold text-base text-brand-brown">${e==="es"?"Delivery disponible":"Delivery available"}</h3>
                  </div>
                  <p class="text-xs text-brand-brown/60">${e==="es"?"Ordena en línea a través de nuestras plataformas de entrega:":"Order online through our delivery platforms:"}</p>
                  <div class="flex flex-wrap items-center gap-3">
                    <a href="https://www.doordash.com/store/el-trigal-bakery-orange-24754778/" target="_blank" rel="noopener noreferrer" class="inline-flex items-center px-4 py-2.5 rounded-xl bg-[#FF3008] text-white font-bold text-xs hover:opacity-90 shadow">
                      Order on DoorDash
                    </a>
                    <a href="https://www.ubereats.com/store/el-trigal-bakery/gW2X-fJWSd-QZlR7t3e8Xg" target="_blank" rel="noopener noreferrer" class="inline-flex items-center px-4 py-2.5 rounded-xl bg-[#06C167] text-white font-bold text-xs hover:opacity-90 shadow">
                      Order on Uber Eats
                    </a>
                  </div>
                </div>
              </div>
            </div>
          `),n&&n.classList.add("hidden"),i&&i.classList.remove("hidden")}catch(l){console.warn("Dynamic fallback check failed:",l),n&&n.classList.add("hidden"),d&&d.classList.remove("hidden")}}b();document.addEventListener("DOMContentLoaded",b);document.addEventListener("astro:page-load",b);
