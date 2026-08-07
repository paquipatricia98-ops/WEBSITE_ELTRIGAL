async function y(){const s=document.querySelector(".coverflow-container");if(!s)return;const o=s.dataset.locale,g=s.dataset.api;try{const i=await fetch(`${g}/public/categories`);if(!i.ok)throw new Error("Error fetching categories");const e=(await i.json()).data||[];if(e.length===0){s.innerHTML='<div class="text-center text-brand-brown/50">No hay categorías.</div>';return}s.innerHTML=e.map(t=>{const f=`/${o}/menu?category=${t.slug?.[o]||t.slug?.es||t.id}`,b=typeof t.image=="object"&&t.image?t.image.secureUrl||t.image.url:typeof t.image=="string"?t.image:null,a=t.name?.[o]||t.name?.es||"",r=t.description?.[o]||t.description?.es||"",n=o==="es"?"Ver productos":"Browse items";return b?`
            <a href="${f}" class="coverflow-card absolute w-[260px] sm:w-[320px] h-[360px] rounded-2xl overflow-hidden shadow-warm border block transition-all duration-500 ease-out origin-center cursor-pointer bg-brand-brown border-brand-gold/30" style="will-change: transform, opacity;">
              <img src="${b}" alt="${a}" width="600" height="400" class="w-full h-full object-cover transition-all duration-500" loading="lazy" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent p-6 flex flex-col justify-end">
                <h3 class="font-serif text-2xl font-bold text-white transition-colors">${a}</h3>
                ${r?`<p class="text-xs sm:text-sm text-brand-cream/80 line-clamp-2 mt-1">${r}</p>`:""}
                <div class="mt-3 flex items-center text-xs font-bold text-brand-gold">
                  <span>${n} →</span>
                </div>
              </div>
            </a>
          `:`
            <a href="${f}" class="coverflow-card absolute w-[260px] sm:w-[320px] h-[360px] rounded-2xl overflow-hidden shadow-warm border block transition-all duration-500 ease-out origin-center cursor-pointer bg-brand-cream border-brand-gold/45" style="will-change: transform, opacity;">
              <div class="h-full p-6 flex flex-col justify-between">
                <div class="w-12 h-12 rounded-xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center text-brand-gold-secondary">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                    <circle cx="8.5" cy="8.5" r="1.5"/>
                    <polyline points="21 15 16 10 5 21"/>
                  </svg>
                </div>
                <div class="space-y-1">
                  <h3 class="font-serif text-2xl font-bold text-brand-brown transition-colors">${a}</h3>
                  ${r?`<p class="text-xs sm:text-sm text-brand-brown/70 line-clamp-2">${r}</p>`:""}
                  <div class="pt-2 flex items-center text-xs font-bold text-brand-gold-secondary">
                    <span>${n} →</span>
                  </div>
                </div>
              </div>
            </a>
          `}).join(""),L()}catch(i){console.error(i),s.innerHTML='<div class="text-center text-red-500">Error al cargar las categorías.</div>'}}function L(){const s=document.querySelector(".coverflow-container");if(!s)return;const o=s.querySelectorAll(".coverflow-card"),g=document.querySelector(".coverflow-prev"),i=document.querySelector(".coverflow-next"),d=document.querySelector(".coverflow-dots");if(!o.length)return;let e=Math.floor(o.length/2);d&&(d.innerHTML="",o.forEach((r,n)=>{const l=document.createElement("button");l.className=`w-2.5 h-2.5 rounded-full transition-all duration-300 ${n===e?"bg-brand-gold-secondary scale-125":"bg-brand-brown/25"}`,l.setAttribute("aria-label",`Go to slide ${n+1}`),l.addEventListener("click",()=>{e=n,a()}),d.appendChild(l)}));let t,f=1;function b(){t&&clearTimeout(t);const r=Math.floor(Math.random()*4001)+3e3;t=setTimeout(()=>{e===o.length-1?f=-1:e===0&&(f=1),e=e+f,e<0&&(e=0),e>=o.length&&(e=o.length-1),a()},r)}function a(){const r=window.innerWidth<640,n=r?80:130,l=r?-150:-220,v=r?30:40;o.forEach((u,p)=>{const c=p-e,x=Math.abs(c);let h="",$=10-x,m=1,w="auto";c===0?(h="translate3d(0, 0, 50px) scale(1.05) rotateY(0deg)",m=1,w="auto"):c<0?(h=`translate3d(${c*n-(r?20:40)}px, 0, ${l}px) scale(0.85) rotateY(${v}deg)`,m=Math.max(.1,1-x*.35),w="none"):(h=`translate3d(${c*n+(r?20:40)}px, 0, ${l}px) scale(0.85) rotateY(${-v}deg)`,m=Math.max(.1,1-x*.35),w="none"),u.style.transform=h,u.style.zIndex=$.toString(),u.style.opacity=m.toString(),u.style.pointerEvents=w}),d&&d.querySelectorAll("button").forEach((p,c)=>{c===e?p.className="w-3.5 h-3.5 rounded-full transition-all duration-300 bg-brand-gold-secondary scale-125":p.className="w-2.5 h-2.5 rounded-full transition-all duration-300 bg-brand-brown/25 hover:bg-brand-brown/40"}),b()}g&&g.addEventListener("click",()=>{e=(e-1+o.length)%o.length,a()}),i&&i.addEventListener("click",()=>{e=(e+1)%o.length,a()}),o.forEach((r,n)=>{r.addEventListener("click",l=>{n!==e&&(l.preventDefault(),e=n,a())})}),a(),window.addEventListener("resize",a),document.addEventListener("astro:before-swap",()=>{t&&clearTimeout(t)})}y();document.addEventListener("astro:page-load",y);
