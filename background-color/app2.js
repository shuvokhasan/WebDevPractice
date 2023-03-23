const button = document.getElementById('button2');
const body = document.getElementById('body');

button2.addEventListener('click', changeRandom);

function changeRandom(){
    let r, g, b;

    r = Math.floor(Math.random() * 255);
    g = Math.floor(Math.random() * 255);
    b = Math.floor(Math.random() * 255);

    body.style.backgroundColor = `rgb(${r},${g},${b})`;

    console.log(`rgb(${r},${g},${b})`);
}