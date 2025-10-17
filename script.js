    document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.getElementById('toggleHorarios');
    const contenido = document.getElementById('contenidoHorarios');

    toggleBtn.addEventListener('click', function () {
        contenido.classList.toggle('hidden');
    });
    });


const form = document.getElementById('reservaForm');
    const confirmacion = document.getElementById('confirmacionBox');

    form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Oculta el formulario y muestra la confirmación
    form.style.display = 'none';
    confirmacion.style.display = 'block';

    // Captura los datos del formulario
    const nombre = form.nombre.value;
    const cantidad = form.cantidad.value;
    const horario = form.horario.value;
    const contacto = form.contacto.value;

    // Opcional: enviar los datos a Google Sheets vía Apps Script
    // fetch('https://script.google.com/macros/s/TU_SCRIPT_ID/exec', {
    //   method: 'POST',
    //   mode: 'no-cors',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({
    //     nombre,
    //     cantidad,
    //     horario,
    //     contacto
    //   })
    // });
    });

    document.getElementById("mostrarReserva").addEventListener("click", function () {
    const formulario = document.getElementById("formularioReserva");
    formulario.style.display = formulario.style.display === "none" ? "block" : "none";
    });





