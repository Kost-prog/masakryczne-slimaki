import{A as b,a as L}from"./assets/vendor-BFiJAGA_.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function c(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=c(e);fetch(e.href,o)}})();document.addEventListener("DOMContentLoaded",function(){new b(".accordion_list",{duration:600,showMultiple:!1,openOnInit:[0],elementClass:"accordion_item",triggerClass:"accordion_header",panelClass:"answer",activeClass:"open",collapse:!0}),document.querySelectorAll(".accordion_btn").forEach(s=>{s.addEventListener("click",c=>{c.stopPropagation(),s.closest(".accordion_header").click()})})});const g=document.querySelector(".burger"),y=document.querySelector(".nav-header"),h=document.querySelectorAll(".nav-header a");g.addEventListener("click",()=>{y.classList.toggle("active"),g.classList.toggle("active"),document.body.classList.toggle("no-scroll")});h.forEach(t=>{t.addEventListener("click",()=>{y.classList.remove("active"),g.classList.remove("active"),document.body.classList.remove("no-scroll")})});const j=[{image:"../img/projects/power-pulse-webservice.jpg",img2x:"../img/projects/power-pulse-webservice@2x.jpg",title:"power pulse webservice"},{image:"../img/projects/mimino-website.jpg",img2x:"../img/projects/mimino-website@2x.jpg",title:"mimino website"},{image:"../img/projects/vyshyvanka-vibes.jpg",img2x:"../img/projects/vyshyvanka-vibes@2x.jpg",title:"vyshyvanka vibes Landing Page"},{image:"../img/projects/chego-jewelry.jpg",img2x:"../img/projects/chego-jewelry@2x.jpg",title:"chego jewelry website"},{image:"../img/projects/energy-flow.jpg",img2x:"../img/projects/energy-flow@2x.jpg",title:"energy flow webservice"},{image:"../img/projects/fruitbox-online-store.jpg",img2x:"../img/projects/fruitbox-online-store@2x.jpg",title:"fruitbox online store"},{image:"../img/projects/starlight-studio.jpg",img2x:"../img/projects/starlight-studio@2x.jpg",title:"starlight studio landing page"}],w=document.querySelector(".js-projects-list");function x(t){const s=t.map(({image:c,img2x:n,title:e})=>`<li>
            <div class="pj-item-cont">
              <div class="image-cont">
                <img
                  src="${c}"
                  alt="${e}"
                  srcset="${n}"
                />
              </div>
              <div>
                <p class="body-text-light tech-text">
                  React, JavaScript, Node JS, Git
                </p>
                <div class="site-cont">
                  <h3 class="header-third">${e}</h3>
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
          </li>`).join("");w.insertAdjacentHTML("beforeend",s)}console.log(x(j));const d=document.querySelector(".wt-backdrop"),r=document.querySelector(".wt_form"),S=document.querySelector(".wt-close-btn"),l=r.elements.email,p=document.querySelector(".valid-icon"),v=document.querySelector(".error-message"),f="feedback-form-state",i={email:"",comment:""};r.addEventListener("input",E);function E(t){i[t.target.name]=t.target.value.trim(),localStorage.setItem(f,JSON.stringify(i))}const a=JSON.parse(localStorage.getItem(f));a&&(r.elements.email.value=a.email||"",r.elements.comment.value=a.comment||"",i.email=a.email||"",i.comment=a.comment||"");l.addEventListener("input",k);function k(){const t=l.value.trim();/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(t)?(p.classList.remove("invisible"),v.classList.add("invisible"),l.classList.remove("color-error")):(v.classList.remove("invisible"),p.classList.add("invisible"),l.classList.add("color-error"))}r.addEventListener("submit",q);async function q(t){t.preventDefault();try{const s=await L.post("https://portfolio-js.b.goit.study/api/requests",i);O(),r.reset(),localStorage.removeItem(f),i.email="",i.comment="",p.classList.add("invisible"),v.classList.add("invisible"),l.classList.remove("color-error");return}catch(s){s.request.status===400?alert("Будь ласка заповніть форму"):alert(`Error ${s.request.status}`)}}function O(){d.classList.add("is-open"),window.addEventListener("keydown",m),document.body.classList.add("no-scroll")}function m(){d.classList.remove("is-open"),window.removeEventListener("keydown",m),document.body.classList.remove("no-scroll")}S.addEventListener("click",m);d.addEventListener("click",A);function A(t){t.target===d&&m()}
//# sourceMappingURL=index.js.map
