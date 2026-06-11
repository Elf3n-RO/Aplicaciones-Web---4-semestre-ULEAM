const formulario = document.getElementById("formatoEstudiante");
const tabla = document.getElementById("tablaEstudiantes");

// Expresiones regulares
const cedulaRegex = /^\d{10}$/;
const nombreRegex = /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]{2,50}$/;
const telefonoRegex = /^09\d{8}$/;
const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Cargar registros al iniciar
document.addEventListener("DOMContentLoaded", mostrarEstudiantes);

formulario.addEventListener("submit", function(e){

    e.preventDefault();

    let cedula = document.getElementById("cedula").value.trim();
    let apellido = document.getElementById("apellido").value.trim();
    let nombre = document.getElementById("nombre").value.trim();
    let direccion = document.getElementById("direccion").value.trim();
    let telefono = document.getElementById("telefono").value.trim();
    let correo = document.getElementById("correo").value.trim();
    let facultad = document.getElementById("facultad").value;
    let nivel = document.getElementById("nivel").value;
    let paralelo = document.getElementById("paralelo").value;

    // Validaciones
    if(!cedulaRegex.test(cedula)){
        alert("La cédula debe contener 10 dígitos.");
        return;
    }

    if(!nombreRegex.test(apellido)){
        alert("Apellido invalidos.");
        return;
    }

    if(!nombreRegex.test(nombre)){
        alert("Nombre invalidos.");
        return;
    }

    if(!telefonoRegex.test(telefono)){
        alert("Telefono invalido. Debe iniciar con 09.");
        return;
    }

    if(!correoRegex.test(correo)){
        alert("Correo electronico invalido.");
        return;
    }

    if(facultad === "" || nivel === "" || paralelo === ""){
        alert("Seleccione facultad, nivel y paralelo.");
        return;
    }

    let estudiante = {
        cedula,
        apellido,
        nombre,
        direccion,
        telefono,
        correo,
        facultad,
        nivel,
        paralelo
    };

    let estudiantes =
        JSON.parse(localStorage.getItem("estudiantes")) || [];

    // Verificar cédula repetida
    let existe = estudiantes.some(
        est => est.cedula === cedula
    );

    if(existe){
        alert("La cedula ya esta registrada.");
        return;
    }

    estudiantes.push(estudiante);

    localStorage.setItem(
        "estudiantes",
        JSON.stringify(estudiantes)
    );

    alert("Estudiante registrado correctamente.");

    formulario.reset();

    mostrarEstudiantes();
});

function mostrarEstudiantes(){

    let estudiantes =
        JSON.parse(localStorage.getItem("estudiantes")) || [];

    tabla.innerHTML = "";

    estudiantes.forEach((estudiante, index) => {

        tabla.innerHTML += `
            <tr>
                <td>${estudiante.cedula}</td>
                <td>${estudiante.apellido}</td>
                <td>${estudiante.nombre}</td>
                <td>${estudiante.telefono}</td>
                <td>${estudiante.correo}</td>
                <td>
                    <button
                        class="eliminar"
                        onclick="eliminarEstudiante(${index})">
                        Eliminar
                    </button>
                </td>
            </tr>
        `;
    });
}

function eliminarEstudiante(index){

    let estudiantes =
        JSON.parse(localStorage.getItem("estudiantes")) || [];

    estudiantes.splice(index, 1);

    localStorage.setItem(
        "estudiantes",
        JSON.stringify(estudiantes)
    );

    mostrarEstudiantes();
}