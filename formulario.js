const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(event){

event.preventDefault();

let nombre = document.getElementById("nombre").value;
let email = document.getElementById("email").value;
let edad = document.getElementById("edad").value;
let pais = document.getElementById("pais").value;
let terminos = document.getElementById("terminos").checked;

if(nombre.length < 5){
alert("El nombre debe tener mínimo 5 caracteres");
return;
}

let validarEmail =
/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(!validarEmail.test(email)){
alert("Email inválido");
return;
}

if(edad < 18 || edad > 60){
alert("Edad fuera de rango");
return;
}

if(pais === ""){
alert("Seleccione un país");
return;
}

if(!terminos){
alert("Debe aceptar términos");
return;
}

window.location.href =
`resultado.html?nombre=${encodeURIComponent(nombre)}
&email=${encodeURIComponent(email)}
&edad=${edad}
&pais=${encodeURIComponent(pais)}`;

});