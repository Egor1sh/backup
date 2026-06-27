import './style.css'

const base = import.meta.env.BASE_URL

const images = [
  base + 'images/photo_1.jpg',
  base + 'images/photo_2.jpg',
  base + 'images/photo_3.jpg',
  base + 'images/photo_4.jpg',
  base + 'images/photo_5.jpg',
  base + 'images/photo_6.jpg',
  base + 'images/photo_7.jpg',
  base + 'images/photo_8.jpg',
  base + 'images/photo_9.jpg',
  base + 'images/photo_10.jpg',
  base + 'images/photo_11.jpg',
  base + 'images/photo_12.jpg',
  base + 'images/photo_13.jpg',
  base + 'images/photo_14.jpg',
  base + 'images/photo_15.jpg',
]
const lightbox = document.createElement('div')
lightbox.style.cssText = `
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.9);
  display: none;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`

document.body.appendChild(lightbox)

const img = document.createElement('img')
img.style.maxWidth = '90%'
img.style.maxHeight = '90%'
lightbox.appendChild(img)

window.openLightbox = (src) => {
  img.src = src
  lightbox.style.display = 'flex'
}

lightbox.onclick = () => {
  lightbox.style.display = 'none'
}

document.querySelector('#app').innerHTML = `
  <div class="container">
    <h1>📸 9А класс</h1>

    <div class="grid">
      ${images.map(src => `
        <img src="${src}" class="photo" onclick="openLightbox('${src}')"/>
  `   ).join('')}
    </div>
  </div>
`
