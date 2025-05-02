import{A as B,a as S,i as h,S as A}from"./assets/vendor-DFWyYi6R.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const u of i.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function o(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=o(s);fetch(s.href,i)}})();window.addEventListener("resize",()=>{document.querySelectorAll(".answer").forEach(e=>{e.style.removeProperty("height")})});document.addEventListener("DOMContentLoaded",function(){new B(".accordion_list",{duration:600,showMultiple:!1,openOnInit:[0],elementClass:"accordion_item",triggerClass:"accordion_header",panelClass:"answer",activeClass:"open",collapse:!0}),document.querySelectorAll(".accordion_btn").forEach(t=>{t.addEventListener("click",o=>{o.stopPropagation(),t.closest(".accordion_header").click()})})});const f=document.querySelector(".burger"),q=document.querySelector(".nav-header"),M=document.querySelectorAll(".nav-header a");f.addEventListener("click",()=>{q.classList.toggle("active"),f.classList.toggle("active"),document.body.classList.toggle("no-scroll")});M.forEach(e=>{e.addEventListener("click",()=>{q.classList.remove("active"),f.classList.remove("active"),document.body.classList.remove("no-scroll")})});const O="/masakryczne-slimaki/assets/icons-D8zq_AyC.svg",L=[{image:"img/projects/wallet-webservice.jpg",img2x:"img/projects/wallet-webservice@2x.jpg",title:"Wallet webservice"},{image:"img/projects/green-harvest.jpg",img2x:"img/projects/green-harvest@2x.jpg",title:"Green harvest webservice"},{image:"img/projects/english-excellence.jpg",img2x:"img/projects/english-excellence@2x.jpg",title:"English Exellence website"},{image:"img/projects/power-pulse-webservice.jpg",img2x:"img/projects/power-pulse-webservice@2x.jpg",title:"power pulse webservice"},{image:"img/projects/mimino-website.jpg",img2x:"img/projects/mimino-website@2x.jpg",title:"mimino website"},{image:"img/projects/vyshyvanka-vibes.jpg",img2x:"img/projects/vyshyvanka-vibes@2x.jpg",title:"vyshyvanka vibes Landing Page"},{image:"img/projects/chego-jewelry.jpg",img2x:"img/projects/chego-jewelry@2x.jpg",title:"chego jewelry website"},{image:"img/projects/energy-flow.jpg",img2x:"img/projects/energy-flow@2x.jpg",title:"energy flow webservice"},{image:"img/projects/fruitbox-online-store.jpg",img2x:"img/projects/fruitbox-online-store@2x.jpg",title:"fruitbox online store"},{image:"img/projects/starlight-studio.jpg",img2x:"img/projects/starlight-studio@2x.jpg",title:"starlight studio landing page"}],C=document.querySelector(".js-projects-list"),I=document.querySelector(".load-more-btn");let d=0;const x=3;function _(e){return e.map(({image:t,img2x:o,title:r})=>`<li>
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
                        <use href="${O}#icon-visit-icon"></use>
                      </svg>
                    </div>
                    </a>
                </div>
              </div>
            </div>
          </li>`)}function P(){const e=L.slice(d,d+x),t=_(e).join("");C.insertAdjacentHTML("beforeend",t),d+=x,d>=L.length&&(I.style.display="none")}P();I.addEventListener("click",P);const m=document.getElementById("prev-button"),w=document.getElementById("next-button"),E=document.querySelector(".swiper-wrapper");m.classList.add("disabled");$();async function $(){try{const{data:e}=await S.get("https://portfolio-js.b.goit.study/api/reviews");if(!e.length)throw new Error("Empty list");const t=e.map(({avatar_url:r,author:s,review:i})=>`
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
      `).join("");E.innerHTML=t;const o=N();m.addEventListener("click",()=>o.slidePrev()),w.addEventListener("click",()=>o.slideNext())}catch{E.innerHTML='<p class="body-text-light">Not found</p>',h.error({title:"Error",message:"Failed to load reviews",position:"topRight"})}}function N(){const e=new A(".swiper",{slidesPerView:1,spaceBetween:32,simulateTouch:!0,keyboard:{enabled:!0,onlyInViewport:!0},navigation:!1,breakpoints:{768:{slidesPerView:1},1280:{slidesPerView:2}}});return e.on("init",()=>k(e)),e.on("slideChange",()=>k(e)),e.init(),e}function k(e){const t=e.isBeginning,o=e.isEnd;m.classList.toggle("disabled",t),w.classList.toggle("disabled",o),m.setAttribute("aria-disabled",t),w.setAttribute("aria-disabled",o)}const g=document.querySelector(".wt-backdrop"),c=document.querySelector(".wt_form"),D=document.querySelector(".wt-close-btn"),l=c.elements.email,y=document.querySelector(".valid-icon"),b=document.querySelector(".error-message"),j="feedback-form-state",n={email:"",comment:""};c.addEventListener("input",T);function T(e){n[e.target.name]=e.target.value.trim(),localStorage.setItem(j,JSON.stringify(n))}const a=JSON.parse(localStorage.getItem(j));a&&(c.elements.email.value=a.email||"",c.elements.comment.value=a.comment||"",n.email=a.email||"",n.comment=a.comment||"");l.addEventListener("input",z);function z(){const e=l.value.trim();/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(e)?(y.classList.remove("invisible"),b.classList.add("invisible"),l.classList.remove("color-error")):(b.classList.remove("invisible"),y.classList.add("invisible"),l.classList.add("color-error"))}c.addEventListener("submit",R);async function R(e){e.preventDefault();try{const t=await S.post("https://portfolio-js.b.goit.study/api/requests",n);V(),c.reset(),localStorage.removeItem(j),n.email="",n.comment="",y.classList.add("invisible"),b.classList.add("invisible"),l.classList.remove("color-error");return}catch(t){t.request.status===400?h.warning({message:"Будь ласка заповніть форму",position:"topRight"}):h.error({title:"Error",message:t.request.status,position:"topRight"})}}function V(){g.classList.add("is-open"),window.addEventListener("keydown",p),document.body.classList.add("no-scroll")}function p(){g.classList.remove("is-open"),window.removeEventListener("keydown",p),document.body.classList.remove("no-scroll")}D.addEventListener("click",p);g.addEventListener("click",J);function J(e){e.target===g&&p()}document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("slider"),t=localStorage.getItem("theme")||"theme-light";v(t),e.checked=t==="theme-dark",e.addEventListener("change",()=>{e.checked?v("theme-dark"):v("theme-light")})});function v(e){localStorage.setItem("theme",e),document.documentElement.className=e}
//# sourceMappingURL=index.js.map
