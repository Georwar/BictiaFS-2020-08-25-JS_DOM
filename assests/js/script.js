function mensajeAlert(params) {
    alert("hola mundo");
}

function cajaDeTexto(params) {

    var nombre = prompt('ingrese su nombre');
    document.write("<h1> su nombre es " + nombre + "</h1>");

}

function confirmar() {
    var respuesta = confirm("Esta seguro que desea eliminar el archivo?");

    if (respuesta) {
        alert("archivo eliminado correctamente");
    } else {
        alert("Archivo NO eliminado");
    }

}

function consola() {

    console.log("soy tu mejor amigo para los errores");

}

var imagen = document.getElementById("imagen");

imagen.addEventListener("click", () => {
    /*    alert("soy el DOM"); */

    imagen.style.width = "1000px";
    imagen.style.border = "5px solid black";
})


/* Mouse */

var box = document.getElementById("box");

box.addEventListener("mouseenter", function () {
    box.classList.replace("box", "cambio1")

});

box.addEventListener("mouseleave", function () {
    box.classList.replace("cambio1", "box")

});

box.addEventListener("mousemove", () => {
    console.log("El mouse se esta moviendo");

});

box.addEventListener("mouseup", () => {
    console.log("Has levantado el click dentro del DIV");

});

box.addEventListener("mousedown", () => {
    console.log("Has dado el click dentro del DIV");

});


/* teclado */
var teclado = document.getElementById("teclado");
/*
teclado.addEventListener("keydown", () => {
        console.log("has presionado una tecla");
    }

);

teclado.addEventListener("keypress", () => {
        console.log("Tienes la tecla sostenida");
    }

); */

teclado.addEventListener("keyup", (e) => {
        console.log(e.key);
    }

);

var padre = document.getElementById("padre");

padre.addEventListener("click", (e) => {
    console.log(e.target.textContent);


    e.target.classList.add("color");
});

/* elementos dentro de un nodo o etiqueta */

var lista = document.getElementById("lista");
var agregar = document.getElementById("agregar");

/* Me trae el texto o informacion ingresado dentro del input */

agregar.addEventListener('click', () => {
    var texto = document.getElementById("texto").value;


    var etiqueta = document.createElement("li");
    /* creo la etiqueta */

    etiqueta.textContent = texto;
    /* asignamos el valor dentro de la etiqueta iserto el texto que tiene el input */

    lista.appendChild(etiqueta);

    /* Agregamos la etiqueta a la lista */

});