// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Creamos un arreglo vacío donde se guardarán los nombres ingresados
let listaDeAmigos = [];

function agregarAmigo() {
    // Obtenemos el valor del campo de texto (input)
    const input = document.getElementById("amigo");
    const nombre = input.value.trim(); // quitamos espacios en blanco al inicio y final

    // Validamos si el campo está vacío
    if (nombre === "") {
        alert("Por favor, escribe un nombre válido.");
        return;
    }

    listaDeAmigos.push(nombre);

    // Mostramos el nuevo nombre en la lista visual en la página
    mostrarLista(); 

    // Limpiamos el campo de texto para que el usuario pueda escribir otro nombre
    input.value = "";

    
    function mostrarLista() {
    const ul = document.getElementById("listaAmigos");
    ul.innerHTML = "";

    // Recorremos el arreglo de amigos y creamos un elemento <li> por cada nombre
    listaDeAmigos.forEach(function(amigo) {
        const li = document.createElement("li"); // creamos un nuevo elemento de lista
        li.textContent = amigo; // le ponemos el nombre del amigo
        ul.appendChild(li); // lo agregamos a la lista en la página
    });
    }
}

function sortearAmigo() {
    // Verificamos si la lista tiene al menos un nombre
    if (listaDeAmigos.length === 0) {
        alert("Primero debes añadir al menos un nombre.");
        return;
    }

    // Elegimos un nombre aleatorio de la lista
    const indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
    const amigoElegido = listaDeAmigos[indiceAleatorio];

    // Mostramos el nombre sorteado en la sección de resultado
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // limpiamos resultado anterior
    const li = document.createElement("li");
    li.textContent = `🎉 El amigo secreto es: ${amigoElegido}`;
    resultado.appendChild(li);
}