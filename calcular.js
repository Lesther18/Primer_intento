
function mostrar(){
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;

    let nombreCompleto = nombre + " " + apellido;

    document.getElementById("nombreCompleto").textContent = nombreCompleto;
}