function validarFormulario() {
    var formulario = document.querySelector('.formulario form');

    formulario.addEventListener('submit', function(event) {
        var nombre = formulario.querySelector('#nombre').value.trim();
        var apellido = formulario.querySelector('#apellido').value.trim();
        var cuidad = formulario.querySelector('#cuidad').value.trim();
        var fecha = formulario.querySelector('#fecha').value.trim();
        var email = formulario.querySelector('#email').value.trim();
        var telefono = formulario.querySelector('#telefono').value.trim();
        var password = formulario.querySelector('#password').value.trim();
        var confirmo_password = document.getElementById("confirmo_password"); 
        
        if (nombre === '' || email === '' || direccion === ''  || apellido ==='' || cuidad ===''
            || fecha ==='' || telefono === '' || password ==='' || confirmo_password ==='') {
            alert('Por favor completa todos los campos.');
        }
    });
}

function validatePassword() {
    if(password.value != confirmo_password.value) {
        confirmo_password.setCustomValidity("Las contraseñas no coinciden");
    } else {
        confirmo_password.setCustomValidity('');
    }


    
    
}


var fechaInput = document.getElementById("fecha_nacimiento");

var fechaNacimiento = fechaInput.value;

var fecha = new Date(fechaNacimiento);

var hoy = new Date();
var edad = hoy.getFullYear() - fecha.getFullYear();
var mes = hoy.getMonth() - fecha.getMonth();
if (mes < 0 || (mes === 0 && hoy.getDate() < fecha.getDate())) {
    edad--;
}

console.log("La edad es: " + edad);

var emailInput = document.getElementById("email");

var email = emailInput.value;

console.log("El correo electrónico ingresado es: " + email);


    var telefonoInput = document.getElementById("telefono");

var telefono = telefonoInput.value;

console.log("El número de teléfono ingresado es: " + telefono);


function agregarAlCarrito() {
}

password.onchange = validatePassword;
confirmo_password.onkeyup = validatePassword;

document.addEventListener('DOMContentLoaded', function() {
    validarFormulario();
});
