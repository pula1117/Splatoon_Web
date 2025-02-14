
$(document).ready(function () {
    const weaponCards = $(".weapons .card");
    const mapCards = $(".maps .card");
    const body = $("body");

    function handleSelection($cards, event) {
        event.stopPropagation(); // Evita que el clic se propague al body

        $cards.removeClass("selected");

        $(event.currentTarget).addClass("selected");

        const selectedName = $(event.currentTarget).find(".name").text();
        console.log(`Seleccionado: ${selectedName}`);
    }

    weaponCards.on("click", function (event) {
        handleSelection(weaponCards, event);
    });

    mapCards.on("click", function (event) {
        handleSelection(mapCards, event);
    });

    body.on("click", function () {
        weaponCards.removeClass("selected");
        mapCards.removeClass("selected");
        console.log("Ningún arma ni mapa seleccionado");
    });
    const goButton = document.getElementById("goButton");
    if (goButton) {
        goButton.addEventListener("click", () => {
            window.location.href = "selection.html";
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    console.log("script.js cargado correctamente");

    const weaponCards = document.querySelectorAll(".weapon-card");
    const mapCards = document.querySelectorAll(".map-card");
    const fightButton = document.getElementById("fightButton");
    const colorSlider = document.querySelector(".color-slider-container");
    const colorThumb = document.getElementById("colorThumb");

    let colorSelected = false; // Variable para verificar si el usuario ha elegido un color

    if (!weaponCards.length || !mapCards.length || !fightButton || !colorSlider || !colorThumb) {
        console.error("ERROR: No se encontraron elementos en el DOM.");
        return;
    }

    // Ocultar el botón y deshabilitar el enlace al cargar la página
    fightButton.style.display = "none";
    fightButton.style.pointerEvents = "none"; 

    function checkSelection() {
        const selectedWeapon = document.querySelector(".weapon-card.selected");
        const selectedMap = document.querySelector(".map-card.selected");

        if (selectedWeapon && selectedMap && colorSelected) {
            fightButton.style.display = "flex"; // Mostrar el botón
            fightButton.style.pointerEvents = "auto"; // Habilitar clic
        } else {
            fightButton.style.display = "none"; // Ocultar el botón
            fightButton.style.pointerEvents = "none"; // Deshabilitar clic
        }
    }

    // Evento para seleccionar armas
    weaponCards.forEach(card => {
        card.addEventListener("click", function () {
            weaponCards.forEach(c => c.classList.remove("selected")); // Deseleccionar otras
            this.classList.add("selected"); // Seleccionar esta
            checkSelection();
        });
    });

    // Evento para seleccionar mapas
    mapCards.forEach(card => {
        card.addEventListener("click", function () {
            mapCards.forEach(c => c.classList.remove("selected")); // Deseleccionar otras
            this.classList.add("selected"); // Seleccionar esta
            checkSelection();
        });
    });

    // Evento para detectar que el usuario ha movido el slider
    colorSlider.addEventListener("click", function () {
        colorSelected = true; // El usuario ha interactuado con el slider
        checkSelection();
    });

    colorSlider.addEventListener("mousemove", function (e) {
        if (e.buttons === 1) { // Detectar arrastre con el ratón
            colorSelected = true;
            checkSelection();
        }
    });
});



$(document).ready(function () {
    let progress = 0;
    let totalBalls = 10;
    let ballValue = 10;

    // Generar 10 bolas dinámicamente
    for (let i = 0; i < totalBalls; i++) {
        $(".ball-container").append(`<div class='ball' data-value='${ballValue}'>${ballValue}</div>`);
    }

    $(".ball").click(function () {
        progress += ballValue; // Sumar 10 al progreso
        $(this).fadeOut(300, function () { $(this).remove(); }); // Desaparecer y eliminar bola
        
        // Actualizar barra de progreso
        $("#progressBar").css("width", progress + "%");
    });
});

//BOTON REGISTRO
document.addEventListener("DOMContentLoaded", function () {
    const registerButton = document.getElementById("registerButton");
    const checkImage = document.getElementById("checkImage");

    registerButton.addEventListener("click", function () {
        checkImage.classList.toggle("hidden"); // Alterna la visibilidad
    });
});



// MENU HAMBURGUESA
    const btnOpenMenu = document.getElementById('btnOpenMenu');
    const btnCloseMenu = document.getElementById('btnCloseMenu');
    const menuFlex = document.querySelector('.menu-flex');

    btnOpenMenu.addEventListener('click', () => {
        menuFlex.classList.add('active');
        btnOpenMenu.style.display = 'none';
        btnCloseMenu.style.display = 'block';
    });

    btnCloseMenu.addEventListener('click', () => {
        menuFlex.classList.remove('active');
        btnOpenMenu.style.display = 'block';
        btnCloseMenu.style.display = 'none';
    });




// COLOR SLIDER
const sliderContainer = document.querySelector('.color-slider-container');
const thumb = document.getElementById('colorThumb');
const colorPreview = document.getElementById('colorPreview');

sliderContainer.addEventListener('click', function (e) {
    moveThumb(e.pageX);
});

sliderContainer.addEventListener('mousemove', function (e) {
    if (e.buttons === 1) { // Arrastrar con clic
        moveThumb(e.pageX);
    }
});

function moveThumb(x) {
    const rect = sliderContainer.getBoundingClientRect();
    let offsetX = x - rect.left;

    // Limitar dentro del slider
    if (offsetX < 0) offsetX = 0;
    if (offsetX > rect.width) offsetX = rect.width;

    thumb.style.left = offsetX + 'px';

    const color = getColorAtPosition(offsetX / rect.width);
    thumb.style.backgroundColor = color;
    colorPreview.style.backgroundColor = color;
}

function getColorAtPosition(percent) {
    const gradientColors = [
        [255, 0, 0],   // Rojo
        [255, 165, 0], // Naranja
        [255, 255, 0], // Amarillo
        [0, 128, 0],   // Verde
        [0, 255, 255], // Cian
        [0, 0, 255],   // Azul
        [238, 130, 238] // Violeta
    ];

    const segment = percent * (gradientColors.length - 1);
    const index = Math.floor(segment);
    const ratio = segment - index;

    const startColor = gradientColors[index];
    const endColor = gradientColors[index + 1];

    const r = Math.round(startColor[0] + (endColor[0] - startColor[0]) * ratio);
    const g = Math.round(startColor[1] + (endColor[1] - startColor[1]) * ratio);
    const b = Math.round(startColor[2] + (endColor[2] - startColor[2]) * ratio);

    return `rgb(${r}, ${g}, ${b})`;
}
