async function y(){const l=document.querySelector(".coverflow-container");if(!l)return;const o=l.dataset.locale,g=window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"?"/api/v1":l.dataset.api||"/api/v1";async function c(){const e=await fetch(`${g}/public/categories`);if(!e.ok)throw new Error("Error fetching categories");return await e.json()}try{const i=(await c()).data||[];if(i.length===0){l.innerHTML='<div class="text-center text-brand-brown/50">No hay categorías.</div>';return}l.innerHTML=i.map(t=>{const h=t.slug?.[o]||t.slug?.es||t.slug?.en||t.id,s=o==="es"?`/es/catalogo?category=${h}`:`/en/catalog?category=${h}`,r=typeof t.image=="object"&&t.image?t.image.secureUrl||t.image.url:typeof t.image=="string"?t.image:null,a=t.name?.[o]||t.name?.es||"",n=t.description?.[o]||t.description?.es||"",f=o==="es"?"Ver productos":"Browse items";return r?`
            <a href="${s}" class="coverflow-card absolute w-[260px] sm:w-[320px] h-[360px] rounded-2xl overflow-hidden shadow-warm border block transition-all duration-500 ease-out origin-center cursor-pointer bg-brand-brown border-brand-gold/30" style="will-change: transform, opacity;">
              <img src="${r}" alt="${a}" width="600" height="400" class="w-full h-full object-cover transition-all duration-500" loading="lazy" onerror="this.onerror=null; this.src='/images/history/interior.jpg';" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent p-6 flex flex-col justify-end">
                <h3 class="font-serif text-2xl font-bold text-white transition-colors">${a}</h3>
                ${n?`<p class="text-xs sm:text-sm text-brand-cream/80 line-clamp-2 mt-1">${n}</p>`:""}
                <div class="mt-3 flex items-center text-xs font-bold text-brand-gold">
                  <span>${f} →</span>
                </div>
              </div>
            </a>
          `:`
            <a href="${s}" class="coverflow-card absolute w-[260px] sm:w-[320px] h-[360px] rounded-2xl overflow-hidden shadow-warm border block transition-all duration-500 ease-out origin-center cursor-pointer bg-brand-cream border-brand-gold/45" style="will-change: transform, opacity;">
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
                  ${n?`<p class="text-xs sm:text-sm text-brand-brown/70 line-clamp-2">${n}</p>`:""}
                  <div class="pt-2 flex items-center text-xs font-bold text-brand-gold-secondary">
                    <span>${f} →</span>
                  </div>
                </div>
              </div>
            </a>
          `}).join(""),L()}catch(e){console.error(e),l.innerHTML='<div class="text-center text-red-500">Error al cargar las categorías.</div>'}}function L(){const l=document.querySelector(".coverflow-container");if(!l)return;const o=l.querySelectorAll(".coverflow-card"),x=document.querySelector(".coverflow-prev"),g=document.querySelector(".coverflow-next"),c=document.querySelector(".coverflow-dots");if(!o.length)return;let e=Math.floor(o.length/2);c&&(c.innerHTML="",o.forEach((r,a)=>{const n=document.createElement("button");n.className=`w-2.5 h-2.5 rounded-full transition-all duration-300 ${a===e?"bg-brand-gold-secondary scale-125":"bg-brand-brown/25"}`,n.setAttribute("aria-label",`Go to slide ${a+1}`),n.addEventListener("click",()=>{e=a,s()}),c.appendChild(n)}));let i,t=1;function h(){i&&clearTimeout(i);const r=Math.floor(Math.random()*4001)+3e3;i=setTimeout(()=>{e===o.length-1?t=-1:e===0&&(t=1),e=e+t,e<0&&(e=0),e>=o.length&&(e=o.length-1),s()},r)}function s(){const r=window.innerWidth<640,a=r?80:130,n=r?-150:-220,f=r?30:40;o.forEach((u,b)=>{const d=b-e,v=Math.abs(d);let m="",$=10-v,p=1,w="auto";d===0?(m="translate3d(0, 0, 50px) scale(1.05) rotateY(0deg)",p=1,w="auto"):d<0?(m=`translate3d(${d*a-(r?20:40)}px, 0, ${n}px) scale(0.85) rotateY(${f}deg)`,p=Math.max(.1,1-v*.35),w="none"):(m=`translate3d(${d*a+(r?20:40)}px, 0, ${n}px) scale(0.85) rotateY(${-f}deg)`,p=Math.max(.1,1-v*.35),w="none"),u.style.transform=m,u.style.zIndex=$.toString(),u.style.opacity=p.toString(),u.style.pointerEvents=w}),c&&c.querySelectorAll("button").forEach((b,d)=>{d===e?b.className="w-3.5 h-3.5 rounded-full transition-all duration-300 bg-brand-gold-secondary scale-125":b.className="w-2.5 h-2.5 rounded-full transition-all duration-300 bg-brand-brown/25 hover:bg-brand-brown/40"}),h()}x&&x.addEventListener("click",()=>{e=(e-1+o.length)%o.length,s()}),g&&g.addEventListener("click",()=>{e=(e+1)%o.length,s()}),o.forEach((r,a)=>{r.addEventListener("click",n=>{a!==e&&(n.preventDefault(),e=a,s())})}),s(),window.addEventListener("resize",s),document.addEventListener("astro:before-swap",()=>{i&&clearTimeout(i)})}y();document.addEventListener("DOMContentLoaded",y);document.addEventListener("astro:page-load",y);
