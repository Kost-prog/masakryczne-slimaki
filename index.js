import{A as b,a as L}from"./assets/vendor-BFiJAGA_.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const g of s.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&n(g)}).observe(document,{childList:!0,subtree:!0});function c(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(t){if(t.ep)return;t.ep=!0;const s=c(t);fetch(t.href,s)}})();document.addEventListener("DOMContentLoaded",function(){new b(".accordion_list",{duration:600,showMultiple:!1,openOnInit:[0],elementClass:"accordion_item",triggerClass:"accordion_header",panelClass:"answer",activeClass:"open",collapse:!0}),document.querySelectorAll(".accordion_btn").forEach(o=>{o.addEventListener("click",c=>{c.stopPropagation(),o.closest(".accordion_header").click()})})});const p=document.querySelector(".burger"),y=document.querySelector(".nav-header"),j=document.querySelectorAll(".nav-header a");p.addEventListener("click",()=>{y.classList.toggle("active"),p.classList.toggle("active"),document.body.classList.toggle("no-scroll")});j.forEach(e=>{e.addEventListener("click",()=>{y.classList.remove("active"),p.classList.remove("active"),document.body.classList.remove("no-scroll")})});const w=[{image:"../img/projects/power-pulse-webservice.jpg",img2x:"../img/projects/power-pulse-webservice@2x.jpg",title:"power pulse webservice"},{image:"../img/projects/mimino-website.jpg",img2x:"../img/projects/mimino-website@2x.jpg",title:"mimino website"},{image:"../img/projects/vyshyvanka-vibes.jpg",img2x:"../img/projects/vyshyvanka-vibes@2x.jpg",title:"vyshyvanka vibes Landing Page"},{image:"../img/projects/chego-jewelry.jpg",img2x:"../img/projects/chego-jewelry@2x.jpg",title:"chego jewelry website"},{image:"../img/projects/energy-flow.jpg",img2x:"../img/projects/energy-flow@2x.jpg",title:"energy flow webservice"},{image:"../img/projects/fruitbox-online-store.jpg",img2x:"../img/projects/fruitbox-online-store@2x.jpg",title:"fruitbox online store"},{image:"../img/projects/starlight-studio.jpg",img2x:"../img/projects/starlight-studio@2x.jpg",title:"starlight studio landing page"}],S=document.querySelector(".js-projects-list");function x(e){const o=e.map(({image:c,img2x:n,title:t})=>`<li>
            <div class="pj-item-cont">
              <div class="image-cont">
                <img
                  src="${c}"
                  alt="${t}"
                  srcset="${n}"
                />
              </div>
              <div>
                <p class="body-text-light tech-text">
                  React, JavaScript, Node JS, Git
                </p>
                <div class="site-cont">
                  <h3 class="header-third">${t}</h3>
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
          </li>`).join("");S.insertAdjacentHTML("beforeend",o)}console.log(x(w));const d=document.querySelector(".wt-backdrop"),r=document.querySelector(".wt_form"),E=document.querySelector(".wt-close-btn"),l=r.elements.email,v=document.querySelector(".valid-icon"),f=document.querySelector(".error-message"),h="feedback-form-state",i={email:"",comment:""};r.addEventListener("input",k);function k(e){i[e.target.name]=e.target.value.trim(),localStorage.setItem(h,JSON.stringify(i))}const a=JSON.parse(localStorage.getItem(h));a&&(r.elements.email.value=a.email||"",r.elements.comment.value=a.comment||"",i.email=a.email||"",i.comment=a.comment||"");l.addEventListener("input",q);function q(){const e=l.value.trim();/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(e)?(v.classList.remove("invisible"),f.classList.add("invisible"),l.classList.remove("color-error")):(f.classList.remove("invisible"),v.classList.add("invisible"),l.classList.add("color-error"))}r.addEventListener("submit",I);async function I(e){e.preventDefault();try{const o=await L.post("https://portfolio-js.b.goit.study/api/requests",i);O(),r.reset(),localStorage.removeItem(h),i.email="",i.comment="",v.classList.add("invisible"),f.classList.add("invisible"),l.classList.remove("color-error");return}catch(o){o.request.status===400?alert("Будь ласка заповніть форму"):alert(`Error ${o.request.status}`)}}function O(){d.classList.add("is-open"),window.addEventListener("keydown",m),document.body.classList.add("no-scroll")}function m(){d.classList.remove("is-open"),window.removeEventListener("keydown",m),document.body.classList.remove("no-scroll")}E.addEventListener("click",m);d.addEventListener("click",A);function A(e){e.target===d&&m()}document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("slider"),o=localStorage.getItem("theme")||"theme-light";u(o),e.checked=o==="theme-dark",e.addEventListener("change",()=>{e.checked?u("theme-dark"):u("theme-light")})});function u(e){localStorage.setItem("theme",e),document.documentElement.className=e}
//# sourceMappingURL=index.js.map
