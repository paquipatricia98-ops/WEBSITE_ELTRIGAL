function H(c,t){return new Intl.NumberFormat(t==="es"?"es-US":"en-US",{style:"currency",currency:"USD"}).format(c/100)}document.addEventListener("DOMContentLoaded",async()=>{const c=document.getElementById("menu-container");if(!c)return;const t=c.dataset.locale,I=c.dataset.api,n=document.getElementById("product-search-input"),u=document.getElementById("clear-search-btn"),w=document.getElementById("reset-filter-btn"),v=document.getElementById("category-pills-container"),$=document.getElementById("products-grid"),x=document.getElementById("product-count-label"),C=document.getElementById("no-results-state");let i="todas",f=[];const s=(o,E)=>o?typeof o=="string"?o:typeof o=="object"?o[E]||o.en||o.es||"":String(o):"";try{const o=await fetch(`${I}/public/products?limit=100`);if(!o.ok)throw new Error("API Error");const y=(await o.json()).data||[],B=Array.from(new Set(y.map(e=>e.primaryCategory?.id||e.primaryCategory?._id))).filter(Boolean),P=[{id:"todas",label:t==="es"?"Todas las Categorías":"All Categories",icon:"✨"},...B.map(e=>{const r=y.find(d=>d.primaryCategory?.id===e||d.primaryCategory?._id===e),a=s(r?.primaryCategory?.slug,t)||String(e),l=s(r?.primaryCategory?.name,t)||(t==="es"?"Categoría":"Category"),g=a.includes("pastel")||a.includes("cake")||a.includes("dulce")||a.includes("sweet")?"🍰":"🥖";return{id:a,label:l,icon:g}})];v&&(v.innerHTML=P.map(e=>`
            <button
              type="button"
            data-category="${e.id}"
            class="category-pill px-4 py-2 rounded-xl text-xs sm:text-sm font-extrabold transition-all border shadow-sm flex items-center space-x-1.5 cursor-pointer ${e.id==="todas"?"bg-brand-brown text-brand-gold border-brand-gold shadow-md active-pill":"bg-brand-cream-dark text-brand-brown border-brand-gold/30 hover:bg-brand-gold/20"}"
          >
            <span>${e.icon}</span>
            <span>${e.label}</span>
          </button>
        `).join(""));const N=y.map(e=>{const r=e.media?.find(q=>q.isPrimary)||e.media?.[0],a=r?r.secureUrl||r.url||"":e.productoImage||"",l=s(e.name||e.productoName,t),g=r&&s(r.altText||r.alt,t)||l,d=s(e.slug||e.productoSlug,t),m=t==="es"?`/es/productos/${d}`:`/en/products/${d}`,A=e.priceLabel?.[t]?e.priceLabel[t]:e.basePriceCents?H(e.basePriceCents,t):e.productoPrice?`$${e.productoPrice.toFixed(2)}`:null,j=s(e.primaryCategory?.name,t),U=s(e.primaryCategory?.slug,t)||"todas",S=s(e.shortDescription||e.description||e.productoDescription,t),T=Array.isArray(e.tags)?e.tags.join(" "):"",D=`${l} ${S} ${T}`.toLowerCase();return`
            <div class="product-item-wrapper w-full sm:w-[280px] md:w-[300px] xl:w-[320px] flex-shrink-0" data-category="${U}" data-search="${D}">
              <article class="bg-brand-cream border border-brand-gold/30 rounded-2xl overflow-hidden shadow-warm hover:shadow-warm-hover transition-all duration-300 flex flex-col group h-full">
                <a href="${m}" class="relative block overflow-hidden aspect-[4/3] bg-brand-cream-dark">
                  ${a?`
                    <img src="${a}" alt="${g}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  `:`
                    <div class="w-full h-full flex items-center justify-center text-4xl text-brand-gold-secondary">🍞</div>
                  `}
                </a>
                <div class="p-5 flex flex-col flex-grow space-y-2">
                  <div class="flex flex-wrap items-center justify-between gap-1">
                    <span class="text-xs font-semibold text-brand-gold-secondary uppercase tracking-wider">${j}</span>
                    <span class="flex items-center gap-1 bg-brand-brown text-brand-gold text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">🚚 Delivery</span>
                  </div>
                  <h3 class="font-serif font-bold text-xl text-brand-brown group-hover:text-brand-brown-dark transition-colors line-clamp-1">
                    <a href="${m}" class="focus:outline-none focus:underline">${l}</a>
                  </h3>
                  <p class="text-xs sm:text-sm text-brand-brown/75 line-clamp-2 leading-relaxed flex-grow">${S}</p>
                  <div class="pt-2 flex items-center justify-between border-t border-brand-gold/20">
                    ${A?`
                      <span class="font-serif font-extrabold text-xl text-brand-brown">${A}</span>
                    `:`
                      <span class="text-xs text-brand-brown/50 italic">${t==="es"?"Consultar precio":"Ask for price"}</span>
                    `}
                    <a href="${m}" class="text-xs font-bold text-brand-brown/60 hover:text-brand-brown underline-offset-2 hover:underline transition-colors">
                      ${t==="es"?"Ver más →":"View →"}
                    </a>
                  </div>
                </div>
              </article>
            </div>
          `});$&&($.innerHTML=N.join("")),f=Array.from(document.querySelectorAll(".product-item-wrapper"));const p=document.querySelectorAll(".category-pill"),b=()=>{const e=(n?.value||"").trim().toLowerCase();let r=0;u&&u.classList.toggle("hidden",e.length===0),f.forEach(a=>{const l=a.getAttribute("data-category")||"",g=a.getAttribute("data-search")||"",d=i==="todas"||l===i,m=e===""||g.includes(e);d&&m?(a.classList.remove("hidden"),r++):a.classList.add("hidden")}),x&&(x.textContent=`Showing ${r} of ${f.length} products`),C&&C.classList.toggle("hidden",r>0)};p.forEach(e=>{e.addEventListener("click",()=>{const r=e.getAttribute("data-category")||"todas";i=r,p.forEach(a=>{a.getAttribute("data-category")===r?a.className="category-pill px-4 py-2 rounded-xl text-xs sm:text-sm font-extrabold transition-all border shadow-md bg-brand-brown text-brand-gold border-brand-gold cursor-pointer active-pill":a.className="category-pill px-4 py-2 rounded-xl text-xs sm:text-sm font-extrabold transition-all border shadow-sm bg-brand-cream-dark text-brand-brown border-brand-gold/30 hover:bg-brand-gold/20 cursor-pointer"}),b()})}),n&&n.addEventListener("input",b),u&&u.addEventListener("click",()=>{n&&(n.value="",b())}),w&&w.addEventListener("click",()=>{n&&(n.value=""),i="todas",p.forEach(e=>{e.getAttribute("data-category")==="todas"?e.className="category-pill px-4 py-2 rounded-xl text-xs sm:text-sm font-extrabold transition-all border shadow-md bg-brand-brown text-brand-gold border-brand-gold cursor-pointer active-pill":e.className="category-pill px-4 py-2 rounded-xl text-xs sm:text-sm font-extrabold transition-all border shadow-sm bg-brand-cream-dark text-brand-brown border-brand-gold/30 hover:bg-brand-gold/20 cursor-pointer"}),b()});const L=new URLSearchParams(window.location.search),h=L.get("category"),k=L.get("search");h&&(i=h,p.forEach(e=>{e.getAttribute("data-category")===h?e.className="category-pill px-4 py-2 rounded-xl text-xs sm:text-sm font-extrabold transition-all border shadow-md bg-brand-brown text-brand-gold border-brand-gold cursor-pointer active-pill":e.className="category-pill px-4 py-2 rounded-xl text-xs sm:text-sm font-extrabold transition-all border shadow-sm bg-brand-cream-dark text-brand-brown border-brand-gold/30 hover:bg-brand-gold/20 cursor-pointer"})),k&&n&&(n.value=k),b()}catch(o){console.error("Error fetching products:",o),x&&(x.textContent="Error loading products.")}});
