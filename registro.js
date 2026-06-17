const queryParams = new URLSearchParams(window.location.search);

const nombre = queryParams.get("nombre");
const email = queryParams.get("email");
const edad = queryParams.get("edad");
const pais = queryParams.get("pais");

document.getElementById("contenedor-datos").innerHTML = `
    <div><strong>Nombre:</strong> ${nombre}</div>
    <div><strong>Email:</strong> ${email}</div>
    <div><strong>Edad:</strong> ${edad}</div>
    <div><strong>País:</strong> ${pais}</div>
`;
