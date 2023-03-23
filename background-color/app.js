const input = document.getElementById('input');
const button = document.getElementById('button');

button.addEventListener('click', changeBg);

function changeBg(){
    let value = input.value;

    if(value.length <= 7){
        document.getElementById('body').style.backgroundColor = value;
    }
    console.log(value);
    // input.value = "";
}