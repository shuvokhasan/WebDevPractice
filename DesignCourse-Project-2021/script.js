const mobileBtn = document.getElementById('mobile-cta');
const nav = document.getElementById('nav');
const navExit = document.getElementById('mobile-exit');

mobileBtn.addEventListener('click', showNav);
navExit.addEventListener('click', closeNav);

function showNav(){
    nav.classList.add('menu-btn');
}

function closeNav(){
    nav.classList.remove('menu-btn');
}