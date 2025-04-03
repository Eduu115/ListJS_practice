document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("form");
    const contenedor_lista = document.getElementById("contenedor-lista");
    const boton_reiniciar = document.getElementById("limpiar");

    let inputs = [];

    formulario.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita que la página se recargue

        let form_input = document.getElementById("list-element").value;

        if (form_input.trim() !== "") {
            inputs.push(form_input); // Guardamos en el array
            actualizarLista(); // Llamamos a la función para renderizar la lista
            document.getElementById("list-element").value = ""; // Limpiar input
        }

        console.log("Lista actualizada:", inputs);
    });

    boton_reiniciar.addEventListener("click", function () {
        inputs = []; // Vaciar el array
        actualizarLista(); // Limpiar la lista en la pantalla
        console.log("Lista reiniciada");
    });

    function actualizarLista() {
        contenedor_lista.innerHTML = ""; // Limpiamos la lista antes de actualizar

        inputs.forEach((item, index) => {
            let div = document.createElement("div");
            div.classList.add("list-element");
            div.textContent = item;

            // Agregar evento para eliminar el elemento al hacer clic
            div.addEventListener("click", function () {
                inputs.splice(index, 1); // Eliminar del array
                actualizarLista(); // Volver a renderizar la lista
            });

            contenedor_lista.appendChild(div);
        });
    }
});
