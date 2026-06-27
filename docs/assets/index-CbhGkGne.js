(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={ivan:[`photo_1.jpg`,`photo_2.jpg`],anya:[`photo_3.jpg`],dima:[`photo_4.jpg`,`photo_5.jpg`]},t=document.createElement(`div`);t.style.cssText=`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.9);
  display: none;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;var n=document.createElement(`img`);n.style.cssText=`
  max-width: 90%;
  max-height: 90%;
`,t.appendChild(n),document.body.appendChild(t),window.openLightbox=e=>{n.src=e,t.style.display=`flex`},t.onclick=()=>{t.style.display=`none`};function r(){return`
    <div class="container">
      <h1>📸 9A класс</h1>

      <div class="grid">
        ${Object.keys(e).map(t=>`
          <div class="card" onclick="openStudent('${t}')">
            <h3>${t}</h3>
            <p>${e[t].length} фото</p>
          </div>
        `).join(``)}
      </div>
    </div>
  `}function i(t){return`
    <div class="container">
      <button onclick="goBack()">← Назад</button>
      <h2>${t}</h2>

      <div class="grid">
        ${e[t].map(e=>{let t=`/backup/images/`+e;return`
            <img src="${t}" class="photo" onclick="openLightbox('${t}')"/>
          `}).join(``)}
      </div>
    </div>
  `}window.openStudent=e=>{document.querySelector(`#app`).innerHTML=i(e)},window.goBack=()=>{document.querySelector(`#app`).innerHTML=r()},document.querySelector(`#app`).innerHTML=r();