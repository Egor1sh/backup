import './style.css'

const images = [
  '/public/images/photo_1.jpg',
  '/public/images/photo_2.jpg',
  '/public/images/photo_3.jpg',
  '/public/images/photo_4.jpg',
  '/public/images/photo_5.jpg',
  '/public/images/photo_6.jpg',
  '/public/images/photo_7.jpg',
  '/public/images/photo_8.jpg',
  '/public/images/photo_9.jpg',
  '/public/images/photo_10.jpg',
  '/public/images/photo_11.jpg',
  '/public/images/photo_12.jpg',
  '/public/images/photo_13.jpg',
  '/public/images/photo_14.jpg',
  '/public/images/photo_15.jpg'
]

document.querySelector('#app').innerHTML = `
  <div class="container">
    <h1>📸 Моя фотогалерея</h1>

    <div class="grid">
      ${images.map(img => `
        <img src="${img}" class="photo"/>
      `).join('')}
    </div>
  </div>
`
