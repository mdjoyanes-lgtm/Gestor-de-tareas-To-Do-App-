const calendarDays = document.getElementById("calendarDays")
const monthYear = document.getElementById("monthYear")

const date = new Date()

let currentMonth = date.getMonth()
let currentYear = date.getFullYear()

function renderCalendar() {

    calendarDays.innerHTML = ""

    const firstDay = new Date(currentYear, currentMonth, 1).getDay()
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate()

    const today = new Date()

    const months = [
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ]

    monthYear.innerText = months[currentMonth] + " " + currentYear

    for (let i = 0; i < firstDay - 1; i++) {
        const empty = document.createElement("div")
        calendarDays.appendChild(empty)
    }

    for (let day = 1; day <= daysInMonth; day++) {

        const dayElement = document.createElement("div")
        dayElement.innerText = day

        if (
            day === today.getDate() &&
            currentMonth === today.getMonth() &&
            currentYear === today.getFullYear()
        ) {
            dayElement.style.background = "#ffd84d"
            dayElement.style.fontWeight = "bold"
        }

        calendarDays.appendChild(dayElement)

    }

}

////////////////// Funcionamiento de botones de meses /////////////////////

// Botón para ir al mes anterior

document.getElementById("btn-atras").onclick = function () {
    currentMonth--;

    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    renderCalendar();
};

// Botón para ir al mes siguiente

document.getElementById("btn-adelante").onclick = function () {
    currentMonth++;

    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    renderCalendar();
};

renderCalendar();

///////////////////////////////////////////////////////////////////////////


// Área de datos
var boton1 = document.getElementById('boton1')
var boton2 = document.getElementById('boton2')
var boton3 = document.getElementById('boton3')
var boton4 = document.getElementById('boton4')
var boton5 = document.getElementById('logout')
var boton6 = document.getElementById('settings')



// Área de funciones (Botones)

//Boton 1
boton1.onclick = function () {

    const elementoModal = document.getElementById('miVentanaModalboton1');

    const modalDinamico = new bootstrap.Modal(elementoModal);

    modalDinamico.show();
};

//Boton 2
boton2.onclick = function () {

    const elementoModal = document.getElementById('miVentanaModalboton2');

    const modalDinamico = new bootstrap.Modal(elementoModal);

    modalDinamico.show();

}

//Boton 3
boton3.onclick = function () {

    const elementoModal = document.getElementById('miVentanaModalboton3');

    const modalDinamico = new bootstrap.Modal(elementoModal);

    modalDinamico.show();
}

//Boton 4
boton4.onclick = function () {

    let texto = prompt("¿Qué nueva tarea quieres añadir?");

    if (texto) {
        document.getElementById("taskList").innerHTML += "<li>" + texto + "</li>";
    }
};

//Boton 5 (Log Out)
logout.onclick = function () {
    window.location.href = "https://www.google.com";
}


//Boton6 (Settings)
settings.onclick = function () {

    const elementoModal = document.getElementById('exampleModalToggle');

    const modalDinamico = new bootstrap.Modal(elementoModal);

    modalDinamico.show();
}


