
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

    if (!weaponCards.length || !mapCards.length || !fightButton || !fightButton) {
        console.error("ERROR: No se encontraron elementos en el DOM.");
        return;
    }

    // Ocultar el botón y deshabilitar el enlace al cargar la página
    fightButton.style.display = "none";
    fightButton.classList.add("disabled");
    fightButton.style.pointerEvents = "none"; // Evita que se pueda hacer clic

    function checkSelection() {
        const selectedWeapon = document.querySelector(".weapon-card.selected");
        const selectedMap = document.querySelector(".map-card.selected");

        if (selectedWeapon && selectedMap) {
            fightButton.style.display = "flex"; // Mostrar el botón
            fightButton.classList.remove("disabled");
            fightButton.style.pointerEvents = "auto"; // Habilitar clic
        } else {
            fightButton.style.display = "none"; // Ocultar el botón
            fightButton.classList.add("disabled");
            fightButton.style.pointerEvents = "none"; // Deshabilitar clic
        }
    }

    weaponCards.forEach(card => {
        card.addEventListener("click", function () {
            weaponCards.forEach(c => c.classList.remove("selected")); // Deseleccionar otras
            this.classList.add("selected"); // Seleccionar esta
            checkSelection();
        });
    });

    mapCards.forEach(card => {
        card.addEventListener("click", function () {
            mapCards.forEach(c => c.classList.remove("selected")); // Deseleccionar otras
            this.classList.add("selected"); // Seleccionar esta
            checkSelection();
        });
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
