var mostrarMensaje1 = document.getElementById("boton1");

mostrarMensaje1.addEventListener("click", submitForm1);

var nombre1Field = document.getElementById("nombre1");
var correo1Field = document.getElementById("correo1");
var telefono1Field = document.getElementById("telefono1");
var motivoField = document.getElementById("motivo");
var textomotivoField = document.getElementById("textomotivo");

function submitForm1() {
    if (nombre1Field.value === "") {
        // Si el campo de nombre está vacío, muestra un mensaje que incluye el nombre del campo obtenido del atributo data-label
        alert("El campo " + nombre1Field.getAttribute("data-label") + " es obligatorio.");
    } else if (correo1Field.value === "") {
        // Si el campo de correo electrónico está vacío, muestra un mensaje que incluye el nombre del campo obtenido del atributo data-label
        alert("El campo " + correo1Field.getAttribute("data-label") + " es obligatorio.");
    } else if (telefono1Field.value === "") {
        // Si el campo de correo electrónico está vacío, muestra un mensaje que incluye el nombre del campo obtenido del atributo data-label
        alert("El campo " + telefono1Field.getAttribute("data-label") + " es obligatorio.");
        // Si todos los campos están completos, muestra un mensaje de confirmación
    } else if (motivoField.value === "") {
        // Si el campo de correo electrónico está vacío, muestra un mensaje que incluye el nombre del campo obtenido del atributo data-label
        alert("El campo " + motivoField.getAttribute("data-label") + " es obligatorio.");
    } else if (textomotivoField.value === "") {
        // Si el campo de correo electrónico está vacío, muestra un mensaje que incluye el nombre del campo obtenido del atributo data-label
        alert("El campo " + textomotivoField.getAttribute("data-label") + " es obligatorio.");
    } else {
        var nombre1Value = nombre1Field.value;
        var correo1Value = correo1Field.value;
        alert("Muchas gracias " + nombre1Value + ", hemos recibido tu sugerencia y enviaremos una pronta respuesta al correo " + correo1Value + ".");
    }
}


// var mostrarMensaje2 = document.getElementById("boton2");

// mostrarMensaje2.addEventListener("click", submitForm2);

// var nombre2Field = document.getElementById("nombre2");
// var correo2Field = document.getElementById("correo2");
// var telefono2Field = document.getElementById("telefono2");
// var fechaField = document.getElementById("fecha");
// var horaField = document.getElementById("hora");
// var asistentesField = document.getElementById("asistentes");

// function submitForm2() {
//     if (nombre2Field.value === "") {
//         // Si el campo de nombre está vacío, muestra un mensaje que incluye el nombre del campo obtenido del atributo data-label
//         alert("El campo " + nombre2Field.getAttribute("data-label") + " es obligatorio.");
//     } else if (correo2Field.value === "") {
//         // Si el campo de correo electrónico está vacío, muestra un mensaje que incluye el nombre del campo obtenido del atributo data-label
//         alert("El campo " + correo2Field.getAttribute("data-label") + " es obligatorio.");
//     } else if (telefono2Field.value === "") {
//         // Si el campo de correo electrónico está vacío, muestra un mensaje que incluye el nombre del campo obtenido del atributo data-label
//         alert("El campo " + telefono2Field.getAttribute("data-label") + " es obligatorio.");
//         // Si todos los campos están completos, muestra un mensaje de confirmación
//     } else if (fechaField.value === "") {
//         // Si el campo de correo electrónico está vacío, muestra un mensaje que incluye el nombre del campo obtenido del atributo data-label
//         alert("El campo " + fechaField.getAttribute("data-label") + " es obligatorio.");
//     } else if (horaField.value === "") {
//         // Si el campo de correo electrónico está vacío, muestra un mensaje que incluye el nombre del campo obtenido del atributo data-label
//         alert("El campo " + horaField.getAttribute("data-label") + " es obligatorio.");
//     } else if (asistentesField.value === "") {
//         // Si el campo de correo electrónico está vacío, muestra un mensaje que incluye el nombre del campo obtenido del atributo data-label
//         alert("El campo " + asistentesField.getAttribute("data-label") + " es obligatorio.");
//     } else{
//         var nombre2Value = nombre2Field.value;
//         var correo2Value = correo2Field.value;
//     alert("Muchas gracias " + nombre2Value + ", hemos recibido tu reserva y enviaremos una pronta confirmación al correo " + correo2Value + ".");
// }
// }


// var enlacesFormulario = document.querySelectorAll('.nav-link');
// var anchoVentana = window.innerWidth;

// // Oculta los formularios en pantallas pequeñas
// if (anchoVentana <= 576) {
//   document.querySelectorAll('form').forEach(function(formulario) {
//     formulario.style.display = 'none';
//   });
// }

// // Agrega el evento de clic a cada enlace de formulario
// enlacesFormulario.forEach(function(enlace) {
//   enlace.addEventListener('click', function(event) {
//     event.preventDefault();
//     var formularioId = this.getAttribute('data-target');
//     var formulario = document.getElementById(formularioId);

//     // Si el formulario está oculto, lo muestra, de lo contrario lo oculta.
//     if (formulario.style.display === 'none') {
//       formulario.style.display = 'block';
//     } else {
//       formulario.style.display = 'none';
//     }
//   });
// });


