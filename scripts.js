document.addEventListener('DOMContentLoaded', function() {
    console.log('Страница загружена и готова.');
});

document.addEventListener('DOMContentLoaded', () => {
    const content = document.querySelectorAll('.container p');
    content.forEach((element, index) => {
        element.style.opacity = 0;
        setTimeout(() => {
            element.style.transition = 'opacity 1s';
            element.style.opacity = 1;
        }, index * 150); // задержка для создания эффекта "поочередного появления"
    });
});