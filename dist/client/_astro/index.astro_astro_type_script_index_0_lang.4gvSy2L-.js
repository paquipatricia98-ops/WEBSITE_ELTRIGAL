async function w(){const x=document.getElementById("menu-container");if(!x)return;const o=x.dataset.locale,B=window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"?"/api/v1":x.dataset.api||"/api/v1",n=document.getElementById("product-search-input"),m=document.getElementById("clear-search-btn"),v=document.getElementById("reset-filter-btn"),C=document.getElementById("category-pills-container"),$=document.getElementById("products-grid"),u=document.getElementById("product-count-label"),E=document.getElementById("no-results-state");let c="todas",f=[];const s=(a,L)=>a?typeof a=="string"?a:typeof a=="object"?a[L]||a.es||a.en||"":String(a):"";try{const a=await fetch(`${B}/public/products?limit=100`);if(!a.ok)throw new Error("API Error");const y=(await a.json()).data||[],S=Array.from(new Set(y.map(t=>t.primaryCategory?.id||t.primaryCategory?._id))).filter(Boolean),j=[{id:"todas",label:o==="es"?"Todas las Categorías":"All Categories",icon:"✨"},...S.map(t=>{const e=y.find(l=>l.primaryCategory?.id===t||l.primaryCategory?._id===t),r=s(e?.primaryCategory?.slug,o)||String(t),d=s(e?.primaryCategory?.name,o)||(o==="es"?"Categoría":"Category"),b=r.includes("pastel")||r.includes("cake")||r.includes("dulce")||r.includes("sweet")?"🍰":"🥖";return{id:r,label:d,icon:b}})];C&&(C.innerHTML=j.map(t=>`
            <button
              type="button"
            data-category="${t.id}"
            class="category-pill px-4 py-2 rounded-xl text-xs sm:text-sm font-extrabold transition-all border shadow-sm flex items-center space-x-1.5 cursor-pointer ${t.id==="todas"?"bg-brand-brown text-brand-gold border-brand-gold shadow-md active-pill":"bg-brand-cream-dark text-brand-brown border-brand-gold/30 hover:bg-brand-gold/20"}"
          >
            <span>${t.icon}</span>
            <span>${t.label}</span>
          </button>
        `).join(""));const N=y.map(t=>{const e=t.media?.find(D=>D.isPrimary)||t.media?.[0],r=e?e.secureUrl||e.url||"":t.productoImage||"",d=s(t.name||t.productoName,o),b=e&&s(e.altText||e.alt,o)||d,l=s(t.slug||t.productoSlug,o),g=o==="es"?`/es/productos/${l}`:`/en/products/${l}`,T=s(t.primaryCategory?.name,o),P=s(t.primaryCategory?.slug,o)||"todas",I=s(t.shortDescription||t.description||t.productoDescription,o),U=Array.isArray(t.tags)?t.tags.join(" "):"",q=`${d} ${I} ${U}`.toLowerCase();return`
            <div class="product-item-wrapper w-full sm:w-[280px] md:w-[300px] xl:w-[320px] flex-shrink-0" data-category="${P}" data-search="${q}">
              <article class="bg-brand-cream border border-brand-gold/30 rounded-2xl overflow-hidden shadow-warm hover:shadow-warm-hover transition-all duration-300 flex flex-col group h-full">
                <a href="${g}" class="relative block overflow-hidden aspect-[4/3] bg-brand-cream-dark">
                  ${r?`
                    <img src="${r}" alt="${b}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  `:`
                    <div class="w-full h-full flex items-center justify-center text-4xl text-brand-gold-secondary">🍞</div>
                  `}
                </a>
                <div class="p-5 flex flex-col flex-grow space-y-2">
                  <div class="flex flex-wrap items-center justify-between gap-1">
                    <span class="text-xs font-semibold text-brand-gold-secondary uppercase tracking-wider">${T}</span>
                    <span class="flex items-center gap-1 bg-brand-brown text-brand-gold text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">🚚 Delivery</span>
                  </div>
                  <h3 class="font-serif font-bold text-xl text-brand-brown group-hover:text-brand-brown-dark transition-colors line-clamp-1">
                    <a href="${g}" class="focus:outline-none focus:underline">${d}</a>
                  </h3>
                  <p class="text-xs sm:text-sm text-brand-brown/75 line-clamp-2 leading-relaxed flex-grow">${I}</p>
                  <div class="pt-2 flex items-center justify-end border-t border-brand-gold/20">
                    <a href="${g}" class="text-xs font-bold text-brand-brown/60 hover:text-brand-brown underline-offset-2 hover:underline transition-colors">
                      ${o==="es"?"Ver más →":"View →"}
                    </a>
                  </div>
                </div>
              </article>
            </div>
          `});$&&($.innerHTML=N.join("")),f=Array.from(document.querySelectorAll(".product-item-wrapper"));const p=document.querySelectorAll(".category-pill"),i=()=>{const t=(n?.value||"").trim().toLowerCase();let e=0;m&&m.classList.toggle("hidden",t.length===0),f.forEach(r=>{const d=r.getAttribute("data-category")||"",b=r.getAttribute("data-search")||"",l=c==="todas"||d===c,g=t===""||b.includes(t);l&&g?(r.classList.remove("hidden"),e++):r.classList.add("hidden")}),u&&(u.textContent=`Mostrando ${e} de ${f.length} productos`),E&&E.classList.toggle("hidden",e>0)};p.forEach(t=>{t.addEventListener("click",()=>{const e=t.getAttribute("data-category")||"todas";c=e,p.forEach(r=>{r.getAttribute("data-category")===e?r.className="category-pill px-4 py-2 rounded-xl text-xs sm:text-sm font-extrabold transition-all border shadow-md bg-brand-brown text-brand-gold border-brand-gold cursor-pointer active-pill":r.className="category-pill px-4 py-2 rounded-xl text-xs sm:text-sm font-extrabold transition-all border shadow-sm bg-brand-cream-dark text-brand-brown border-brand-gold/30 hover:bg-brand-gold/20 cursor-pointer"}),i()})}),n&&n.addEventListener("input",i),m&&m.addEventListener("click",()=>{n&&(n.value="",i())}),v&&v.addEventListener("click",()=>{n&&(n.value=""),c="todas",p.forEach(t=>{t.getAttribute("data-category")==="todas"?t.className="category-pill px-4 py-2 rounded-xl text-xs sm:text-sm font-extrabold transition-all border shadow-md bg-brand-brown text-brand-gold border-brand-gold cursor-pointer active-pill":t.className="category-pill px-4 py-2 rounded-xl text-xs sm:text-sm font-extrabold transition-all border shadow-sm bg-brand-cream-dark text-brand-brown border-brand-gold/30 hover:bg-brand-gold/20 cursor-pointer"}),i()});const k=new URLSearchParams(window.location.search),h=k.get("category"),A=k.get("search");h&&(c=h,p.forEach(t=>{t.getAttribute("data-category")===h?t.className="category-pill px-4 py-2 rounded-xl text-xs sm:text-sm font-extrabold transition-all border shadow-md bg-brand-brown text-brand-gold border-brand-gold cursor-pointer active-pill":t.className="category-pill px-4 py-2 rounded-xl text-xs sm:text-sm font-extrabold transition-all border shadow-sm bg-brand-cream-dark text-brand-brown border-brand-gold/30 hover:bg-brand-gold/20 cursor-pointer"})),A&&n&&(n.value=A),i()}catch(a){console.error("Error fetching products:",a),u&&(u.textContent="Error al cargar los productos.")}}w();document.addEventListener("DOMContentLoaded",w);document.addEventListener("astro:page-load",w);
