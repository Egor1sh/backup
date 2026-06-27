import './style.css'

const base = import.meta.env.BASE_URL

// 👉 структура учеников
const students = {
  ivan: ['photo_1.jpg', 'photo_2.jpg'],
  anya: ['photo_3.jpg'],
  dima: ['photo_4.jpg', 'photo_5.jpg']
}

// --------------------
// LIGHTBOX (fullscreen)
// --------------------
const lightbox = document.createElement('div')
lightbox.style.cssText = `
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.9);
  display: none;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`

const lightboxImg = document.createElement('img')
lightboxImg.style.cssText = `
  max-width: 90%;
  max-height: 90%;
`

lightbox.appendChild(lightboxImg)
document.body.appendChild(lightbox)

window.openLightbox = (src) => {
  lightboxImg.src = src
  lightbox.style.display = 'flex'
}

lightbox.onclick = () => {
  lightbox.style.display = 'none'
}

// --------------------
// RENDER STUDENTS LIST
// --------------------
function renderStudents() {
  return `
    <div class="container">
      <h1>📸 9A класс</h1>

      <div class="grid">
        ${Object.keys(students).map(name => `
          <div class="card" onclick="openStudent('${name}')">
            <h3>${name}</h3>
            <p>${students[name].length} фото</p>
          </div>
        `).join('')}
      </div>
    </div>
  `
}

// --------------------
// RENDER STUDENT GALLERY
// --------------------
function renderStudent(name) {
  return `
    <div class="container">
      <button onclick="goBack()">← Назад</button>
      <h2>${name}</h2>

      <div class="grid">
        ${students[name].map(img => {
          const full = base + 'images/' + img
          return `
            <img src="${full}" class="photo" onclick="openLightbox('${full}')"/>
          `
        }).join('')}
      </div>
    </div>
  `
}

// --------------------
// NAVIGATION
// --------------------
window.openStudent = (name) => {
  document.querySelector('#app').innerHTML = renderStudent(name)
}

window.goBack = () => {
  document.querySelector('#app').innerHTML = renderStudents()
}

// --------------------
// INIT
// --------------------
document.querySelector('#app').innerHTML = renderStudents()
