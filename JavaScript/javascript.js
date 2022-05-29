const btnMobile = window.document.getElementById('btn-mobile');

function toggleMenu() {
    const nav = window.document.getElementById('nav');
    nav.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);





