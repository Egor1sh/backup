(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[`/public/images/photo_1.jpg`,`/public/images/photo_2.jpg`,`/public/images/photo_3.jpg`,`/public/images/photo_4.jpg`,`/public/images/photo_5.jpg`,`/public/images/photo_6.jpg`,`/public/images/photo_7.jpg`,`/public/images/photo_8.jpg`,`/public/images/photo_9.jpg`,`/public/images/photo_10.jpg`,`/public/images/photo_11.jpg`,`/public/images/photo_12.jpg`,`/public/images/photo_13.jpg`,`/public/images/photo_14.jpg`,`/public/images/photo_15.jpg`];document.querySelector(`#app`).innerHTML=`
  <div class="container">
    <h1>📸 Моя фотогалерея</h1>

    <div class="grid">
      ${e.map(e=>`
        <img src="${e}" class="photo"/>
      `).join(``)}
    </div>
  </div>
`;