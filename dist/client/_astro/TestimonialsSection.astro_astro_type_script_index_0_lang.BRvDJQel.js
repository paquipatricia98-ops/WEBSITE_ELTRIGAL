document.addEventListener("DOMContentLoaded",async()=>{const r=document.getElementById("testimonials-header"),o=document.getElementById("testimonials-stats"),i=document.getElementById("testimonials-grid");if(!r||!o||!i)return;const l=r.dataset.locale,f=window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"?"/api/v1":r.dataset.api||"/api/v1";async function m(){const a=await fetch(`${f}/public/reviews?locale=${l}`);if(!a.ok)throw new Error("API Error");return await a.json()}try{const c=(await m()).data,p=c?.reviews||[],h=c?.rating||5,d=c?.userRatingCount||0,v=p.filter(x=>x.text?.text).slice(0,5);d>0?o.innerHTML=`
          <div class="flex flex-col items-center justify-center mt-4">
            <div class="flex items-center gap-3 bg-white px-6 py-2 rounded-full shadow-sm border border-brand-gold/20">
              <svg class="w-6 h-6 text-[#4285F4]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
              <span class="text-xl font-bold text-brand-brown">${h.toFixed(1)}</span>
              <div class="flex text-brand-gold text-lg">★★★★★</div>
              <span class="text-sm font-medium text-brand-brown/60">
                (${d} ${l==="es"?"reseñas":"reviews"})
              </span>
            </div>
          </div>
        `:o.innerHTML="",v.length>0?(i.innerHTML=v.map((s,n)=>{const t=s.authorAttribution?.photoUri,e=s.authorAttribution?.displayName||"Cliente",u=e.charAt(0).toUpperCase(),g=s.rating||5,w=Array.from({length:g}).map(()=>"<span>★</span>").join(""),b=s.text?.text||"";return`
            <div class="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.333rem)] bg-white p-8 rounded-2xl shadow-warm flex flex-col space-y-4 hover:shadow-lg transition-shadow duration-300 relative text-left">
              
              <div class="absolute top-6 right-6">
                <svg class="w-6 h-6 text-[#4285F4] opacity-80" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
              </div>

              <div class="flex items-center gap-3 mb-3">
                <div class="flex-shrink-0">
                  ${t?`
                    <img src="${t}" alt="${e}" class="w-14 h-14 rounded-full object-cover" referrerpolicy="no-referrer" loading="lazy" />
                  `:`
                    <div class="w-14 h-14 rounded-full bg-[#F25C27] text-white flex items-center justify-center font-medium text-[22px]">${u}</div>
                  `}
                </div>
                
                <div class="flex flex-col justify-center pr-8 min-w-0 flex-1">
                  <div class="font-bold text-base text-brand-brown leading-tight truncate">${e}</div>
                  <div class="text-[13px] text-[#6B7280] mt-0.5">Google Review</div>
                  <div class="flex text-[#FABB05] text-[18px] mt-0.5 gap-[1px]">
                    ${w}
                  </div>
                </div>
              </div>

              <div class="review-text-container flex flex-col items-start w-full flex-1" data-index="${n}">
                <div class="text-[15px] text-gray-600 leading-relaxed text-left w-full min-h-[96px]">
                  <div class="line-clamp-4 transition-all duration-300" id="review-content-${n}">
                    ${b}
                  </div>
                </div>
                <div class="mt-auto pt-3">
                  <button class="read-more-btn text-brand-gold font-bold text-xs hover:underline hidden" id="read-more-btn-${n}" data-target="review-content-${n}">
                    ${l==="es"?"Leer más":"Read more"}
                  </button>
                </div>
              </div>
            </div>
          `}).join(""),document.querySelectorAll(".review-text-container").forEach(s=>{const n=s.querySelector(".read-more-btn")?.getAttribute("data-target");if(!n)return;const t=document.getElementById(n),e=document.getElementById(`read-more-btn-${s.getAttribute("data-index")}`);t&&e&&t.scrollHeight>t.clientHeight&&(e.classList.remove("hidden"),e.addEventListener("click",()=>{t.classList.contains("line-clamp-4")?(t.classList.remove("line-clamp-4"),e.textContent=e.textContent?.includes("Leer")?"Leer menos":"Read less"):(t.classList.add("line-clamp-4"),e.textContent=e.textContent?.includes("menos")?"Leer más":"Read more")}))})):i.innerHTML=`<div class="text-center py-10 w-full text-brand-brown/70"><p>${l==="es"?"No hay reseñas disponibles.":"No reviews available."}</p></div>`}catch(a){console.error("Error fetching reviews:",a),i.innerHTML=`<div class="text-center py-10 w-full text-red-500/80"><p>${l==="es"?"Error al cargar las reseñas.":"Error loading reviews."}</p></div>`}});
