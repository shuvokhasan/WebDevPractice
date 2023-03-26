const btn = document.getElementById('btn');
const menu = document.getElementById('nav-bar');

btn.addEventListener('click', toggleMenu);

// function toggleMenu() {
//     if(menu.style.display === 'none'){
//         menu.style.display = 'block';
//     }
//     else{
//         menu.style.display = 'none';
//     }
// }

function toggleMenu(){
    
    menu.classList.toggle('on'); // adds 'on' class to the attribute

}