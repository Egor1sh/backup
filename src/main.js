import './style.css'

const base = import.meta.env.BASE_URL

// 👉 структура учеников
const students = [
  { id: "1", name: "Артемьева Александра", folder: "01_Артемьева_Саша", avatar: "24.jpg", photos: [] },
  { id: "2", name: "Викат Марта", folder: "02_Викат_Марта", avatar: "24.jpg", photos: [] },
  { id: "3", name: "Власова Анна", folder: "03_Власова_Анна", avatar: "24.jpg", photos: [] },
  { id: "4", name: "Воронина Ирина", folder: "04_Воронина_Ирина", avatar: "24.jpg", photos: [] },
  { id: "5", name: "Воронова Полина", folder: "05_Воронова_Полина", avatar: "24.jpg", photos: [] },
  { id: "6", name: "Гайсенова Эвелина", folder: "06_Гайсенова_Эвелина", avatar: "24.jpg", photos: [] },
  { id: "7", name: "Говорков Алексей", folder: "07_Говорков_Алексей", avatar: "24.jpg", photos: [] },
  { id: "8", name: "Головко Дарья", folder: "08_Головко_Дарья", avatar: "24.jpg", photos: ["Обложка.jpg","1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg","10.jpg","11.jpg","12.jpg","13.jpg","14.jpg","15.jpg","16.jpg","17.jpg","18.jpg","19.jpg","20.jpg","21.jpg","22.jpg","23.jpg","24.jpg"] },
  { id: "9", name: "Демиденко Дарья", folder: "09_Демиденко_Даша", avatar: "24.jpg", photos: [] },
  { id: "10", name: "Добрая Софья", folder: "10_Добрая_Соня", avatar: "24.jpg", photos: [] },

  { id: "11", name: "Дрябов Андрей", folder: "11_Дрябов_Андрей", avatar: "24.jpg", photos: [] },
  { id: "12", name: "Дымченко Иван", folder: "12_Дымченко_Иван", avatar: "24.jpg", photos: [] },
  { id: "13", name: "Егоров Дима", folder: "13_Егоров_Дима", avatar: "24.jpg", photos: [] },
  { id: "14", name: "Зайцева Анастасия", folder: "14_Зайцева_Анастасия", avatar: "24.jpg", photos: [] },
  { id: "15", name: "Захарова Анастасия", folder: "15_Захарова_Анастасия", avatar: "24.jpg",  photos: [] },
  { id: "16", name: "Казаков Дмитрий", folder: "16_Казаков_Дмитрий", avatar: "24.jpg", photos: [] },
  { id: "17", name: "Кашин Александр", folder: "17_Кашин_Александр", avatar: "24.jpg", photos: [] },
  { id: "18", name: "Келеменян Лиана", folder: "18_Келеменян_Лиана", avatar: "24.jpg", photos: [] },
  { id: "19", name: "Керимова Рита", folder: "19_Керимова_Рита", avatar: "24.jpg", photos: [] },
  { id: "20", name: "Корнеева София", folder: "20_Корнеева_София", avatar: "24.jpg", photos: [] },

  { id: "21", name: "Кремнева Александра", folder: "21_Кремнева_Александра", avatar: "24.jpg", photos: [] },
  { id: "22", name: "Куценко Константин", folder: "22_Куценко_Константин", avatar: "24.jpg", photos: [] },
  { id: "23", name: "Леонтьев Дмитрий", folder: "23_Леонтьев_Дмитрий", avatar: "24.jpg", photos: [] },
  { id: "24", name: "Макарова Ирина", folder: "24_Макарова_Ирина", avatar: "24.jpg", photos: [] },
  { id: "25", name: "Манапова Камилла", folder: "25_Манапова_Камилла", avatar: "24.jpg", photos: [] },
  { id: "26", name: "Маслова Дарья", folder: "26_Маслова_Дарья", avatar: "24.jpg", photos: [] },
  { id: "27", name: "Мечикова Елизавета", folder: "27_Мечикова_Елизавета", avatar: "24.jpg", photos: [] },
  { id: "28", name: "Мусина Александра", folder: "28_Мусина_Александра", avatar: "24.jpg", photos: [] },
  { id: "29", name: "Муштуков Виктор", folder: "29_Муштуков_Виктор", avatar: "24.jpg", photos: [] },
  { id: "30", name: "Орлова Милана", folder: "30_Орлова_Милана", avatar: "24.jpg", photos: [] },

  { id: "31", name: "Пелевини Захар", folder: "31_Пелевини_Захар", avatar: "24.jpg", photos: [] },
  { id: "32", name: "Полякова Дарья", folder: "32_Полякова_Дарья", avatar: "24.jpg", photos: [] },
  { id: "33", name: "Савин Максим", folder: "33_Савин_Максим", avatar: "24.jpg", photos: [] },
  { id: "34", name: "Слобожанина Екатерина", folder: "34_Слобожанина_Екатерина", avatar: "24.jpg", photos: [] },
  { id: "35", name: "Тельпис Анна", folder: "35_Тельпис_Анна", avatar: "24.jpg", photos: [] },
  { id: "36", name: "Токмакова Лилия", folder: "36_Токмакова_Лилия", avatar: "24.jpg", photos: [] },
  { id: "37", name: "Торчило Владислав", folder: "37_Торчило_Влад", avatar: "1.jpg", photos: ["Обложка.jpg","1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg","10.jpg","11.jpg","12.jpg","13.jpg","14.jpg","15.jpg","16.jpg","17.jpg","18.jpg","19.jpg","20.jpg","21.jpg","22.jpg","23.jpg","24.jpg","vladu.png"] },
  { id: "38", name: "Шахов Тимур", folder: "38_Шахов_Тимур", avatar: "24.jpg", photos: [] },
  { id: "39", name: "Юнина Алиса", folder: "39_Юнина_Алиса", avatar: "24.jpg", photos: [] },
  { id: "40", name: "Эйленен Елизовета", folder: "40_Эйленен_Лиза", avatar: "24.jpg", photos: [] }
]
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
// ГЛАВНАЯ СТРАНИЦА (список учеников)
// --------------------
function renderStudents() {
  return `
    <div class="container">
      <h1>📸 9А класс</h1>

      <div class="grid">
        ${students.map(student => `
          <div class="card" onclick="openStudent('${student.id}')">

            <img 
              src="${base}images/${student.folder}/${student.avatar}" 
              class="avatar"
            />

            <h2>${student.name}</h2>
            <p>${student.photos.length} фото</p>

          </div>
        `).join('')}
      </div>
    </div>
  `
}

// --------------------
// СТРАНИЦА УЧЕНИКА
// --------------------
function renderStudent(id) {
  const student = students.find(s => s.id === id)

  if (!student) {
    return `
      <div class="container">
        <h1>Ученик не найден</h1>
        <button onclick="goBack()">← Назад</button>
      </div>
    `
  }

  return `
    <div class="container">
      <button class="back-btn" onclick="goBack()">← Назад</button>

      <h1>${student.name}</h1>

      <div class="grid">
        ${student.photos.map(photo => {
          const src = `${base}images/${student.folder}/${photo}`
          return `
            <img
              src="${src}"
              class="photo"
              onclick="openLightbox('${src}')"
            />
          `
        }).join('')}
      </div>
    </div>
  `
}

// --------------------
// НАВИГАЦИЯ
// --------------------
window.openStudent = (id) => {
  document.querySelector('#app').innerHTML = renderStudent(id)
}

window.goBack = () => {
  document.querySelector('#app').innerHTML = renderStudents()
}

// --------------------
// INIT
// --------------------
document.querySelector('#app').innerHTML = renderStudents()
