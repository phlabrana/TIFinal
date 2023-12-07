function validarFormulario() {
    
    if (document.formulario.nombre.value.length < 3) {
        alert("Por favor escriba su nombre");
        document.formulario.nombre.focus();
        return;
    }

    if(document.formulario.apellido.value.length < 3) {
        alert("Por favor escriba su apellido");
        document.formulario.apellido.focus();
        return;
    }

    let edad = document.formulario.edad.value;

    edad = validarEntero(edad);
    document.formulario.edad.value = edad;

    if (edad == "") {
        alert("Indique su edad en números");
        document.formulario.edad.focus();
        return;
    }

    if (document.formulario.mail.value == "" || document.formulario.okmail.value == "") {
        alert("Complete ambos campos de Correo electrónico");
        document.formulario.mail.focus();
        return;
    }

    if (document.formulario.okmail.value != document.formulario.mail.value) {
        alert("Los email ingresados no coinciden")
        document.formulario.mail.focus();
        return;
    }

    if (document.formulario.pregunta.selectedIndex == 0) {
        alert("Seleccione una respuesta para ¿Cómo nos conociste?");
        document.formulario.pregunta.focus();
        return;
    }
    

    if (document.formulario.terminos.checked == false) {
        alert("Debe aceptar Términos y condiciones para continuar");
        document.formulario.terminos.focus();
        return;
    }

alert("¡Gracias por suscribirte al Club del Café!")
document.formulario.submit();
}

function validarEntero(valor) {
        valor = parseInt(valor);

    if (isNaN(valor)) {
        return "";
    } else {
        return valor;
    }
}





