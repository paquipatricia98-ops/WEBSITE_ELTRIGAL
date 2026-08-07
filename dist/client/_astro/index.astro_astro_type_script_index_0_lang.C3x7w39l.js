function U(n,t){return new Intl.NumberFormat(t==="es"?"es-US":"en-US",{style:"currency",currency:"USD"}).format(n/100)}document.addEventListener("DOMContentLoaded",async()=>{const n=document.getElementById("menu-container");if(!n)return;const t=n.dataset.locale,k=n.dataset.api,o=document.getElementById("product-search-input"),i=document.getElementById("clear-search-btn"),h=document.getElementById("reset-filter-btn"),w=document.getElementById("category-pills-container"),v=document.getElementById("products-grid"),b=document.getElementById("product-count-label"),$=document.getElementById("no-results-state");let s="todas",u=[];try{const g=await fetch(`${k}/public/products?limit=100`);if(!g.ok)throw new Error("API Error");const p=(await g.json()).data||[],A=Array.from(new Set(p.map(e=>e.primaryCategory?.id))).filter(Boolean),I=[{id:"todas",label:"All Categories",icon:"✨"},...A.map(e=>{const r=p.find(d=>d.primaryCategory?.id===e),a=r?.primaryCategory?.slug?.[t]||e;return{id:a,label:r?.primaryCategory?.name?.[t]||"Category",icon:a.includes("pastel")||a.includes("sweet")?"🍰":"🥖"}})];w&&(w.innerHTML=I.map(e=>`
            <button
              type="button"
            data-category="${e.id}"
            class="category-pill px-4 py-2 rounded-xl text-xs sm:text-sm font-extrabold transition-all border shadow-sm flex items-center space-x-1.5 cursor-pointer ${e.id==="todas"?"bg-brand-brown text-brand-gold border-brand-gold shadow-md active-pill":"bg-brand-cream-dark text-brand-brown border-brand-gold/30 hover:bg-brand-gold/20"}"
          >
            <span>${e.icon}</span>
            <span>${e.label}</span>
          </button>
        `).join(""));const B=p.map(e=>{const r=e.media?.find(N=>N.isPrimary)||e.media?.[0],a=r?r.secureUrl:"",d=r&&(r.alt?.[t]||r.altText?.[t]||e.name?.[t])||"",c=t==="es"?`/es/productos/${e.slug[t]||e.slug.es}`:`/en/products/${e.slug[t]||e.slug.en}`,x=e.priceLabel?.[t]?e.priceLabel[t]:e.basePriceCents?U(e.basePriceCents,t):null,y=e.primaryCategory?.name[t]||"",P=e.primaryCategory?.slug?.[t]||"todas",L=e.shortDescription?.[t]||"",S=e.tags?.join(" ")||"",j=`${e.name[t]} ${L} ${S}`.toLowerCase();return`
            <div class="product-item-wrapper w-full sm:w-[280px] md:w-[300px] xl:w-[320px] flex-shrink-0" data-category="${P}" data-search="${j}">
              <article class="bg-brand-cream border border-brand-gold/30 rounded-2xl overflow-hidden shadow-warm hover:shadow-warm-hover transition-all duration-300 flex flex-col group h-full">
                <a href="${c}" class="relative block overflow-hidden aspect-[4/3] bg-brand-cream-dark">
                  ${a?`
                    <img src="${a}" alt="${d}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  `:`
                    <div class="w-full h-full flex items-center justify-center text-4xl text-brand-gold-secondary">🍞</div>
                  `}
                </a>
                <div class="p-5 flex flex-col flex-grow space-y-2">
                  <div class="flex flex-wrap items-center justify-between gap-1">
                    <span class="text-xs font-semibold text-brand-gold-secondary uppercase tracking-wider">${y}</span>
                    <span class="flex items-center gap-1 bg-brand-brown text-brand-gold text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">🚚 Delivery</span>
                  </div>
                  <h3 class="font-serif font-bold text-xl text-brand-brown group-hover:text-brand-brown-dark transition-colors line-clamp-1">
                    <a href="${c}" class="focus:outline-none focus:underline">${e.name[t]}</a>
                  </h3>
                  <p class="text-xs sm:text-sm text-brand-brown/75 line-clamp-2 leading-relaxed flex-grow">${L}</p>
                  <div class="pt-2 flex items-center justify-between border-t border-brand-gold/20">
                    ${x?`
                      <span class="font-serif font-extrabold text-xl text-brand-brown">${x}</span>
                    `:`
                      <span class="text-xs text-brand-brown/50 italic">${t==="es"?"Consultar precio":"Ask for price"}</span>
                    `}
                    <a href="${c}" class="text-xs font-bold text-brand-brown/60 hover:text-brand-brown underline-offset-2 hover:underline transition-colors">
                      ${t==="es"?"Ver más →":"View →"}
                    </a>
                  </div>
                </div>
              </article>
            </div>
          `});v&&(v.innerHTML=B.join("")),u=Array.from(document.querySelectorAll(".product-item-wrapper"));const m=document.querySelectorAll(".category-pill"),l=()=>{const e=(o?.value||"").trim().toLowerCase();let r=0;i&&i.classList.toggle("hidden",e.length===0),u.forEach(a=>{const d=a.getAttribute("data-category")||"",c=a.getAttribute("data-search")||"",x=s==="todas"||d===s,y=e===""||c.includes(e);x&&y?(a.classList.remove("hidden"),r++):a.classList.add("hidden")}),b&&(b.textContent=`Showing ${r} of ${u.length} products`),$&&$.classList.toggle("hidden",r>0)};m.forEach(e=>{e.addEventListener("click",()=>{const r=e.getAttribute("data-category")||"todas";s=r,m.forEach(a=>{a.getAttribute("data-category")===r?a.className="category-pill px-4 py-2 rounded-xl text-xs sm:text-sm font-extrabold transition-all border shadow-md bg-brand-brown text-brand-gold border-brand-gold cursor-pointer active-pill":a.className="category-pill px-4 py-2 rounded-xl text-xs sm:text-sm font-extrabold transition-all border shadow-sm bg-brand-cream-dark text-brand-brown border-brand-gold/30 hover:bg-brand-gold/20 cursor-pointer"}),l()})}),o&&o.addEventListener("input",l),i&&i.addEventListener("click",()=>{o&&(o.value="",l())}),h&&h.addEventListener("click",()=>{o&&(o.value=""),s="todas",m.forEach(e=>{e.getAttribute("data-category")==="todas"?e.className="category-pill px-4 py-2 rounded-xl text-xs sm:text-sm font-extrabold transition-all border shadow-md bg-brand-brown text-brand-gold border-brand-gold cursor-pointer active-pill":e.className="category-pill px-4 py-2 rounded-xl text-xs sm:text-sm font-extrabold transition-all border shadow-sm bg-brand-cream-dark text-brand-brown border-brand-gold/30 hover:bg-brand-gold/20 cursor-pointer"}),l()});const C=new URLSearchParams(window.location.search),f=C.get("category"),E=C.get("search");f&&(s=f,m.forEach(e=>{e.getAttribute("data-category")===f?e.className="category-pill px-4 py-2 rounded-xl text-xs sm:text-sm font-extrabold transition-all border shadow-md bg-brand-brown text-brand-gold border-brand-gold cursor-pointer active-pill":e.className="category-pill px-4 py-2 rounded-xl text-xs sm:text-sm font-extrabold transition-all border shadow-sm bg-brand-cream-dark text-brand-brown border-brand-gold/30 hover:bg-brand-gold/20 cursor-pointer"})),E&&o&&(o.value=E),l()}catch(g){console.error("Error fetching products:",g),b&&(b.textContent="Error loading products.")}});
