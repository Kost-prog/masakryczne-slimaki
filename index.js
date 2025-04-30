import{A as x,a as j,i as S,S as k}from"./assets/vendor-DFWyYi6R.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const g of i.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&r(g)}).observe(document,{childList:!0,subtree:!0});function o(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=o(s);fetch(s.href,i)}})();document.addEventListener("DOMContentLoaded",function(){new x(".accordion_list",{duration:600,showMultiple:!1,openOnInit:[0],elementClass:"accordion_item",triggerClass:"accordion_header",panelClass:"answer",activeClass:"open",collapse:!0}),document.querySelectorAll(".accordion_btn").forEach(t=>{t.addEventListener("click",o=>{o.stopPropagation(),t.closest(".accordion_header").click()})})});const v=document.querySelector(".burger"),E=document.querySelector(".nav-header"),q=document.querySelectorAll(".nav-header a");v.addEventListener("click",()=>{E.classList.toggle("active"),v.classList.toggle("active"),document.body.classList.toggle("no-scroll")});q.forEach(e=>{e.addEventListener("click",()=>{E.classList.remove("active"),v.classList.remove("active"),document.body.classList.remove("no-scroll")})});const I=[{image:"../img/projects/power-pulse-webservice.jpg",img2x:"../img/projects/power-pulse-webservice@2x.jpg",title:"power pulse webservice"},{image:"../img/projects/mimino-website.jpg",img2x:"../img/projects/mimino-website@2x.jpg",title:"mimino website"},{image:"../img/projects/vyshyvanka-vibes.jpg",img2x:"../img/projects/vyshyvanka-vibes@2x.jpg",title:"vyshyvanka vibes Landing Page"},{image:"../img/projects/chego-jewelry.jpg",img2x:"../img/projects/chego-jewelry@2x.jpg",title:"chego jewelry website"},{image:"../img/projects/energy-flow.jpg",img2x:"../img/projects/energy-flow@2x.jpg",title:"energy flow webservice"},{image:"../img/projects/fruitbox-online-store.jpg",img2x:"../img/projects/fruitbox-online-store@2x.jpg",title:"fruitbox online store"},{image:"../img/projects/starlight-studio.jpg",img2x:"../img/projects/starlight-studio@2x.jpg",title:"starlight studio landing page"}],B=document.querySelector(".js-projects-list");function P(e){const t=e.map(({image:o,img2x:r,title:s})=>`<li>
            <div class="pj-item-cont">
              <div class="image-cont">
                <img
                  src="${o}"
                  alt="${s}"
                  srcset="${r}"
                />
              </div>
              <div>
                <p class="body-text-light tech-text">
                  React, JavaScript, Node JS, Git
                </p>
                <div class="site-cont">
                  <h3 class="header-third">${s}</h3>
                  <button class="body-text-medium" type="button">
                    VISIT
                    <div class="visit-arrow">
                      <svg width="18" height="18">
                        <use href="../img/icon/icons.svg#icon-visit-icon"></use>
                      </svg>
                    </div>
                    <a
                      href="https://github.com/Kost-prog/masakryczne-slimaki"
                      target="_blank"
                    ></a>
                  </button>
                </div>
              </div>
            </div>
          </li>`).join("");B.insertAdjacentHTML("beforeend",t)}console.log(P(I));const d=document.getElementById("prev-button"),f=document.getElementById("next-button"),w=document.querySelector(".swiper-wrapper");d.classList.add("disabled");A();async function A(){try{const{data:e}=await j.get("https://portfolio-js.b.goit.study/api/reviews");if(!e.length)throw new Error("Empty list");const t=e.map(({avatar_url:r,author:s,review:i})=>`
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
      `).join("");w.innerHTML=t;const o=M();d.addEventListener("click",()=>o.slidePrev()),f.addEventListener("click",()=>o.slideNext())}catch{w.innerHTML='<p class="body-text-light">Not found</p>',S.error({title:"Error",message:"Failed to load reviews",position:"topRight"})}}function M(){const e=new k(".swiper",{slidesPerView:1,spaceBetween:32,simulateTouch:!0,keyboard:{enabled:!0,onlyInViewport:!0},navigation:!1,breakpoints:{768:{slidesPerView:1},1280:{slidesPerView:2}}});return e.on("init",()=>L(e)),e.on("slideChange",()=>L(e)),e.init(),e}function L(e){const t=e.isBeginning,o=e.isEnd;d.classList.toggle("disabled",t),f.classList.toggle("disabled",o),d.setAttribute("aria-disabled",t),f.setAttribute("aria-disabled",o)}const m=document.querySelector(".wt-backdrop"),c=document.querySelector(".wt_form"),O=document.querySelector(".wt-close-btn"),l=c.elements.email,h=document.querySelector(".valid-icon"),b=document.querySelector(".error-message"),y="feedback-form-state",n={email:"",comment:""};c.addEventListener("input",$);function $(e){n[e.target.name]=e.target.value.trim(),localStorage.setItem(y,JSON.stringify(n))}const a=JSON.parse(localStorage.getItem(y));a&&(c.elements.email.value=a.email||"",c.elements.comment.value=a.comment||"",n.email=a.email||"",n.comment=a.comment||"");l.addEventListener("input",_);function _(){const e=l.value.trim();/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(e)?(h.classList.remove("invisible"),b.classList.add("invisible"),l.classList.remove("color-error")):(b.classList.remove("invisible"),h.classList.add("invisible"),l.classList.add("color-error"))}c.addEventListener("submit",C);async function C(e){e.preventDefault();try{const t=await j.post("https://portfolio-js.b.goit.study/api/requests",n);N(),c.reset(),localStorage.removeItem(y),n.email="",n.comment="",h.classList.add("invisible"),b.classList.add("invisible"),l.classList.remove("color-error");return}catch(t){t.request.status===400?alert("Будь ласка заповніть форму"):alert(`Error ${t.request.status}`)}}function N(){m.classList.add("is-open"),window.addEventListener("keydown",u),document.body.classList.add("no-scroll")}function u(){m.classList.remove("is-open"),window.removeEventListener("keydown",u),document.body.classList.remove("no-scroll")}O.addEventListener("click",u);m.addEventListener("click",T);function T(e){e.target===m&&u()}document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("slider"),t=localStorage.getItem("theme")||"theme-light";p(t),e.checked=t==="theme-dark",e.addEventListener("change",()=>{e.checked?p("theme-dark"):p("theme-light")})});function p(e){localStorage.setItem("theme",e),document.documentElement.className=e}
//# sourceMappingURL=index.js.map
