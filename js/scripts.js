document.addEventListener('DOMContentLoaded', () => {
    const tabItems = document.querySelectorAll('.tab-item');
    const tabContents = document.querySelectorAll('.tab-content');

    tabItems.forEach(item => {
        item.addEventListener('click', () => {
            // Remover la clase "active" de todos los elementos de las pestañas
            tabItems.forEach(tab => tab.classList.remove('active'));

            // Agregar la clase "active" a la pestaña clickeada
            item.classList.add('active');

            // Ocultar todo el contenido de las pestañas
            tabContents.forEach(content => content.style.display = 'none');

            // Mostrar el contenido de la pestaña clickeada
            const tabContent = document.getElementById(item.getAttribute('data-tab'));
            tabContent.style.display = 'block';
        });
    });
});


const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const cardContainer = document.querySelector('.card-container');

let currentPosition = 0;
const cardWidth = 250; // El ancho de la tarjeta más el margen

prevBtn.addEventListener('click', () => {
    if (currentPosition > 0) {
        currentPosition--;
        updateCarousel();
    }
});

nextBtn.addEventListener('click', () => {
    if (currentPosition < cardContainer.children.length - 1) {
        currentPosition++;
        updateCarousel();
    }
});

function updateCarousel() {
    const offset = currentPosition * (cardWidth + 30); // 30 es el margen horizontal (15px a cada lado)
    cardContainer.style.transform = `translateX(-${offset}px)`;
}
