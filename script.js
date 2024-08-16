document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');

    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });

    // Fecha y hora
    function updateDateTime() {
        const now = new Date();
        const dateTimeString = now.toLocaleString('es-AR', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric',
        });
        document.getElementById('date-time').textContent = dateTimeString;
    }
        updateDateTime();
        setInterval(updateDateTime, 60000);

        getWeather();

});

    // Formulario de contacto
    const contactForm = document.getElementById('contacto-form');
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        try {
            // Aquí deberías enviar los datos del formulario a tu servidor
            // Por ahora, simularemos una respuesta exitosa
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            alert('Mensaje enviado con éxito');
            contactForm.reset();
        } catch (error) {
            console.error('Error sending form:', error);
            alert('Hubo un error al enviar el mensaje. Por favor, intente nuevamente.');
        }
    });

                            //Notas importantes:
//Reemplaza 'YOUR_API_KEY' en script.js con una clave API válida de OpenWeatherMap.
//Para que el formulario de contacto funcione correctamente, necesitarás implementar la lógica del lado del servidor para procesar los datos del formulario y enviar el correo electrónico. Esto generalmente se hace con lenguajes como PHP, Node.js, Python, etc.
//Los iconos de los servicios municipales se han actualizado utilizando Font Awesome.
//Se ha agregado la funcionalidad de fecha, hora y temperatura utilizando JavaScript y la API de OpenWeatherMap.
//El menú hamburguesa se muestra en dispositivos móviles y se puede activar/desactivar.
//La disposición de los servicios municipales se ha cambiado a tres columnas en pantallas grandes y una columna en dispositivos móviles.