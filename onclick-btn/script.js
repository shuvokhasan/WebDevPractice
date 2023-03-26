const box = document.getElementById('box');
const btn = document.getElementById('btn');

btn.addEventListener('click', showBox);

function showBox(){
    const boxDisplay = box.classList.toggle('box-op');
}