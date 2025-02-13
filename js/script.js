console.log("script.js cargado correctamente");

document.addEventListener("DOMContentLoaded", () => {
    const weaponCards = document.querySelectorAll(".weapons .card");
    const mapCards = document.querySelectorAll(".maps .card");
    const body = document.querySelector("body");

    function handleSelection(cards, event) {
        
         // Evita que el clic se propague al body
        event.stopPropagation();

        // Deseleccionar todas las tarjetas dentro del grupo (weapons o maps)
        cards.forEach(c => c.classList.remove("selected"));

        // Seleccionar la tarjeta actual
        event.currentTarget.classList.add("selected");

        // Obtener y mostrar el nombre en consola
        const selectedName = event.currentTarget.querySelector(".name").textContent;
        console.log(`Seleccionado: ${selectedName}`);
    }

    // Evento para seleccionar armas
    weaponCards.forEach(card => {
        card.addEventListener("click", (event) => handleSelection(weaponCards, event));
    });

    // Evento para seleccionar mapas
    mapCards.forEach(card => {
        card.addEventListener("click", (event) => handleSelection(mapCards, event));
    });

    // Evento para deseleccionar todo al hacer clic fuera
    body.addEventListener("click", () => {
        weaponCards.forEach(c => c.classList.remove("selected"));
        mapCards.forEach(c => c.classList.remove("selected"));
        console.log("Ningún arma ni mapa seleccionado");
    });
});


$(document).ready(function () {
    const weaponCards = $(".weapons .card");
    const mapCards = $(".maps .card");
    const body = $("body");

    function handleSelection($cards, event) {
        event.stopPropagation(); // Evita que el clic se propague al body

        // Remover selección previa en el grupo correspondiente
        $cards.removeClass("selected");

        // Agregar la clase 'selected' al elemento clicado
        $(event.currentTarget).addClass("selected");

        // Obtener y mostrar el nombre en consola
        const selectedName = $(event.currentTarget).find(".name").text();
        console.log(`Seleccionado: ${selectedName}`);
    }

    // Evento para seleccionar armas
    weaponCards.on("click", function (event) {
        handleSelection(weaponCards, event);
    });

    // Evento para seleccionar mapas
    mapCards.on("click", function (event) {
        handleSelection(mapCards, event);
    });

    // Evento para deseleccionar todo al hacer clic fuera
    body.on("click", function () {
        weaponCards.removeClass("selected");
        mapCards.removeClass("selected");
        console.log("Ningún arma ni mapa seleccionado");
    });
});

