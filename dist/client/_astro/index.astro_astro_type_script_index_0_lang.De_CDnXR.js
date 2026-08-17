let N=null;function G(g,f){const t=(g||"").toLowerCase(),s=(f||"").toLowerCase();return s.includes("pan")||t.includes("pan")?"🥐":s.includes("pastel")||t.includes("pastel")||s.includes("cake")||t.includes("cake")?"🎂":s.includes("postre")||t.includes("postre")||s.includes("dulce")||t.includes("sweet")||s.includes("dessert")||t.includes("dessert")?"🧁":s.includes("bocadito")||t.includes("bocadito")||s.includes("snack")||t.includes("snack")||s.includes("fiesta")||t.includes("party")?"🍢":s.includes("paisaje")||t.includes("paisaje")||s.includes("land")||t.includes("land")?"🖼️":s.includes("kitty")||t.includes("kitty")||s.includes("kity")||t.includes("kity")?"🐱":s.includes("lacteo")||t.includes("lácteo")||s.includes("cheese")||t.includes("queso")||s.includes("dairy")?"🧀":s.includes("bebida")||t.includes("bebida")||s.includes("drink")||t.includes("drink")||s.includes("caf")||t.includes("caf")?"🥤":s.includes("personalizado")||t.includes("personalizado")||s.includes("custom")||t.includes("custom")?"🎨":"🍰"}async function U(){const f=window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"?"/api/v1":"https://el-trigal-backend-nun9.onrender.com/api/v1",t="en",s=document.getElementById("catalog-filter-bar"),I=document.getElementById("category-pills-container"),y=document.getElementById("catalog-sections-container");if(!(!y||!I))try{const C=await fetch(`${f}/public/categories?locale=${t}&type=local`);if(!C.ok)throw new Error("Error fetching categories from Render API");const w=(await C.json()).data||[];if(w.length===0){y.innerHTML=`
            <div class="text-center py-16 bg-brand-cream rounded-3xl border-2 border-dashed border-brand-gold/40 p-8 space-y-4">
              <div class="text-4xl">🧁</div>
              <h3 class="font-serif text-xl font-bold text-brand-brown">Catalog Updating</h3>
              <p class="text-sm text-brand-brown/70 max-w-md mx-auto">
                We are adding new delights to our local catalog. Check back soon!
              </p>
            </div>
          `;return}I.querySelectorAll(".category-pill").forEach(a=>{a.getAttribute("data-category")!=="todas"&&a.remove()}),w.forEach(a=>{const c=a.slug?.[t]||a.id,p=a.name?.[t]||a.name?.es||"",k=G(p,c),x=document.createElement("button");x.type="button",x.setAttribute("data-category",c),x.className="category-pill px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all border shadow-xs flex items-center space-x-1.5 cursor-pointer bg-[#FAF7F2] text-brand-brown border-brand-gold/25 hover:bg-brand-gold/10",x.innerHTML=`<span>${k}</span><span>${p}</span>`,I.appendChild(x)}),y.innerHTML="",w.forEach(a=>{const c=a.slug?.[t]||a.id,p=a.name?.[t]||a.name?.es||"",k=a.description?.[t]||a.description?.es||"",x=a.allergens||[],H=a.images||[],A=G(p,c),l=document.createElement("section");l.className="category-section break-inside-avoid mb-8 bg-brand-cream border-2 border-brand-gold/30 rounded-3xl p-6 sm:p-8 shadow-xl space-y-6",l.setAttribute("data-category",c);let i="";x.length>0&&(i=`
              <div class="flex flex-wrap items-center gap-1.5">
                <span class="text-xs font-semibold text-brand-brown/60">Allergens:</span>
                ${x.map(B=>`
                  <span class="text-xs font-bold bg-amber-100 text-amber-900 border border-amber-300 px-2 py-0.5 rounded-md uppercase tracking-wider">
                    ⚠️ ${B}
                  </span>
                `).join("")}
              </div>
            `);let T="";k&&(T=`
              <p class="category-desc-block text-xs sm:text-sm text-brand-brown/80 mt-1 max-w-3xl">
                <span class="desc-truncated line-clamp-1">${k}</span>
                <span class="desc-full hidden">${k}</span>
                ${k.length>60?`
                  <button type="button" class="btn-toggle-desc text-xs text-brand-gold-secondary font-bold hover:underline ml-1 inline-block cursor-pointer">
                    Read more
                  </button>
                `:""}
              </p>
            `);let $="";if(H.length>0){const B=window.innerWidth<640?2:3,h=Array.from({length:B},()=>[]);H.forEach((b,n)=>{h[n%B].push(b)}),$=`
              <div class="grid grid-cols-2 sm:grid-cols-3 gap-4 items-start w-full">
                ${h.map(b=>`
                  <div class="flex flex-col gap-4 w-full">
                    ${b.map(n=>{const d=(typeof n.alt=="object"&&n.alt?n.alt[t]||n.alt.en||n.alt.es||"":n.alt)||"",S=!d||d.toLowerCase().includes("imagen de producto")||d.toLowerCase().includes("product image")||d.toLowerCase()==="imagen"||d.toLowerCase()==="image"?`${p} - El Trigal Bakery Orange NJ`:`${p} - ${d}`;return`
                        <div 
                          class="product-gallery-item w-full relative overflow-hidden rounded-[24px] border border-brand-gold/30 bg-white p-2 shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300 cursor-pointer"
                          data-search="${S.toLowerCase()}"
                        >
                          <img
                            src="${n.secureUrl||n.url}"
                            alt="${S}"
                            class="w-full h-auto object-cover rounded-[18px]"
                            loading="lazy"
                          />
                        </div>
                      `}).join("")}
                  </div>
                `).join("")}
              </div>
            `}else $=`
              <div class="text-center py-8 text-brand-brown/50 text-sm italic">
                Images for this category coming soon.
              </div>
            `;l.innerHTML=`
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-brand-gold/20 pb-4">
              <div>
                <h2 class="font-serif text-lg sm:text-xl md:text-2xl font-bold text-brand-brown flex flex-wrap items-center gap-2">
                  <span>${A}</span>
                  <span>${p}</span>
                  ${a.featured?`
                    <span class="flex-shrink-0 whitespace-nowrap text-[10px] sm:text-xs bg-brand-gold text-brand-brown font-extrabold px-2.5 py-0.5 rounded-full shadow-sm">
                      ⭐ Featured
                    </span>
                  `:""}
                </h2>
                ${T}
              </div>

              <div class="flex flex-wrap items-center gap-3 sm:justify-end">
                <!-- Share Category Button -->
                <button 
                  class="share-category-btn inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-brand-gold bg-[#fdfdfb] text-brand-brown font-extrabold text-xs shadow-xs hover:bg-brand-gold/15 transition-all cursor-pointer"
                  data-category-slug="${c}"
                  data-category-name="${p}"
                >
                  <svg class="w-3.5 h-3.5 fill-current text-brand-gold-secondary" viewBox="0 0 24 24">
                    <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92z"/>
                  </svg>
                  <span>Share</span>
                </button>

                ${i}
              </div>
            </div>

            ${$}

            <!-- VIEW FULL CATALOG OPTION INSIDE EACH CATALOG BLOCK (Visible only in shared view mode) -->
            <div class="shared-view-footer-block hidden pt-6 text-center border-t border-brand-gold/15 mt-8">
              <button 
                type="button"
                class="btn-view-full-catalog-action inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-brand-gold bg-[#fdfdfb] text-brand-brown font-extrabold text-sm shadow hover:bg-brand-gold hover:text-brand-brown transition-all cursor-pointer"
              >
                <span>View Full Catalog</span>
              </button>
            </div>
          `,y.appendChild(l)}),s?.classList.remove("hidden"),V()}catch(C){console.error(C),y.innerHTML=`
          <div class="text-center py-16 bg-brand-cream rounded-3xl border-2 border-dashed border-brand-gold/40 p-8 space-y-4">
            <div class="text-4xl">⚠️</div>
            <h3 class="font-serif text-xl font-bold text-brand-brown">Error loading catalog</h3>
            <p class="text-sm text-brand-brown/70 max-w-md mx-auto">
              We could not connect to the server. Please try again later.
            </p>
          </div>
        `}}function V(){const g=document.getElementById("product-search-input"),f=document.getElementById("clear-search-btn"),t=document.querySelectorAll(".category-pill"),s=document.querySelectorAll(".category-section"),I=document.getElementById("no-results-state"),y=document.getElementById("catalog-breadcrumbs"),C=document.getElementById("catalog-page-header"),P=document.getElementById("catalog-filter-bar"),w=document.getElementById("catalog-sections-container");let v="todas",a=!1;const c=()=>{const e=(g?.value||"").trim().toLowerCase();let r=0;f&&f.classList.toggle("hidden",e.length===0),a?(y?.classList.add("hidden"),C?.classList.add("hidden"),P?.classList.add("hidden")):(y?.classList.remove("hidden"),C?.classList.remove("hidden"),P?.classList.remove("hidden")),v==="todas"&&!a?(w?.classList.remove("space-y-16"),w?.classList.add("columns-1","lg:columns-2","gap-8")):(w?.classList.remove("columns-1","lg:columns-2","gap-8"),w?.classList.add("space-y-16")),s.forEach(o=>{const L=o.getAttribute("data-category")||"",m=v==="todas"||L===v,u=o.querySelector(".shared-view-footer-block");if(!m){o.classList.add("hidden"),u?.classList.add("hidden");return}a?u?.classList.remove("hidden"):u?.classList.add("hidden");const F=o.querySelectorAll(".product-gallery-item");let q=0;F.forEach(E=>{const R=E.getAttribute("data-search")||"";e===""||R.includes(e)?(E.classList.remove("hidden"),q++):E.classList.add("hidden")}),q>0||F.length===0&&e===""?(o.classList.remove("hidden"),r++):o.classList.add("hidden")}),I&&I.classList.toggle("hidden",r>0)};t.forEach(e=>{e.addEventListener("click",()=>{const r=e.getAttribute("data-category")||"todas";if(v=r,a=!1,t.forEach(o=>{o.getAttribute("data-category")===r?o.className="category-pill px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all border shadow-xs flex items-center space-x-1.5 cursor-pointer bg-brand-brown text-brand-gold border-brand-gold active-pill":o.className="category-pill px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all border shadow-xs flex items-center space-x-1.5 cursor-pointer bg-[#FAF7F2] text-brand-brown border-brand-gold/25 hover:bg-brand-gold/10"}),r==="todas"){const o=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState({path:o},"",o)}else{const o=window.location.protocol+"//"+window.location.host+window.location.pathname+"?category="+r;window.history.pushState({path:o},"",o)}c()})}),g&&g.addEventListener("input",c),f&&f.addEventListener("click",()=>{g&&(g.value="",c())}),document.querySelectorAll(".btn-view-full-catalog-action").forEach(e=>{e.addEventListener("click",()=>{a=!1,v="todas",g&&(g.value=""),t.forEach(o=>{o.getAttribute("data-category")==="todas"?o.className="category-pill px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all border shadow-xs flex items-center space-x-1.5 cursor-pointer bg-brand-brown text-brand-gold border-brand-gold active-pill":o.className="category-pill px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all border shadow-xs flex items-center space-x-1.5 cursor-pointer bg-[#FAF7F2] text-brand-brown border-brand-gold/25 hover:bg-brand-gold/10"});const r=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState({path:r},"",r),c()})}),document.querySelectorAll(".share-category-btn").forEach(e=>{e.addEventListener("click",async r=>{r.stopPropagation();const o=e.getAttribute("data-category-slug")||"",L=e.getAttribute("data-category-name")||"",m=`${window.location.origin}${window.location.pathname}?category=${o}`,u=e.querySelector("span"),F=u?u.textContent:"Share";v=o,a=!0,window.history.pushState({path:m},"",m),t.forEach(E=>{E.getAttribute("data-category")===o?E.className="category-pill px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all border shadow-xs flex items-center space-x-1.5 cursor-pointer bg-brand-brown text-brand-gold border-brand-gold active-pill":E.className="category-pill px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all border shadow-xs flex items-center space-x-1.5 cursor-pointer bg-[#FAF7F2] text-brand-brown border-brand-gold/25 hover:bg-brand-gold/10"}),c();const q={title:`El Trigal - ${L}`,url:m};try{navigator.share?await navigator.share(q):(await navigator.clipboard.writeText(m),u&&(u.textContent="Copied! 📋",setTimeout(()=>{u.textContent=F},2e3)))}catch{try{await navigator.clipboard.writeText(m),u&&(u.textContent="Copied! 📋",setTimeout(()=>{u.textContent=F},2e3))}catch{}}})}),document.querySelectorAll(".btn-toggle-desc").forEach(e=>{e.addEventListener("click",r=>{r.stopPropagation();const o=e.closest(".category-desc-block");if(o){const L=o.querySelector(".desc-truncated"),m=o.querySelector(".desc-full");L?.classList.contains("hidden")?(L?.classList.remove("hidden"),m?.classList.add("hidden"),e.textContent="Read more"):(L?.classList.add("hidden"),m?.classList.remove("hidden"),e.textContent="Read less")}})});let A=new URLSearchParams(window.location.search).get("category");A&&(A=A.trim().split(" ")[0],v=A,a=!0,t.forEach(e=>{e.getAttribute("data-category")===A?e.className="category-pill px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all border shadow-xs flex items-center space-x-1.5 cursor-pointer bg-brand-brown text-brand-gold border-brand-gold active-pill":e.className="category-pill px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all border shadow-xs flex items-center space-x-1.5 cursor-pointer bg-[#FAF7F2] text-brand-brown border-brand-gold/25 hover:bg-brand-gold/10"}));const l=document.getElementById("image-lightbox"),i=document.getElementById("lightbox-img"),T=document.getElementById("lightbox-caption"),$=document.getElementById("lightbox-counter"),B=document.getElementById("lightbox-close"),h=document.getElementById("lightbox-prev"),b=document.getElementById("lightbox-next");let n=[],d=0;const M=e=>{const r=e.closest(".category-section");r&&(n=Array.from(r.querySelectorAll(".product-gallery-item:not(.hidden)")),d=n.indexOf(e),S(),l&&(l.classList.remove("hidden"),l.classList.add("flex"),setTimeout(()=>{l.classList.remove("opacity-0")},50)))},S=()=>{if(n.length===0||!i)return;const r=n[d].querySelector("img");r&&(i.classList.remove("scale-100","opacity-100"),i.classList.add("scale-95","opacity-0"),setTimeout(()=>{i.src=r.src,i.alt=r.alt,T&&(T.textContent=r.alt||""),$&&($.textContent=`Photo ${d+1} of ${n.length}`),n.length<=1?(h&&h.classList.add("hidden"),b&&b.classList.add("hidden")):(h&&h.classList.remove("hidden"),b&&b.classList.remove("hidden")),i.classList.remove("scale-95","opacity-0"),i.classList.add("scale-100","opacity-100")},150))},j=()=>{l&&(l.classList.add("opacity-0"),i&&(i.classList.remove("scale-100","opacity-100"),i.classList.add("scale-95","opacity-0")),setTimeout(()=>{l.classList.add("hidden"),l.classList.remove("flex")},300))},O=()=>{n.length!==0&&(d=(d+1)%n.length,S())},D=()=>{n.length!==0&&(d=(d-1+n.length)%n.length,S())};document.querySelectorAll(".product-gallery-item").forEach(e=>{e.addEventListener("click",()=>{M(e)})}),B&&B.addEventListener("click",j),b&&b.addEventListener("click",O),h&&h.addEventListener("click",D),l&&l.addEventListener("click",e=>{e.target===l&&j()}),N&&window.removeEventListener("keydown",N),N=e=>{!l||l.classList.contains("hidden")||(e.key==="ArrowRight"&&O(),e.key==="ArrowLeft"&&D(),e.key==="Escape"&&j())},window.addEventListener("keydown",N),c()}document.addEventListener("DOMContentLoaded",U);document.addEventListener("astro:page-load",U);U();
