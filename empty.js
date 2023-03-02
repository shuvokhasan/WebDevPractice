const input = document.getElementById("inp");
const action = document.getElementById("action");

let button = action.setAttribute("onclick", "showOutput()");

function showOutput() {
    let inputText = input.value;

        if(inputText != " " && inputText != ""){
            console.log("Hello " + inputText);
        }
    input.value = "";
}
