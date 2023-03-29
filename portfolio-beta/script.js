const menuBtn = document.getElementById('menu-icon');
const ul = document.getElementById('ul');
console.log(ul);

menuBtn.addEventListener('click', showMenu);

function showMenu(){

    ul.classList.toggle('toggle-menu');

    console.log(ul);
}