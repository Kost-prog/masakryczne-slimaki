import{A as M,S,N as A,K as N,M as O,a as q,i as h}from"./assets/vendor-D4I5i0Bz.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const p of i.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&r(p)}).observe(document,{childList:!0,subtree:!0});function o(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=o(s);fetch(s.href,i)}})();window.addEventListener("resize",()=>{document.querySelectorAll(".answer").forEach(e=>{e.style.removeProperty("height")})});document.addEventListener("DOMContentLoaded",function(){new M(".accordion_list",{duration:600,showMultiple:!1,openOnInit:[0],elementClass:"accordion_item",triggerClass:"accordion_header",panelClass:"answer",activeClass:"open",collapse:!0}),document.querySelectorAll(".accordion_btn").forEach(t=>{t.addEventListener("click",o=>{o.stopPropagation(),t.closest(".accordion_header").click()})})});const f=document.querySelector(".burger"),I=document.querySelector(".nav-header"),C=document.querySelectorAll(".nav-header a");f.addEventListener("click",()=>{I.classList.toggle("active"),f.classList.toggle("active"),document.body.classList.toggle("no-scroll")});C.forEach(e=>{e.addEventListener("click",()=>{I.classList.remove("active"),f.classList.remove("active"),document.body.classList.remove("no-scroll")})});const _="/masakryczne-slimaki/assets/icons-D8zq_AyC.svg",L=[{image:"img/projects/wallet-webservice.jpg",img2x:"img/projects/wallet-webservice@2x.jpg",title:"Wallet webservice"},{image:"img/projects/green-harvest.jpg",img2x:"img/projects/green-harvest@2x.jpg",title:"Green harvest webservice"},{image:"img/projects/english-excellence.jpg",img2x:"img/projects/english-excellence@2x.jpg",title:"English Exellence website"},{image:"img/projects/power-pulse-webservice.jpg",img2x:"img/projects/power-pulse-webservice@2x.jpg",title:"power pulse webservice"},{image:"img/projects/mimino-website.jpg",img2x:"img/projects/mimino-website@2x.jpg",title:"mimino website"},{image:"img/projects/vyshyvanka-vibes.jpg",img2x:"img/projects/vyshyvanka-vibes@2x.jpg",title:"vyshyvanka vibes Landing Page"},{image:"img/projects/chego-jewelry.jpg",img2x:"img/projects/chego-jewelry@2x.jpg",title:"chego jewelry website"},{image:"img/projects/energy-flow.jpg",img2x:"img/projects/energy-flow@2x.jpg",title:"energy flow webservice"},{image:"img/projects/fruitbox-online-store.jpg",img2x:"img/projects/fruitbox-online-store@2x.jpg",title:"fruitbox online store"},{image:"img/projects/starlight-studio.jpg",img2x:"img/projects/starlight-studio@2x.jpg",title:"starlight studio landing page"}],$=document.querySelector(".js-projects-list"),P=document.querySelector(".load-more-btn");let d=0;const x=3;function D(e){return e.map(({image:t,img2x:o,title:r})=>`<li>
            <div class="pj-item-cont">
              <div class="image-cont">
                <img
                  src="${t}"
                  alt="${r}"
                  srcset="${o}"
                />
              </div>
              <div>
                <p class="body-text-light tech-text">
                  React, JavaScript, Node JS, Git
                </p>
                <div class="site-cont">
                  <h3 class="header-third">${r}</h3>
                    <a
                      href="https://github.com/Kost-prog/masakryczne-slimaki"
                      target="_blank"
                      class="body-text-medium"
                    >
                    VISIT
                    <div class="visit-arrow">
                      <svg width="18" height="18">
                        <use href="${_}#icon-visit-icon"></use>
                      </svg>
                    </div>
                    </a>
                </div>
              </div>
            </div>
          </li>`)}function B(){const e=L.slice(d,d+x),t=D(e).join("");$.insertAdjacentHTML("beforeend",t),d+=x,d>=L.length&&(P.style.display="none")}B();P.addEventListener("click",B);S.use([A,N,O]);const m=document.getElementById("prev-button"),w=document.getElementById("next-button"),E=document.querySelector(".swiper-wrapper");m.classList.add("disabled");T();async function T(){try{const{data:e}=await q.get("https://portfolio-js.b.goit.study/api/reviews");if(!e.length)throw new Error("Empty list");const t=e.map(({avatar_url:r,author:s,review:i})=>`
        <li class="swiper-slide">
          <p class="body-text-light">${i}</p>
          <div class="reviewer">
            <img
              class="reviewer-avatar"
              src="${r}"
              alt="${s}"
            />
            <p class="reviewer-name">${s}</p>
          </div>
        </li>
      `).join("");E.innerHTML=t;const o=z();m.addEventListener("click",()=>o.slidePrev()),w.addEventListener("click",()=>o.slideNext())}catch{E.innerHTML='<p class="body-text-light">Not found</p>',h.error({title:"Error",message:"Failed to load reviews",position:"topRight"})}}function z(){const e=new S(".swiper",{slidesPerView:1,spaceBetween:32,simulateTouch:!0,keyboard:{enabled:!0,onlyInViewport:!0},navigation:!1,breakpoints:{768:{slidesPerView:1},1280:{slidesPerView:2}}});return e.on("init",()=>k(e)),e.on("slideChange",()=>k(e)),e.init(),e}function k(e){const t=e.isBeginning,o=e.isEnd;m.classList.toggle("disabled",t),w.classList.toggle("disabled",o),m.setAttribute("aria-disabled",t),w.setAttribute("aria-disabled",o)}const g=document.querySelector(".wt-backdrop"),c=document.querySelector(".wt_form"),K=document.querySelector(".wt-close-btn"),l=c.elements.email,y=document.querySelector(".valid-icon"),b=document.querySelector(".error-message"),j="feedback-form-state",n={email:"",comment:""};c.addEventListener("input",R);function R(e){n[e.target.name]=e.target.value.trim(),localStorage.setItem(j,JSON.stringify(n))}const a=JSON.parse(localStorage.getItem(j));a&&(c.elements.email.value=a.email||"",c.elements.comment.value=a.comment||"",n.email=a.email||"",n.comment=a.comment||"");l.addEventListener("input",V);function V(){const e=l.value.trim();/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(e)?(y.classList.remove("invisible"),b.classList.add("invisible"),l.classList.remove("color-error")):(b.classList.remove("invisible"),y.classList.add("invisible"),l.classList.add("color-error"))}c.addEventListener("submit",J);async function J(e){e.preventDefault();try{const t=await q.post("https://portfolio-js.b.goit.study/api/requests",n);H(),c.reset(),localStorage.removeItem(j),n.email="",n.comment="",y.classList.add("invisible"),b.classList.add("invisible"),l.classList.remove("color-error");return}catch(t){t.request.status===400?h.warning({message:"Будь ласка заповніть форму",position:"topRight"}):h.error({title:"Error",message:t.request.status,position:"topRight"})}}function H(){g.classList.add("is-open"),window.addEventListener("keydown",u),document.body.classList.add("no-scroll")}function u(){g.classList.remove("is-open"),window.removeEventListener("keydown",u),document.body.classList.remove("no-scroll")}K.addEventListener("click",u);g.addEventListener("click",F);function F(e){e.target===g&&u()}document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("slider"),t=localStorage.getItem("theme")||"theme-light";v(t),e.checked=t==="theme-dark",e.addEventListener("change",()=>{e.checked?v("theme-dark"):v("theme-light")})});function v(e){localStorage.setItem("theme",e),document.documentElement.className=e}
//# sourceMappingURL=index.js.map
