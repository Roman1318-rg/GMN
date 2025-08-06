document.addEventListener('DOMContentLoaded', () => {
    const contactButton = document.querySelector('.btn');

    if (contactButton) {
        contactButton.addEventListener('click', (e) => {
            e.preventDefault(); // блокує відкриття пошти
            alert('Дякуємо за ваш запит! Ми зв’яжемося з вами найближчим часом.');
        });
    }

    // Додайте JS для мобільного меню, якщо потрібно
});
<!-- Замість <a> використайте <button> -->
<button class="btn">Написати нам</button>