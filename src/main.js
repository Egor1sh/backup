import './style.css'

const images = [
  '/images/photo_1.jpg',
  '/images/photo_2.jpg',
  '/images/photo_3.jpg',
  '/images/photo_4.jpg',
  '/images/photo_5.jpg',
  '/images/photo_6.jpg',
  '/images/photo_7.jpg',
  '/images/photo_8.jpg',
  '/images/photo_9.jpg',
  '/images/photo_10.jpg',
  '/images/photo_11.jpg',
  '/images/photo_12.jpg',
  '/images/photo_13.jpg',
  '/images/photo_14.jpg',
  '/images/photo_15.jpg'
]

document.querySelector('#app').innerHTML = `
  <div class="container">
    <h1>📸 9А класс</h1>

    <div class="grid">
      ${images.map(img => `
        <img src="${img}" class="photo"/>
      `).join('')}
    </div>
  </div>
`
