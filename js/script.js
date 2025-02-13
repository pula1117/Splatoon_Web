console.log("script.js cargado correctamente");

document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".weapons .card");
    const body = document.querySelector("body");

    cards.forEach(card => {
        card.addEventListener("click", (event) => {
            // Evita que el clic en la tarjeta se propague al body
            event.stopPropagation();

            // Deseleccionar todas las tarjetas
            cards.forEach(c => c.classList.remove("selected"));

            // Seleccionar la tarjeta actual
            card.classList.add("selected");

            // Obtener el nombre del arma y mostrar en consola
            const weaponName = card.querySelector(".name").textContent;
            console.log(`Seleccionado: ${weaponName}`);
        });
    });

    // Evento para deseleccionar al hacer clic en cualquier parte del body
    body.addEventListener("click", () => {
        cards.forEach(c => c.classList.remove("selected"));
        console.log("Ningún arma seleccionada");
    });
});


