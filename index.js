import{A as B,a as S,i as f,S as M}from"./assets/vendor-DFWyYi6R.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const u of i.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&o(u)}).observe(document,{childList:!0,subtree:!0});function r(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(s){if(s.ep)return;s.ep=!0;const i=r(s);fetch(s.href,i)}})();document.addEventListener("DOMContentLoaded",function(){new B(".accordion_list",{duration:600,showMultiple:!1,openOnInit:[0],elementClass:"accordion_item",triggerClass:"accordion_header",panelClass:"answer",activeClass:"open",collapse:!0}),document.querySelectorAll(".accordion_btn").forEach(t=>{t.addEventListener("click",r=>{r.stopPropagation(),t.closest(".accordion_header").click()})})});const h=document.querySelector(".burger"),q=document.querySelector(".nav-header"),O=document.querySelectorAll(".nav-header a");h.addEventListener("click",()=>{q.classList.toggle("active"),h.classList.toggle("active"),document.body.classList.toggle("no-scroll")});O.forEach(e=>{e.addEventListener("click",()=>{q.classList.remove("active"),h.classList.remove("active"),document.body.classList.remove("no-scroll")})});const L=[{image:"/src/img/projects/wallet-webservice.jpg",img2x:"/src/img/projects/wallet-webservice@2x.jpg",title:"Wallet webservice"},{image:"/src/img/projects/green-harvest.jpg",img2x:"/src/img/projects/green-harvest@2x.jpg",title:"Green harvest webservice"},{image:"/src/img/projects/english-excellence.jpg",img2x:"/src/img/projects/english-excellence@2x.jpg",title:"English Exellence website"},{image:"/src/img/projects/power-pulse-webservice.jpg",img2x:"/src/img/projects/power-pulse-webservice@2x.jpg",title:"power pulse webservice"},{image:"/src/img/projects/mimino-website.jpg",img2x:"/src/img/projects/mimino-website@2x.jpg",title:"mimino website"},{image:"/src/img/projects/vyshyvanka-vibes.jpg",img2x:"/src/img/projects/vyshyvanka-vibes@2x.jpg",title:"vyshyvanka vibes Landing Page"},{image:"/src/img/projects/chego-jewelry.jpg",img2x:"/src/img/projects/chego-jewelry@2x.jpg",title:"chego jewelry website"},{image:"/src/img/projects/energy-flow.jpg",img2x:"/src/img/projects/energy-flow@2x.jpg",title:"energy flow webservice"},{image:"/src/img/projects/fruitbox-online-store.jpg",img2x:"/src/img/projects/fruitbox-online-store@2x.jpg",title:"fruitbox online store"},{image:"/src/img/projects/starlight-studio.jpg",img2x:"/src/img/projects/starlight-studio@2x.jpg",title:"starlight studio landing page"}],A=document.querySelector(".js-projects-list"),I=document.querySelector(".load-more-btn");let d=0;const x=3;function C(e){return e.map(({image:t,img2x:r,title:o})=>`<li>
            <div class="pj-item-cont">
              <div class="image-cont">
                <img
                  src="${t}"
                  alt="${o}"
                  srcset="${r}"
                />
              </div>
              <div>
                <p class="body-text-light tech-text">
                  React, JavaScript, Node JS, Git
                </p>
                <div class="site-cont">
                  <h3 class="header-third">${o}</h3>
                    <a
                      href="https://github.com/Kost-prog/masakryczne-slimaki"
                      target="_blank"
                      class="body-text-medium"
                    >
                    VISIT
                    <div class="visit-arrow">
                      <svg width="18" height="18">
                        <use href="/src/img/icon/icons.svg#icon-visit-icon"></use>
                      </svg>
                    </div>
                    </a>
                </div>
              </div>
            </div>
          </li>`)}function P(){const e=L.slice(d,d+x),t=C(e).join("");A.insertAdjacentHTML("beforeend",t),d+=x,d>=L.length&&(I.style.display="none")}P();I.addEventListener("click",P);const m=document.getElementById("prev-button"),w=document.getElementById("next-button"),E=document.querySelector(".swiper-wrapper");m.classList.add("disabled");N();async function N(){try{const{data:e}=await S.get("https://portfolio-js.b.goit.study/api/reviews");if(!e.length)throw new Error("Empty list");const t=e.map(({avatar_url:o,author:s,review:i})=>`
        <li class="swiper-slide">
          <p class="body-text-light">${i}</p>
          <div class="reviewer">
            <img
              class="reviewer-avatar"
              src="${o}"
              alt="${s}"
            />
            <p class="reviewer-name">${s}</p>
          </div>
        </li>
      `).join("");E.innerHTML=t;const r=_();m.addEventListener("click",()=>r.slidePrev()),w.addEventListener("click",()=>r.slideNext())}catch{E.innerHTML='<p class="body-text-light">Not found</p>',f.error({title:"Error",message:"Failed to load reviews",position:"topRight"})}}function _(){const e=new M(".swiper",{slidesPerView:1,spaceBetween:32,simulateTouch:!0,keyboard:{enabled:!0,onlyInViewport:!0},navigation:!1,breakpoints:{768:{slidesPerView:1},1280:{slidesPerView:2}}});return e.on("init",()=>k(e)),e.on("slideChange",()=>k(e)),e.init(),e}function k(e){const t=e.isBeginning,r=e.isEnd;m.classList.toggle("disabled",t),w.classList.toggle("disabled",r),m.setAttribute("aria-disabled",t),w.setAttribute("aria-disabled",r)}const g=document.querySelector(".wt-backdrop"),c=document.querySelector(".wt_form"),$=document.querySelector(".wt-close-btn"),l=c.elements.email,b=document.querySelector(".valid-icon"),y=document.querySelector(".error-message"),j="feedback-form-state",n={email:"",comment:""};c.addEventListener("input",T);function T(e){n[e.target.name]=e.target.value.trim(),localStorage.setItem(j,JSON.stringify(n))}const a=JSON.parse(localStorage.getItem(j));a&&(c.elements.email.value=a.email||"",c.elements.comment.value=a.comment||"",n.email=a.email||"",n.comment=a.comment||"");l.addEventListener("input",D);function D(){const e=l.value.trim();/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(e)?(b.classList.remove("invisible"),y.classList.add("invisible"),l.classList.remove("color-error")):(y.classList.remove("invisible"),b.classList.add("invisible"),l.classList.add("color-error"))}c.addEventListener("submit",R);async function R(e){e.preventDefault();try{const t=await S.post("https://portfolio-js.b.goit.study/api/requests",n);V(),c.reset(),localStorage.removeItem(j),n.email="",n.comment="",b.classList.add("invisible"),y.classList.add("invisible"),l.classList.remove("color-error");return}catch(t){t.request.status===400?f.warning({message:"Будь ласка заповніть форму",position:"topRight"}):f.error({title:"Error",message:t.request.status,position:"topRight"})}}function V(){g.classList.add("is-open"),window.addEventListener("keydown",p),document.body.classList.add("no-scroll")}function p(){g.classList.remove("is-open"),window.removeEventListener("keydown",p),document.body.classList.remove("no-scroll")}$.addEventListener("click",p);g.addEventListener("click",z);function z(e){e.target===g&&p()}document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("slider"),t=localStorage.getItem("theme")||"theme-light";v(t),e.checked=t==="theme-dark",e.addEventListener("change",()=>{e.checked?v("theme-dark"):v("theme-light")})});function v(e){localStorage.setItem("theme",e),document.documentElement.className=e}
//# sourceMappingURL=index.js.map
