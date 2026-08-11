let q=null;function D(g,x){const t=(g||"").toLowerCase(),s=(x||"").toLowerCase();return s.includes("pan")||t.includes("pan")?"🥐":s.includes("pastel")||t.includes("pastel")||s.includes("cake")||t.includes("cake")?"🎂":s.includes("postre")||t.includes("postre")||s.includes("dulce")||t.includes("sweet")||s.includes("dessert")||t.includes("dessert")?"🧁":s.includes("bocadito")||t.includes("bocadito")||s.includes("snack")||t.includes("snack")||s.includes("fiesta")||t.includes("party")?"🍢":s.includes("paisaje")||t.includes("paisaje")||s.includes("land")||t.includes("land")?"🖼️":s.includes("kitty")||t.includes("kitty")||s.includes("kity")||t.includes("kity")?"🐱":s.includes("lacteo")||t.includes("lácteo")||s.includes("cheese")||t.includes("queso")||s.includes("dairy")?"🧀":s.includes("bebida")||t.includes("bebida")||s.includes("drink")||t.includes("drink")||s.includes("caf")||t.includes("caf")?"🥤":s.includes("personalizado")||t.includes("personalizado")||s.includes("custom")||t.includes("custom")?"🎨":"🍰"}async function U(){const x=window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"?"/api/v1":"https://el-trigal-backend-nun9.onrender.com/api/v1",t="en",s=document.getElementById("catalog-filter-bar"),I=document.getElementById("category-pills-container"),h=document.getElementById("catalog-sections-container");if(!(!h||!I))try{const E=await fetch(`${x}/public/categories?locale=${t}&type=local`);if(!E.ok)throw new Error("Error fetching categories from Render API");const f=(await E.json()).data||[];if(f.length===0){h.innerHTML=`
            <div class="text-center py-16 bg-brand-cream rounded-3xl border-2 border-dashed border-brand-gold/40 p-8 space-y-4">
              <div class="text-4xl">🧁</div>
              <h3 class="font-serif text-xl font-bold text-brand-brown">Catalog Updating</h3>
              <p class="text-sm text-brand-brown/70 max-w-md mx-auto">
                We are adding new delights to our local catalog. Check back soon!
              </p>
            </div>
          `;return}I.querySelectorAll(".category-pill").forEach(a=>{a.getAttribute("data-category")!=="todas"&&a.remove()}),f.forEach(a=>{const l=a.slug?.[t]||a.id,w=a.name?.[t]||a.name?.es||"",C=D(w,l),p=document.createElement("button");p.type="button",p.setAttribute("data-category",l),p.className="category-pill px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all border shadow-xs flex items-center space-x-1.5 cursor-pointer bg-[#FAF7F2] text-brand-brown border-brand-gold/25 hover:bg-brand-gold/10",p.innerHTML=`<span>${C}</span><span>${w}</span>`,I.appendChild(p)}),h.innerHTML="",f.forEach(a=>{const l=a.slug?.[t]||a.id,w=a.name?.[t]||a.name?.es||"",C=a.description?.[t]||a.description?.es||"",p=a.allergens||[],P=a.images||[],k=D(w,l),r=document.createElement("section");r.className="category-section break-inside-avoid mb-8 bg-brand-cream border-2 border-brand-gold/30 rounded-3xl p-6 sm:p-8 shadow-xl space-y-6",r.setAttribute("data-category",l);let d="";p.length>0&&(d=`
              <div class="flex flex-wrap items-center gap-1.5">
                <span class="text-xs font-semibold text-brand-brown/60">Allergens:</span>
                ${p.map(c=>`
                  <span class="text-xs font-bold bg-amber-100 text-amber-900 border border-amber-300 px-2 py-0.5 rounded-md uppercase tracking-wider">
                    ⚠️ ${c}
                  </span>
                `).join("")}
              </div>
            `);let $="";C&&($=`
              <p class="category-desc-block text-xs sm:text-sm text-brand-brown/80 mt-1 max-w-3xl">
                <span class="desc-truncated line-clamp-1">${C}</span>
                <span class="desc-full hidden">${C}</span>
                ${C.length>60?`
                  <button type="button" class="btn-toggle-desc text-xs text-brand-gold-secondary font-bold hover:underline ml-1 inline-block cursor-pointer">
                    Read more
                  </button>
                `:""}
              </p>
            `);let B="";P.length>0?B=`
              <div class="flex flex-wrap justify-center gap-5 items-start">
                ${P.map(c=>{const m=(typeof c.alt=="object"&&c.alt?c.alt[t]||c.alt.en||c.alt.es||"":c.alt)||w;return`
                    <div 
                      class="product-gallery-item w-[120px] sm:w-[150px] md:w-[180px] mb-5 relative overflow-hidden rounded-[24px] border border-brand-gold/30 bg-white p-2 shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300 cursor-pointer"
                      data-search="${m.toLowerCase()}"
                    >
                      <img
                        src="${c.secureUrl||c.url}"
                        alt="${m}"
                        class="w-full h-auto object-cover rounded-[18px]"
                        loading="lazy"
                      />
                    </div>
                  `}).join("")}
              </div>
            `:B=`
              <div class="text-center py-8 text-brand-brown/50 text-sm italic">
                Images for this category coming soon.
              </div>
            `,r.innerHTML=`
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-brand-gold/20 pb-4">
              <div>
                <h2 class="font-serif text-lg sm:text-xl md:text-2xl font-bold text-brand-brown flex flex-wrap items-center gap-2">
                  <span>${k}</span>
                  <span>${w}</span>
                  ${a.featured?`
                    <span class="flex-shrink-0 whitespace-nowrap text-[10px] sm:text-xs bg-brand-gold text-brand-brown font-extrabold px-2.5 py-0.5 rounded-full shadow-sm">
                      ⭐ Featured
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
                  data-category-name="${w}"
                >
                  <svg class="w-3.5 h-3.5 fill-current text-brand-gold-secondary" viewBox="0 0 24 24">
                    <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92z"/>
                  </svg>
                  <span>Share</span>
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
                <span>View Full Catalog</span>
              </button>
            </div>
          `,h.appendChild(r)}),s?.classList.remove("hidden"),z()}catch(E){console.error(E),h.innerHTML=`
          <div class="text-center py-16 bg-brand-cream rounded-3xl border-2 border-dashed border-brand-gold/40 p-8 space-y-4">
            <div class="text-4xl">⚠️</div>
            <h3 class="font-serif text-xl font-bold text-brand-brown">Error loading catalog</h3>
            <p class="text-sm text-brand-brown/70 max-w-md mx-auto">
              We could not connect to the server. Please try again later.
            </p>
          </div>
        `}}function z(){const g=document.getElementById("product-search-input"),x=document.getElementById("clear-search-btn"),t=document.querySelectorAll(".category-pill"),s=document.querySelectorAll(".category-section"),I=document.getElementById("no-results-state"),h=document.getElementById("catalog-breadcrumbs"),E=document.getElementById("catalog-page-header"),N=document.getElementById("catalog-filter-bar"),f=document.getElementById("catalog-sections-container");let y="todas",a=!1;const l=()=>{const e=(g?.value||"").trim().toLowerCase();let n=0;x&&x.classList.toggle("hidden",e.length===0),a?(h?.classList.add("hidden"),E?.classList.add("hidden"),N?.classList.add("hidden")):(h?.classList.remove("hidden"),E?.classList.remove("hidden"),N?.classList.remove("hidden")),y==="todas"&&!a?(f?.classList.remove("space-y-16"),f?.classList.add("columns-1","lg:columns-2","gap-8")):(f?.classList.remove("columns-1","lg:columns-2","gap-8"),f?.classList.add("space-y-16")),s.forEach(o=>{const v=o.getAttribute("data-category")||"",b=y==="todas"||v===y,i=o.querySelector(".shared-view-footer-block");if(!b){o.classList.add("hidden"),i?.classList.add("hidden");return}a?i?.classList.remove("hidden"):i?.classList.add("hidden");const T=o.querySelectorAll(".product-gallery-item");let F=0;T.forEach(L=>{const R=L.getAttribute("data-search")||"";e===""||R.includes(e)?(L.classList.remove("hidden"),F++):L.classList.add("hidden")}),F>0||T.length===0&&e===""?(o.classList.remove("hidden"),n++):o.classList.add("hidden")}),I&&I.classList.toggle("hidden",n>0)};t.forEach(e=>{e.addEventListener("click",()=>{const n=e.getAttribute("data-category")||"todas";if(y=n,a=!1,t.forEach(o=>{o.getAttribute("data-category")===n?o.className="category-pill px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all border shadow-xs flex items-center space-x-1.5 cursor-pointer bg-brand-brown text-brand-gold border-brand-gold active-pill":o.className="category-pill px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all border shadow-xs flex items-center space-x-1.5 cursor-pointer bg-[#FAF7F2] text-brand-brown border-brand-gold/25 hover:bg-brand-gold/10"}),n==="todas"){const o=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState({path:o},"",o)}else{const o=window.location.protocol+"//"+window.location.host+window.location.pathname+"?category="+n;window.history.pushState({path:o},"",o)}l()})}),g&&g.addEventListener("input",l),x&&x.addEventListener("click",()=>{g&&(g.value="",l())}),document.querySelectorAll(".btn-view-full-catalog-action").forEach(e=>{e.addEventListener("click",()=>{a=!1,y="todas",g&&(g.value=""),t.forEach(o=>{o.getAttribute("data-category")==="todas"?o.className="category-pill px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all border shadow-xs flex items-center space-x-1.5 cursor-pointer bg-brand-brown text-brand-gold border-brand-gold active-pill":o.className="category-pill px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all border shadow-xs flex items-center space-x-1.5 cursor-pointer bg-[#FAF7F2] text-brand-brown border-brand-gold/25 hover:bg-brand-gold/10"});const n=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState({path:n},"",n),l()})}),document.querySelectorAll(".share-category-btn").forEach(e=>{e.addEventListener("click",async n=>{n.stopPropagation();const o=e.getAttribute("data-category-slug")||"",v=e.getAttribute("data-category-name")||"",b=`${window.location.origin}${window.location.pathname}?category=${o}`,i=e.querySelector("span"),T=i?i.textContent:"Share";y=o,a=!0,window.history.pushState({path:b},"",b),t.forEach(L=>{L.getAttribute("data-category")===o?L.className="category-pill px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all border shadow-xs flex items-center space-x-1.5 cursor-pointer bg-brand-brown text-brand-gold border-brand-gold active-pill":L.className="category-pill px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all border shadow-xs flex items-center space-x-1.5 cursor-pointer bg-[#FAF7F2] text-brand-brown border-brand-gold/25 hover:bg-brand-gold/10"}),l();const F={title:`El Trigal - ${v}`,url:b};try{navigator.share?await navigator.share(F):(await navigator.clipboard.writeText(b),i&&(i.textContent="Copied! 📋",setTimeout(()=>{i.textContent=T},2e3)))}catch{try{await navigator.clipboard.writeText(b),i&&(i.textContent="Copied! 📋",setTimeout(()=>{i.textContent=T},2e3))}catch{}}})}),document.querySelectorAll(".btn-toggle-desc").forEach(e=>{e.addEventListener("click",n=>{n.stopPropagation();const o=e.closest(".category-desc-block");if(o){const v=o.querySelector(".desc-truncated"),b=o.querySelector(".desc-full");v?.classList.contains("hidden")?(v?.classList.remove("hidden"),b?.classList.add("hidden"),e.textContent="Read more"):(v?.classList.add("hidden"),b?.classList.remove("hidden"),e.textContent="Read less")}})});let k=new URLSearchParams(window.location.search).get("category");k&&(k=k.trim().split(" ")[0],y=k,a=!0,t.forEach(e=>{e.getAttribute("data-category")===k?e.className="category-pill px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all border shadow-xs flex items-center space-x-1.5 cursor-pointer bg-brand-brown text-brand-gold border-brand-gold active-pill":e.className="category-pill px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all border shadow-xs flex items-center space-x-1.5 cursor-pointer bg-[#FAF7F2] text-brand-brown border-brand-gold/25 hover:bg-brand-gold/10"}));const r=document.getElementById("image-lightbox"),d=document.getElementById("lightbox-img"),$=document.getElementById("lightbox-caption"),B=document.getElementById("lightbox-counter"),c=document.getElementById("lightbox-close"),m=document.getElementById("lightbox-prev"),S=document.getElementById("lightbox-next");let u=[],A=0;const V=e=>{const n=e.closest(".category-section");n&&(u=Array.from(n.querySelectorAll(".product-gallery-item:not(.hidden)")),A=u.indexOf(e),H(),r&&(r.classList.remove("hidden"),r.classList.add("flex"),setTimeout(()=>{r.classList.remove("opacity-0")},50)))},H=()=>{if(u.length===0||!d)return;const n=u[A].querySelector("img");n&&(d.classList.remove("scale-100","opacity-100"),d.classList.add("scale-95","opacity-0"),setTimeout(()=>{d.src=n.src,d.alt=n.alt,$&&($.textContent=n.alt||""),B&&(B.textContent=`Photo ${A+1} of ${u.length}`),u.length<=1?(m&&m.classList.add("hidden"),S&&S.classList.add("hidden")):(m&&m.classList.remove("hidden"),S&&S.classList.remove("hidden")),d.classList.remove("scale-95","opacity-0"),d.classList.add("scale-100","opacity-100")},150))},j=()=>{r&&(r.classList.add("opacity-0"),d&&(d.classList.remove("scale-100","opacity-100"),d.classList.add("scale-95","opacity-0")),setTimeout(()=>{r.classList.add("hidden"),r.classList.remove("flex")},300))},M=()=>{u.length!==0&&(A=(A+1)%u.length,H())},O=()=>{u.length!==0&&(A=(A-1+u.length)%u.length,H())};document.querySelectorAll(".product-gallery-item").forEach(e=>{e.addEventListener("click",()=>{V(e)})}),c&&c.addEventListener("click",j),S&&S.addEventListener("click",M),m&&m.addEventListener("click",O),r&&r.addEventListener("click",e=>{e.target===r&&j()}),q&&window.removeEventListener("keydown",q),q=e=>{!r||r.classList.contains("hidden")||(e.key==="ArrowRight"&&M(),e.key==="ArrowLeft"&&O(),e.key==="Escape"&&j())},window.addEventListener("keydown",q),l()}document.addEventListener("DOMContentLoaded",U);document.addEventListener("astro:page-load",U);U();
