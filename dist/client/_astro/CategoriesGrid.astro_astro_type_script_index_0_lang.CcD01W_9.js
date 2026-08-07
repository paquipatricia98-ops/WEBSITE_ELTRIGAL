async function v(){const l=document.querySelector(".coverflow-container");if(!l)return;const t=l.dataset.locale,u=window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"?"/api/v1":l.dataset.api||"/api/v1";async function c(){const e=await fetch(`${u}/public/categories`);if(!e.ok)throw new Error("Error fetching categories");return await e.json()}try{const i=(await c()).data||[];if(i.length===0){l.innerHTML='<div class="text-center text-brand-brown/50">No hay categorías.</div>';return}l.innerHTML=i.map(o=>{const g=`/${t}/menu?category=${o.slug?.[t]||o.slug?.es||o.id}`,s=typeof o.image=="object"&&o.image?o.image.secureUrl||o.image.url:typeof o.image=="string"?o.image:null,n=o.name?.[t]||o.name?.es||"",r=o.description?.[t]||o.description?.es||"",a=t==="es"?"Ver productos":"Browse items";return s?`
            <a href="${g}" class="coverflow-card absolute w-[260px] sm:w-[320px] h-[360px] rounded-2xl overflow-hidden shadow-warm border block transition-all duration-500 ease-out origin-center cursor-pointer bg-brand-brown border-brand-gold/30" style="will-change: transform, opacity;">
              <img src="${s}" alt="${n}" width="600" height="400" class="w-full h-full object-cover transition-all duration-500" loading="lazy" onerror="this.onerror=null; this.src='/images/history/interior.jpg';" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent p-6 flex flex-col justify-end">
                <h3 class="font-serif text-2xl font-bold text-white transition-colors">${n}</h3>
                ${r?`<p class="text-xs sm:text-sm text-brand-cream/80 line-clamp-2 mt-1">${r}</p>`:""}
                <div class="mt-3 flex items-center text-xs font-bold text-brand-gold">
                  <span>${a} →</span>
                </div>
              </div>
            </a>
          `:`
            <a href="${g}" class="coverflow-card absolute w-[260px] sm:w-[320px] h-[360px] rounded-2xl overflow-hidden shadow-warm border block transition-all duration-500 ease-out origin-center cursor-pointer bg-brand-cream border-brand-gold/45" style="will-change: transform, opacity;">
              <div class="h-full p-6 flex flex-col justify-between">
                <div class="w-12 h-12 rounded-xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center text-brand-gold-secondary">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                    <circle cx="8.5" cy="8.5" r="1.5"/>
                    <polyline points="21 15 16 10 5 21"/>
                  </svg>
                </div>
                <div class="space-y-1">
                  <h3 class="font-serif text-2xl font-bold text-brand-brown transition-colors">${n}</h3>
                  ${r?`<p class="text-xs sm:text-sm text-brand-brown/70 line-clamp-2">${r}</p>`:""}
                  <div class="pt-2 flex items-center text-xs font-bold text-brand-gold-secondary">
                    <span>${a} →</span>
                  </div>
                </div>
              </div>
            </a>
          `}).join(""),L()}catch(e){console.error(e),l.innerHTML='<div class="text-center text-red-500">Error al cargar las categorías.</div>'}}function L(){const l=document.querySelector(".coverflow-container");if(!l)return;const t=l.querySelectorAll(".coverflow-card"),w=document.querySelector(".coverflow-prev"),u=document.querySelector(".coverflow-next"),c=document.querySelector(".coverflow-dots");if(!t.length)return;let e=Math.floor(t.length/2);c&&(c.innerHTML="",t.forEach((n,r)=>{const a=document.createElement("button");a.className=`w-2.5 h-2.5 rounded-full transition-all duration-300 ${r===e?"bg-brand-gold-secondary scale-125":"bg-brand-brown/25"}`,a.setAttribute("aria-label",`Go to slide ${r+1}`),a.addEventListener("click",()=>{e=r,s()}),c.appendChild(a)}));let i,o=1;function g(){i&&clearTimeout(i);const n=Math.floor(Math.random()*4001)+3e3;i=setTimeout(()=>{e===t.length-1?o=-1:e===0&&(o=1),e=e+o,e<0&&(e=0),e>=t.length&&(e=t.length-1),s()},n)}function s(){const n=window.innerWidth<640,r=n?80:130,a=n?-150:-220,y=n?30:40;t.forEach((f,h)=>{const d=h-e,x=Math.abs(d);let b="",$=10-x,m=1,p="auto";d===0?(b="translate3d(0, 0, 50px) scale(1.05) rotateY(0deg)",m=1,p="auto"):d<0?(b=`translate3d(${d*r-(n?20:40)}px, 0, ${a}px) scale(0.85) rotateY(${y}deg)`,m=Math.max(.1,1-x*.35),p="none"):(b=`translate3d(${d*r+(n?20:40)}px, 0, ${a}px) scale(0.85) rotateY(${-y}deg)`,m=Math.max(.1,1-x*.35),p="none"),f.style.transform=b,f.style.zIndex=$.toString(),f.style.opacity=m.toString(),f.style.pointerEvents=p}),c&&c.querySelectorAll("button").forEach((h,d)=>{d===e?h.className="w-3.5 h-3.5 rounded-full transition-all duration-300 bg-brand-gold-secondary scale-125":h.className="w-2.5 h-2.5 rounded-full transition-all duration-300 bg-brand-brown/25 hover:bg-brand-brown/40"}),g()}w&&w.addEventListener("click",()=>{e=(e-1+t.length)%t.length,s()}),u&&u.addEventListener("click",()=>{e=(e+1)%t.length,s()}),t.forEach((n,r)=>{n.addEventListener("click",a=>{r!==e&&(a.preventDefault(),e=r,s())})}),s(),window.addEventListener("resize",s),document.addEventListener("astro:before-swap",()=>{i&&clearTimeout(i)})}v();document.addEventListener("DOMContentLoaded",v);document.addEventListener("astro:page-load",v);
