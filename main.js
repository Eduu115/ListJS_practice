document.addEventListener("DOMContentLoaded", function () {
    
    const formulario = document.getElementById("form");
    const contenedor_lista = document.getElementById("contenedor-lista");
    const boton_reiniciar = document.getElementById("limpiar");

    let inputs = [];

    formulario.addEventListener("submit", function (event) {
        event.preventDefault();//no-reload para no perder los datos

        let form_input = document.getElementById("list-element").value;

        if (form_input.trim() !== "") {
            inputs.push(form_input);//añadimos el array
            actualizarLista();
            document.getElementById("list-element").value = ""; 
        }

        console.log("Lista actualizada:", inputs);
    });

    boton_reiniciar.addEventListener("click", function () {
        inputs = []; 
        actualizarLista();
        console.log("Lista reiniciada");
    });

    function actualizarLista() {
        //limpiar lista
        contenedor_lista.innerHTML = "";

        inputs.forEach((item, index) => {
            let div = document.createElement("div");
            div.classList.add("list-element");
            div.textContent = item;

            //fincuon de hacer clic y elimnminar
            div.addEventListener("click", function () {
                inputs.splice(index, 1); 
                // Eliminamos
                actualizarLista();
            });

            contenedor_lista.appendChild(div);
        });
    }
});
