document.addEventListener('DOMContentLoaded', function () {
    const toast = Toastify({
        text: "¡Bienvenido a nuestra Menú!  Si estás lejos del restaurante, puedes consultar precios, verificar la disponibilidad de los platillos y ordenar tu bocadillo, almuerzo o bebida favorita llamándonos, el botón de llamada se encuentra en las tarjetas de los platillos.",
        duration: 15000, // Duración de 15 segundos
        close: false, // Desactivamos el cierre automático
        gravity: "top",
        position: "center",
        backgroundColor: "rgba(255, 255, 255, 1)", // Fondo blanco semitransparente
        stopOnFocus: true,
        style: {
            color: "#000", // Texto en negro
            border: "1px solid #ccc", // Borde gris claro para resaltar el contorno
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.9)", // Sombra suave para darle relieve
            borderRadius: "10px", // Bordes redondeados
            width: "80%", // Ancho al 100%
            height: "50vh", // Altura al 50% de la ventana
            display: "flex", // Usamos flexbox para centrar contenido
            flexDirection: "column", // Organiza el contenido en columna
            alignItems: "center", // Centrar horizontalmente
            justifyContent: "center", // Centrar verticalmente
            position: "fixed", // Cambiado a fixed
            top: "0", // Posiciona en la parte superior
            left: "0", // Alineado a la izquierda
            overflow: "hidden", // Para evitar desbordamientos
            zIndex: "1000" // Asegura que esté por encima de otros elementos
        },
        onClick: function() {} // Puedes agregar una función de clic si lo deseas
    }).showToast();

    // Agregar barra de progreso
    const toastElement = document.querySelector('.toastify');
    if (toastElement) {
        const progressBar = document.createElement('div');
        progressBar.style.height = '4px';
        progressBar.style.backgroundColor = '#4CAF50'; // Color de la barra de progreso
        progressBar.style.position = 'absolute';
        progressBar.style.bottom = '0';
        progressBar.style.left = '0';
        progressBar.style.width = '100%';
        progressBar.style.transition = 'width 15s linear'; // Duración de la barra de progreso
        toastElement.appendChild(progressBar);

        // Animar la barra de progreso y cerrar el toast al finalizar
        setTimeout(() => {
            progressBar.style.width = '0%'; // Reduce la barra a 0%
        }, 0); // Iniciar la animación inmediatamente
        
        setTimeout(() => {
            toastElement.style.display = 'none'; // Oculta el toast cuando la barra de progreso termina
        }, 15000); // Ocultar después de 15 segundos
    }

    // Agregar imagen arriba del texto
    const img = document.createElement('img');
    img.src = 'image/logov1.png'; // Reemplaza con la URL de tu imagen
    img.style.width = '30%'; // Ajusta el tamaño a 30% del contenedor
    img.style.maxWidth = '200px'; // Opcional: tamaño máximo
    img.style.borderTopLeftRadius = '10px'; // Bordes redondeados
    img.style.borderTopRightRadius = '10px'; // Bordes redondeados
    img.style.objectFit = 'cover'; // Ajusta la imagen
    img.style.display = 'block'; // Asegura que se centre
    img.style.margin = '0 auto'; // Centrar la imagen

    // Insertar la imagen en el elemento de Toastify
    toastElement.insertBefore(img, toastElement.firstChild);

    // Agregar botón para cerrar la alerta
    const closeButton = document.createElement('button');
    closeButton.innerText = 'Cerrar'; // Texto del botón
    closeButton.style.position = 'absolute';
    closeButton.style.top = '20px'; // Ajustar según sea necesario
    closeButton.style.right = '20px'; // Ajustar según sea necesario
    closeButton.style.backgroundColor = '#4CAF50'; // Color de fondo del botón
    closeButton.style.color = '#fff'; // Color del texto
    closeButton.style.border = 'none'; // Sin borde
    closeButton.style.borderRadius = '5px'; // Bordes redondeados
    closeButton.style.cursor = 'pointer'; // Cambia el cursor al pasar sobre el botón
    closeButton.style.padding = '10px';
    closeButton.onclick = function() {
        toastElement.style.display = 'none'; // Oculta el toast
    };

    // Insertar el botón en el elemento de Toastify
    toastElement.appendChild(closeButton);
});
