    document.getElementById('formReserva').addEventListener('submit', function (e) {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const fecha = document.getElementById('fecha').value;
    const ramo = document.getElementById('ramo').value;
    const mensaje = document.getElementById('mensaje').value;

    const texto = `Hola! Soy ${nombre} y quiero reservar el *${ramo}* para el día *${fecha}*. ${mensaje ? 'Mensaje: ' + mensaje : ''}`;
    const urlWhatsApp = `https://wa.me/5492966611389?text=${encodeURIComponent(texto)}`;

    // Enviar a WhatsApp
    window.open(urlWhatsApp, '_blank');

    // Registrar en Google Sheets
    const datos = { nombre, fecha, ramo, mensaje };
    fetch('https://script.google.com/macros/s/AKfycbzioCzkOVVapI4YMMkb0RZw5jUAY_rVH-w-sYK0Rv2quKxEHiL1_zp0UZKFogdg-FyZkw/exec', {
        method: 'POST',
        body: JSON.stringify(datos),
        headers: { 'Content-Type': 'application/json' }
    })
    .then(res => console.log('Reserva registrada'))
    .catch(err => console.error('Error al registrar reserva', err));
    });
