document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const menuLateral = document.getElementById('menu-lateral');

    menuToggle.addEventListener('click', function() {
        menuLateral.classList.toggle('open');
    });
});
