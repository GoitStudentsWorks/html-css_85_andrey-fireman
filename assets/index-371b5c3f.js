(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();(()=>{const r={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};r.openModalBtn.addEventListener("click",t),r.closeModalBtn.addEventListener("click",t);function t(){r.modal.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}})();(()=>{const r={openMobylBtn:document.querySelector("[data-mobyl-open]"),closeMobylBtn:document.querySelector("[data-mobyl-close]"),mobyl:document.querySelector("[data-mobyl]")};r.openMobylBtn.addEventListener("click",t),r.closeMobylBtn.addEventListener("click",t);function t(){r.mobyl.classList.toggle("is-hidden")}})();let s=document.querySelectorAll(".card-input");s.length>0&&s.forEach(r=>{r.addEventListener("input",function(t){var n=t.target.value;n=n.replace(/\D/g,""),n=n.substring(0,16),n=n.replace(/(\d{4})/g,"$1 ").trim(),t.target.value=n})});new Swiper(".heroSwiper",{slidesPerView:1,spaceBetween:10,loop:!0,keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},navigation:{nextEl:".swiper-right",prevEl:".swiper-left"},on:{slideChange(){let r=document.querySelector(".hero-current-swiper-slide"),t=document.querySelector(".hero-total-swiper-slides"),n=this.slides.length,l=this.realIndex+1,e=l<=10?"0":"",o=n<=10?"0":"";r.innerHTML=e.toString()+l.toString(),t.innerHTML=o.toString()+n.toString()}}});
