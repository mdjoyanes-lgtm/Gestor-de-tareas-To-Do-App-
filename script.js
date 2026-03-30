const calendarDays = document.getElementById("calendarDays")
const monthYear = document.getElementById("monthYear")

const date = new Date()

let currentMonth = date.getMonth()
let currentYear = date.getFullYear()

function renderCalendar(){

calendarDays.innerHTML = ""

const firstDay = new Date(currentYear, currentMonth, 1).getDay()
const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate()

const today = new Date()

const months = [
"Enero","Febrero","Marzo","Abril","Mayo","Junio",
"Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"
]

monthYear.innerText = months[currentMonth] + " " + currentYear

for(let i = 0; i < firstDay -1; i++){
const empty = document.createElement("div")
calendarDays.appendChild(empty)
}

for(let day = 1; day <= daysInMonth; day++){

const dayElement = document.createElement("div")
dayElement.innerText = day

if(
day === today.getDate() &&
currentMonth === today.getMonth() &&
currentYear === today.getFullYear()
){
dayElement.style.background = "#ffd84d"
dayElement.style.fontWeight = "bold"
}

calendarDays.appendChild(dayElement)

}

}

renderCalendar()

// BOTON DE + ADD CMORE EN MY CATEGORIEES
const addCategoryBtn = document.querySelector(".add-category-btn")
const categoryList = document.getElementById("categoryList")

addCategoryBtn.addEventListener("click", () => {

const text = prompt("Escribe una nueva categoría")

if(text){

const newCategory = document.createElement("p")
newCategory.textContent = text

categoryList.appendChild(newCategory)

}

})
