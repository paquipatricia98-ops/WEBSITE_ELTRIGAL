async function x(){const r=document.querySelector(".catalogs-pinterest-grid");if(!r)return;const t=r.dataset.locale,u=window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"?"/api/v1":r.dataset.api||"/api/v1";async function h(){const o=await fetch(`${u}/public/catalogs/featured?locale=${t}`);if(!o.ok)throw new Error("Error fetching featured catalogs");return await o.json()}try{let o=function(e){const d=e.slug?.[t]||e.slug?.es||e.slug?.en||e.id||e._id,i=t==="es"?`/es/catalogo?category=${d}`:`/en/catalog?category=${d}`,n=typeof e.image=="object"&&e.image?e.image.secureUrl||e.image.url:typeof e.image=="string"?e.image:null,m=e.name?.[t]||e.name?.es||"",c=e.description?.[t]||e.description?.es||"",f=t==="es"?"Ver catálogo completo":"View full catalog";return n?`
            <a href="${i}" class="pinterest-card w-full rounded-3xl overflow-hidden bg-brand-cream border-2 border-brand-gold/30 hover:border-brand-gold hover:shadow-lg hover:scale-[1.01] transition-all duration-300 shadow-sm p-4 text-left animate-fade-in block">
              <div class="relative overflow-hidden rounded-2xl mb-4 border border-brand-gold/15 bg-brand-cream-dark">
                <img src="${n}" alt="${m}" class="w-full h-auto object-cover rounded-xl" loading="lazy" onerror="this.onerror=null; this.src='/images/history/interior.jpg';" />
              </div>
              <div class="space-y-2">
                <h3 class="font-serif text-xl sm:text-2xl font-bold text-brand-brown">${m}</h3>
                ${c?`<p class="text-xs sm:text-sm text-brand-brown/85 leading-relaxed">${c}</p>`:""}
              </div>
              <div class="pt-4 mt-4 border-t border-brand-gold/15 flex items-center text-xs font-bold text-brand-gold-secondary">
                <span>${f} →</span>
              </div>
            </a>
          `:`
            <a href="${i}" class="pinterest-card w-full rounded-3xl overflow-hidden bg-brand-cream border-2 border-brand-gold/30 hover:border-brand-gold hover:shadow-lg hover:scale-[1.01] transition-all duration-300 shadow-sm p-5 text-left animate-fade-in block">
              <div class="w-12 h-12 rounded-2xl bg-brand-gold/15 border border-brand-gold/30 flex items-center justify-center text-brand-gold-secondary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                  <circle cx="8.5" cy="8.5" r="1.5"/>
                  <polyline points="21 15 16 10 5 21"/>
                </svg>
              </div>
              <div class="space-y-2">
                <h3 class="font-serif text-xl sm:text-2xl font-bold text-brand-brown">${m}</h3>
                ${c?`<p class="text-xs sm:text-sm text-brand-brown/85 leading-relaxed">${c}</p>`:""}
              </div>
              <div class="pt-4 mt-4 border-t border-brand-gold/15 flex items-center text-xs font-bold text-brand-gold-secondary">
                <span>${f} →</span>
              </div>
            </a>
          `};var p=o;const g=(await h()).data||[];if(g.length===0){r.className="catalogs-pinterest-grid w-full",r.innerHTML=`<div class="text-center py-12 text-brand-brown/50 w-full">${t==="es"?"No hay catálogos destacados disponibles en este momento.":"No featured catalogs available at the moment."}</div>`;return}const w=g.length,a=Math.min(w,4);let s="grid gap-6 items-start justify-center",l="max-w-7xl";a===1?(s+=" grid-cols-1",l="max-w-sm"):a===2?(s+=" grid-cols-1 sm:grid-cols-2",l="max-w-3xl"):a===3?(s+=" grid-cols-1 sm:grid-cols-2 md:grid-cols-3",l="max-w-5xl"):(s+=" grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",l="max-w-7xl"),r.className=`catalogs-pinterest-grid ${s} ${l} w-full mx-auto`;let b="";for(let e=0;e<a;e++)b+=`<div class="flex flex-col gap-6 w-full" id="cat-col-${e}"></div>`;r.innerHTML=b,g.forEach((e,d)=>{const i=d%a,n=r.querySelector(`#cat-col-${i}`);n&&(n.innerHTML+=o(e))})}catch(o){console.error(o),r.innerHTML=`<div class="text-center py-12 text-red-500 w-full">${t==="es"?"Error al cargar los catálogos.":"Error loading catalogs."}</div>`}}x();document.addEventListener("DOMContentLoaded",x);document.addEventListener("astro:page-load",x);
