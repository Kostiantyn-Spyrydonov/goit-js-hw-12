import{a as S,S as q,i as c}from"./assets/vendor-DvfmeZXB.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const P="53618860-395ecb394c138c7d18d79e38c",B="https://pixabay.com/api/";async function m(t,i=1){const n={key:P,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:i,per_page:15};return(await S.get(B,{params:n})).data}const y=document.querySelector(".gallery"),f=document.querySelector(".loader"),g=document.querySelector(".load-more");let E=new q(".gallery a",{captionsData:"alt",captionDelay:250});function h(t){const i=t.map(({webformatURL:n,largeImageURL:o,tags:e,likes:r,views:a,comments:w,downloads:L})=>`
    <li class="gallery-item">
      <a href="${o}">
        <img src="${n}" alt="${e}" />
        <div class="info">
          <div class="info-item">
            <b>Likes</b>
            <p>${r}</p>
          </div>
          <div class="info-item">
            <b>Views</b>
            <p>${a}</p>
          </div>
          <div class="info-item">
            <b>Comments</b>
            <p>${w}</p>
          </div>
          <div class="info-item">
            <b>Downloads</b>
            <p>${L}</p>
          </div>
        </div>
      </a>
    </li>
  `).join("");y.insertAdjacentHTML("beforeend",i),E.refresh()}function $(){y.innerHTML=""}function b(){f.style.display="block"}function l(){f.style.display="none"}function v(){g.style.display="block"}function u(){g.style.display="none"}const I=document.querySelector(".form"),M=document.querySelector(".load-more");let d="",s=1,p=0;I.addEventListener("submit",async t=>{t.preventDefault();const n=t.target.elements["search-text"].value.trim();if(n===""){c.warning({title:"Warning",message:"Please enter a search query!",position:"topRight"});return}d=n,s=1,$(),u(),b();try{const o=await m(d,s);if(l(),o.hits.length===0){c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}p=o.totalHits,h(o.hits),s*15<p&&v()}catch(o){l(),c.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"}),console.error(o)}});M.addEventListener("click",async()=>{s+=1,b(),u();try{const t=await m(d,s);l(),h(t.hits),R(),s*15>=p?(u(),c.info({title:"Info",message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):v()}catch(t){l(),c.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"}),console.error(t)}});function R(){const t=document.querySelector(".gallery-item");if(t){const i=t.getBoundingClientRect().height;window.scrollBy({top:i*2,behavior:"smooth"})}}
//# sourceMappingURL=index.js.map
