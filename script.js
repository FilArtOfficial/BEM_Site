// Добавление эффекта плавного наведения на элементы навбара
const navbarItems = document.querySelectorAll('.navbar__item');

navbarItems.forEach((item) => {
    item.addEventListener('mouseover', () => {
        item.style.transform = 'scale(1.1)';
        item.style.transition = 'transform 0.2s';
    });

    item.addEventListener('mouseout', () => {
        item.style.transform = 'scale(1)';
    });
});

// Плавная прокрутка вверх при клике на логотип
const logo = document.querySelector('.navbar__logo');
logo.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Добавление интерактивности для ссылок в футере
const footerLinks = document.querySelectorAll('.footer__link');
footerLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        alert('Переход по ссылке временно недоступен.');
    });
});
