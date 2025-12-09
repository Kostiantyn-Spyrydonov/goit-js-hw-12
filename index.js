import{a as f,S as m,i as a}from"./assets/vendor-Cq7ZUixy.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const y="53618860-395ecb394c138c7d18d79e38c",g="https://pixabay.com/api/";function h(s){const o={key:y,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return f.get(g,{params:o}).then(i=>i.data)}const l=document.querySelector(".gallery"),u=document.querySelector(".loader");let b=new m(".gallery a",{captionsData:"alt",captionDelay:250});function v(s){const o=s.map(({webformatURL:i,largeImageURL:r,tags:e,likes:t,views:n,comments:d,downloads:p})=>`
    <li class="gallery-item">
      <a href="${r}">
        <img src="${i}" alt="${e}" />
        <div class="info">
          <div class="info-item">
            <b>Likes</b>
            <p>${t}</p>
          </div>
          <div class="info-item">
            <b>Views</b>
            <p>${n}</p>
          </div>
          <div class="info-item">
            <b>Comments</b>
            <p>${d}</p>
          </div>
          <div class="info-item">
            <b>Downloads</b>
            <p>${p}</p>
          </div>
        </div>
      </a>
    </li>
  `).join("");l.insertAdjacentHTML("beforeend",o),b.refresh()}function L(){l.innerHTML=""}function S(){u.style.display="block"}function c(){u.style.display="none"}const q=document.querySelector(".form");q.addEventListener("submit",s=>{s.preventDefault();const i=s.target.elements["search-text"].value.trim();if(i===""){a.warning({title:"Warning",message:"Please enter a search query!",position:"topRight"});return}L(),S(),h(i).then(r=>{if(c(),r.hits.length===0){a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}v(r.hits)}).catch(r=>{c(),a.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"}),console.error(r)})});
//# sourceMappingURL=index.js.map
