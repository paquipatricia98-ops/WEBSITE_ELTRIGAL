let q=null;function V(u,x){const t=(u||"").toLowerCase(),s=(x||"").toLowerCase();return s.includes("pan")||t.includes("pan")?"🥐":s.includes("pastel")||t.includes("pastel")||s.includes("cake")||t.includes("cake")?"🎂":s.includes("postre")||t.includes("postre")||s.includes("dulce")||t.includes("sweet")||s.includes("dessert")||t.includes("dessert")?"🧁":s.includes("bocadito")||t.includes("bocadito")||s.includes("snack")||t.includes("snack")||s.includes("fiesta")||t.includes("party")?"🍢":s.includes("paisaje")||t.includes("paisaje")||s.includes("land")||t.includes("land")?"🖼️":s.includes("kitty")||t.includes("kitty")||s.includes("kity")||t.includes("kity")?"🐱":s.includes("lacteo")||t.includes("lácteo")||s.includes("cheese")||t.includes("queso")||s.includes("dairy")?"🧀":s.includes("bebida")||t.includes("bebida")||s.includes("drink")||t.includes("drink")||s.includes("caf")||t.includes("caf")?"🥤":s.includes("personalizado")||t.includes("personalizado")||s.includes("custom")||t.includes("custom")?"🎨":"🍰"}async function M(){const x=window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"?"/api/v1":"https://el-trigal-backend-nun9.onrender.com/api/v1",t="es",s=document.getElementById("catalog-filter-bar"),k=document.getElementById("category-pills-container"),f=document.getElementById("catalog-sections-container");if(!(!f||!k))try{const L=await fetch(`${x}/public/categories?locale=${t}&type=local`);if(!L.ok)throw new Error("Error fetching categories from Render API");const h=(await L.json()).data||[];if(h.length===0){f.innerHTML=`
            <div class="text-center py-16 bg-brand-cream rounded-3xl border-2 border-dashed border-brand-gold/40 p-8 space-y-4">
              <div class="text-4xl">🧁</div>
              <h3 class="font-serif text-xl font-bold text-brand-brown">Catálogo en Actualización</h3>
              <p class="text-sm text-brand-brown/70 max-w-md mx-auto">
                Estamos agregando nuevas delicias a nuestro catálogo local. ¡Vuelve pronto!
              </p>
            </div>
          `;return}k.querySelectorAll(".category-pill").forEach(a=>{a.getAttribute("data-category")!=="todas"&&a.remove()}),h.forEach(a=>{const l=a.slug?.[t]||a.id,b=a.name?.[t]||a.name?.es||"",E=V(b,l),m=document.createElement("button");m.type="button",m.setAttribute("data-category",l),m.className="category-pill px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all border shadow-xs flex items-center space-x-1.5 cursor-pointer bg-[#FAF7F2] text-brand-brown border-brand-gold/25 hover:bg-brand-gold/10",m.innerHTML=`<span>${E}</span><span>${b}</span>`,k.appendChild(m)}),f.innerHTML="",h.forEach(a=>{const l=a.slug?.[t]||a.id,b=a.name?.[t]||a.name?.es||"",E=a.description?.[t]||a.description?.es||"",m=a.allergens||[],P=a.images||[],C=V(b,l),r=document.createElement("section");r.className="category-section break-inside-avoid mb-8 bg-brand-cream border-2 border-brand-gold/30 rounded-3xl p-6 sm:p-8 shadow-xl space-y-6",r.setAttribute("data-category",l);let d="";m.length>0&&(d=`
              <div class="flex flex-wrap items-center gap-1.5">
                <span class="text-xs font-semibold text-brand-brown/60">Alérgenos:</span>
                ${m.map(p=>`
                  <span class="text-xs font-bold bg-amber-100 text-amber-900 border border-amber-300 px-2 py-0.5 rounded-md uppercase tracking-wider">
                    ⚠️ ${p}
                  </span>
                `).join("")}
              </div>
            `);let $="";E&&($=`
              <p class="category-desc-block text-xs sm:text-sm text-brand-brown/80 mt-1 max-w-3xl">
                <span class="desc-truncated line-clamp-1">${E}</span>
                <span class="desc-full hidden">${E}</span>
                ${E.length>60?`
                  <button type="button" class="btn-toggle-desc text-xs text-brand-gold-secondary font-bold hover:underline ml-1 inline-block cursor-pointer">
                    Leer más
                  </button>
                `:""}
              </p>
            `);let B="";P.length>0?B=`
              <div class="flex flex-wrap justify-center gap-5 items-start">
                ${P.map(p=>`
                  <div 
                    class="product-gallery-item w-[120px] sm:w-[150px] md:w-[180px] mb-5 relative overflow-hidden rounded-[24px] border border-brand-gold/30 bg-white p-2 shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300 cursor-pointer"
                    data-search="${(p.alt||b).toLowerCase()}"
                  >
                    <img
                      src="${p.secureUrl||p.url}"
                      alt="${p.alt||b}"
                      class="w-full h-auto object-cover rounded-[18px]"
                      loading="lazy"
                    />
                  </div>
                `).join("")}
              </div>
            `:B=`
              <div class="text-center py-8 text-brand-brown/50 text-sm italic">
                Próximamente imágenes para esta categoría.
              </div>
            `,r.innerHTML=`
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-brand-gold/20 pb-4">
              <div>
                <h2 class="font-serif text-lg sm:text-xl md:text-2xl font-bold text-brand-brown flex flex-wrap items-center gap-2">
                  <span>${C}</span>
                  <span>${b}</span>
                  ${a.featured?`
                    <span class="flex-shrink-0 whitespace-nowrap text-[10px] sm:text-xs bg-brand-gold text-brand-brown font-extrabold px-2.5 py-0.5 rounded-full shadow-sm">
                      ⭐ Destacado
                    </span>
                  `:""}
                </h2>
                ${$}
              </div>

              <div class="flex flex-wrap items-center gap-3 sm:justify-end">
                <!-- Share Category Button -->
                <button 
                  class="share-category-btn inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-brand-gold bg-[#fdfdfb] text-brand-brown font-extrabold text-xs shadow-xs hover:bg-brand-gold/15 transition-all cursor-pointer"
                  data-category-slug="${l}"
                  data-category-name="${b}"
                >
                  <svg class="w-3.5 h-3.5 fill-current text-brand-gold-secondary" viewBox="0 0 24 24">
                    <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92z"/>
                  </svg>
                  <span>Compartir</span>
                </button>

                ${d}
              </div>
            </div>

            ${B}

            <!-- VIEW FULL CATALOG OPTION INSIDE EACH CATALOG BLOCK (Visible only in shared view mode) -->
            <div class="shared-view-footer-block hidden pt-6 text-center border-t border-brand-gold/15 mt-8">
              <button 
                type="button"
                class="btn-view-full-catalog-action inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-brand-gold bg-[#fdfdfb] text-brand-brown font-extrabold text-sm shadow hover:bg-brand-gold hover:text-brand-brown transition-all cursor-pointer"
              >
                <span>Ver Catálogo Completo</span>
              </button>
            </div>
          `,f.appendChild(r)}),s?.classList.remove("hidden"),G()}catch(L){console.error(L),f.innerHTML=`
          <div class="text-center py-16 bg-brand-cream rounded-3xl border-2 border-dashed border-brand-gold/40 p-8 space-y-4">
            <div class="text-4xl">⚠️</div>
            <h3 class="font-serif text-xl font-bold text-brand-brown">Error al cargar el catálogo</h3>
            <p class="text-sm text-brand-brown/70 max-w-md mx-auto">
              No pudimos conectar con el servidor. Por favor, intenta de nuevo más tarde.
            </p>
          </div>
        `}}function G(){const u=document.getElementById("product-search-input"),x=document.getElementById("clear-search-btn"),t=document.querySelectorAll(".category-pill"),s=document.querySelectorAll(".category-section"),k=document.getElementById("no-results-state"),f=document.getElementById("catalog-breadcrumbs"),L=document.getElementById("catalog-page-header"),N=document.getElementById("catalog-filter-bar"),h=document.getElementById("catalog-sections-container");let y="todas",a=!1;const l=()=>{const e=(u?.value||"").trim().toLowerCase();let n=0;x&&x.classList.toggle("hidden",e.length===0),a?(f?.classList.add("hidden"),L?.classList.add("hidden"),N?.classList.add("hidden")):(f?.classList.remove("hidden"),L?.classList.remove("hidden"),N?.classList.remove("hidden")),y==="todas"&&!a?(h?.classList.remove("space-y-16"),h?.classList.add("columns-1","lg:columns-2","gap-8")):(h?.classList.remove("columns-1","lg:columns-2","gap-8"),h?.classList.add("space-y-16")),s.forEach(o=>{const w=o.getAttribute("data-category")||"",g=y==="todas"||w===y,c=o.querySelector(".shared-view-footer-block");if(!g){o.classList.add("hidden"),c?.classList.add("hidden");return}a?c?.classList.remove("hidden"):c?.classList.add("hidden");const T=o.querySelectorAll(".product-gallery-item");let F=0;T.forEach(v=>{const O=v.getAttribute("data-search")||"";e===""||O.includes(e)?(v.classList.remove("hidden"),F++):v.classList.add("hidden")}),F>0||T.length===0&&e===""?(o.classList.remove("hidden"),n++):o.classList.add("hidden")}),k&&k.classList.toggle("hidden",n>0)};t.forEach(e=>{e.addEventListener("click",()=>{const n=e.getAttribute("data-category")||"todas";if(y=n,a=!1,t.forEach(o=>{o.getAttribute("data-category")===n?o.className="category-pill px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all border shadow-xs flex items-center space-x-1.5 cursor-pointer bg-brand-brown text-brand-gold border-brand-gold active-pill":o.className="category-pill px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all border shadow-xs flex items-center space-x-1.5 cursor-pointer bg-[#FAF7F2] text-brand-brown border-brand-gold/25 hover:bg-brand-gold/10"}),n==="todas"){const o=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState({path:o},"",o)}else{const o=window.location.protocol+"//"+window.location.host+window.location.pathname+"?category="+n;window.history.pushState({path:o},"",o)}l()})}),u&&u.addEventListener("input",l),x&&x.addEventListener("click",()=>{u&&(u.value="",l())}),document.querySelectorAll(".btn-view-full-catalog-action").forEach(e=>{e.addEventListener("click",()=>{a=!1,y="todas",u&&(u.value=""),t.forEach(o=>{o.getAttribute("data-category")==="todas"?o.className="category-pill px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all border shadow-xs flex items-center space-x-1.5 cursor-pointer bg-brand-brown text-brand-gold border-brand-gold active-pill":o.className="category-pill px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all border shadow-xs flex items-center space-x-1.5 cursor-pointer bg-[#FAF7F2] text-brand-brown border-brand-gold/25 hover:bg-brand-gold/10"});const n=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState({path:n},"",n),l()})}),document.querySelectorAll(".share-category-btn").forEach(e=>{e.addEventListener("click",async n=>{n.stopPropagation();const o=e.getAttribute("data-category-slug")||"",w=e.getAttribute("data-category-name")||"",g=`${window.location.origin}${window.location.pathname}?category=${o}`,c=e.querySelector("span"),T=c?c.textContent:"Share";y=o,a=!0,window.history.pushState({path:g},"",g),t.forEach(v=>{v.getAttribute("data-category")===o?v.className="category-pill px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all border shadow-xs flex items-center space-x-1.5 cursor-pointer bg-brand-brown text-brand-gold border-brand-gold active-pill":v.className="category-pill px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all border shadow-xs flex items-center space-x-1.5 cursor-pointer bg-[#FAF7F2] text-brand-brown border-brand-gold/25 hover:bg-brand-gold/10"}),l();const F={title:`El Trigal - ${w}`,url:g};try{navigator.share?await navigator.share(F):(await navigator.clipboard.writeText(g),c&&(c.textContent="¡Copiado! 📋",setTimeout(()=>{c.textContent=T},2e3)))}catch{try{await navigator.clipboard.writeText(g),c&&(c.textContent="¡Copiado! 📋",setTimeout(()=>{c.textContent=T},2e3))}catch{}}})}),document.querySelectorAll(".btn-toggle-desc").forEach(e=>{e.addEventListener("click",n=>{n.stopPropagation();const o=e.closest(".category-desc-block");if(o){const w=o.querySelector(".desc-truncated"),g=o.querySelector(".desc-full");w?.classList.contains("hidden")?(w?.classList.remove("hidden"),g?.classList.add("hidden"),e.textContent="Leer más"):(w?.classList.add("hidden"),g?.classList.remove("hidden"),e.textContent="Leer menos")}})});let C=new URLSearchParams(window.location.search).get("category");C&&(C=C.trim().split(" ")[0],y=C,a=!0,t.forEach(e=>{e.getAttribute("data-category")===C?e.className="category-pill px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all border shadow-xs flex items-center space-x-1.5 cursor-pointer bg-brand-brown text-brand-gold border-brand-gold active-pill":e.className="category-pill px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all border shadow-xs flex items-center space-x-1.5 cursor-pointer bg-[#FAF7F2] text-brand-brown border-brand-gold/25 hover:bg-brand-gold/10"}));const r=document.getElementById("image-lightbox"),d=document.getElementById("lightbox-img"),$=document.getElementById("lightbox-caption"),B=document.getElementById("lightbox-counter"),p=document.getElementById("lightbox-close"),I=document.getElementById("lightbox-prev"),S=document.getElementById("lightbox-next");let i=[],A=0;const z=e=>{const n=e.closest(".category-section");n&&(i=Array.from(n.querySelectorAll(".product-gallery-item:not(.hidden)")),A=i.indexOf(e),H(),r&&(r.classList.remove("hidden"),r.classList.add("flex"),setTimeout(()=>{r.classList.remove("opacity-0")},50)))},H=()=>{if(i.length===0||!d)return;const n=i[A].querySelector("img");n&&(d.classList.remove("scale-100","opacity-100"),d.classList.add("scale-95","opacity-0"),setTimeout(()=>{d.src=n.src,d.alt=n.alt,$&&($.textContent=n.alt||""),B&&(B.textContent=`Foto ${A+1} de ${i.length}`),i.length<=1?(I&&I.classList.add("hidden"),S&&S.classList.add("hidden")):(I&&I.classList.remove("hidden"),S&&S.classList.remove("hidden")),d.classList.remove("scale-95","opacity-0"),d.classList.add("scale-100","opacity-100")},150))},j=()=>{r&&(r.classList.add("opacity-0"),d&&(d.classList.remove("scale-100","opacity-100"),d.classList.add("scale-95","opacity-0")),setTimeout(()=>{r.classList.add("hidden"),r.classList.remove("flex")},300))},U=()=>{i.length!==0&&(A=(A+1)%i.length,H())},D=()=>{i.length!==0&&(A=(A-1+i.length)%i.length,H())};document.querySelectorAll(".product-gallery-item").forEach(e=>{e.addEventListener("click",()=>{z(e)})}),p&&p.addEventListener("click",j),S&&S.addEventListener("click",U),I&&I.addEventListener("click",D),r&&r.addEventListener("click",e=>{e.target===r&&j()}),q&&window.removeEventListener("keydown",q),q=e=>{!r||r.classList.contains("hidden")||(e.key==="ArrowRight"&&U(),e.key==="ArrowLeft"&&D(),e.key==="Escape"&&j())},window.addEventListener("keydown",q),l()}document.addEventListener("DOMContentLoaded",M);document.addEventListener("astro:page-load",M);M();
