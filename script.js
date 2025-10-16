    document.getElementById('formReserva').addEventListener('submit', function (e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const fecha = document.getElementById('fecha').value;
    const ramo = document.getElementById('ramo').value;
    const mensaje = document.getElementById('mensaje').value;

    // WhatsApp personalizado
    const texto = `Hola! Soy ${nombre} y quiero reservar el *${ramo}* para el día *${fecha}*. ${mensaje ? 'Mensaje: ' + mensaje : ''}`;
    const urlWhatsApp = `https://wa.me/5492966611389?text=${encodeURIComponent(texto)}`;
    window.open(urlWhatsApp, '_blank');

    // Envío al Web App (registro invisible en Sheets)
    const formData = new FormData();
    formData.append('nombre', nombre);
    formData.append('fecha', fecha);
    formData.append('ramo', ramo);
    formData.append('mensaje', mensaje);

    fetch('https://script.google.com/macros/s/AKfycbxP5yOeX6ykBjsdVRdd57Ew4ziJe7PfbSqBjfsREsVit0QZnrjDcKaMQDWXRL6kTS1n8Q/exec', {
        method: 'POST',
        body: formData
    });
    });