$(document).ready(function () {
    $("#boton2").click(function () {
        var nombre2Value = $("#nombre2").val();
        var correo2Value = $("#correo2").val();
        var telefono2Value = $("#telefono2").val();
        var fechaValue = $("#fecha").val();
        var horaValue = $("#hora").val();
        var asistentesValue = $("#asistentes").val();

        if (nombre2Value === "") {
            alert("El campo " + $("#nombre2").attr("data-label") + " es obligatorio.");
        } else if (correo2Value === "") {
            alert("El campo " + $("#correo2").attr("data-label") + " es obligatorio.");
        } else if (telefono2Value === "") {
            alert("El campo " + $("#telefono2").attr("data-label") + " es obligatorio.");
        } else if (fechaValue === "") {
            alert("El campo " + $("#fecha").attr("data-label") + " es obligatorio.");
        } else if (horaValue === "") {
            alert("El campo " + $("#hora").attr("data-label") + " es obligatorio.");
        } else if (asistentesValue === "") {
            alert("El campo " + $("#asistentes").attr("data-label") + " es obligatorio.");
        } else {
            alert("Estimado: " + nombre2Value + ", agradecemos por reservar con nosotros. Hemos registrado " + asistentesValue + " asistentes. Se ha enviado el código de confirmación al correo " +
                correo2Value + ".\nGracias por preferirnos.");
        }
    });
});


$(document).ready(function () {
    $(".col").click(function () {
        // Crear el fondo negro
        var fondoNegro = $("<div></div>");
        fondoNegro.css({

            "position": "fixed",
            "top": 0,
            "left": 0,
            "width": "100%",
            "height": "100%",
            "z-index": "999"
        });

        // Crear la ventana emergente
        var ventanaEmergente = $("<div></div>");
        ventanaEmergente.css({
            "position": "absolute",
            "top": "50%",
            "left": "50%",
            "transform": "translate(-50%,-50%)",
            "background-color": "#000",
            "padding": "20px",
            "z-index": "1000",
            "width": "70%",
            "height": "70%"
        });

        // Agregar el texto de la tarjeta a la ventana emergente
        var titulo = $(this).find("h5").text();
        var texto = $(this).find("p").text();
        var tarjetaTexto = $("<div></div>");
        tarjetaTexto.html("<h5>" + titulo + "</h5><p>" + texto + "</p>");
        tarjetaTexto.css({
            "text-align": "center",
            "color": "#fff"
        });
        ventanaEmergente.append(tarjetaTexto);

        // Agregar la imagen ampliada a la ventana emergente
        var imagenAmpliada = $("<img>");
        imagenAmpliada.attr("src", $(this).find("img").attr("src"));
        imagenAmpliada.css({
            "width": "50%",
            "height": "auto",
            "display": "block",
            "margin": "0 auto"
        });
        ventanaEmergente.append(imagenAmpliada);

        // Agregar el botón de cerrar
        var botonCerrar = $("<button>x</button>");
        botonCerrar.css({
            "position": "absolute",
            "top": "5px",
            "left": "5px",
            "font-size": "24px",
            "color": "#fff",
            "background-color": "transparent",
            "border": "none",

        });
        botonCerrar.click(function () {
            fondoNegro.remove();
        });
        ventanaEmergente.append(botonCerrar);

        // Agregar el fondo negro y la ventana emergente al body
        $("body").append(fondoNegro);
        fondoNegro.append(ventanaEmergente);
    });
});

//////////////////////////////////////////////////////////////////

$(document).ready(function () {

    // Crear el carrusel de imágenes
    var carrusel = $("#carrusel2");
    carrusel.css({
        "display": "none",
    });

    $("#sobrenosotros").click(function () {
        $("body").find(".fondo-negro").remove();
        $("body").find(".ventana-emergente").remove();

        // Crear el fondo negro
        var fondoNegro = $("<div></div>");
        fondoNegro.css({
            "position": "fixed",
            "top": 0,
            "left": 0,
            "width": "100%",
            "height": "100%",
            "z-index": "999"
        });

        // Crear la ventana emergente
        var ventanaEmergente = $("<div></div>");
        ventanaEmergente.css({
            "position": "absolute",
            "top": "50%",
            "left": "50%",
            "transform": "translate(-50%,-50%)",
            "background-color": "#000",
            "padding": "20px",
            "z-index": "1000",
            "width": "70%",
            "height": "70%"
        });

        var tituloVentana = $("<div></div>");
        tituloVentana.html("<h1>Nimrodel Pub Restaurant</h1>");
        tituloVentana.css({
            "text-align": "center",
            "color": "#fff",
            "margin-bottom": "20px",
            "font-style": "italic",
            "font-size": "30px"
        });

        ventanaEmergente.append(tituloVentana);

        // Agregar el botón de cerrar
        var botonCerrar = $("<button>x</button>");
        botonCerrar.css({
            "position": "absolute",
            "top": "5px",
            "left": "5px",
            "font-size": "24px",
            "color": "#fff",
            "background-color": "transparent",
            "border": "none",
        });
        botonCerrar.click(function () {
            fondoNegro.remove();
            ventanaEmergente.remove();
            carrusel.hide();
        });
        ventanaEmergente.append(botonCerrar);

        // Agregar el carrusel
        ventanaEmergente.append(carrusel);
        carrusel.css({
            "display": "block",
            "margin-top": "20px",
        });

        // Agregar el fondo negro y la ventana emergente al body
        $("body").append(fondoNegro);
        fondoNegro.append(ventanaEmergente);

    });

});