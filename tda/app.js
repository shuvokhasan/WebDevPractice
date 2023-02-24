// 2. get input element
const input = document.getElementById("task");
// 4. to store all the task
let tasks = [];
// 6. get ul element
const ul = document.getElementById("list");

// 1. create a function
function addTask() {
    // 3. get value from input
    let task = input.value;

    // 9. check the input valid or not
    if(task !== ""){
        // 5. store into task array
        tasks.push("<li>" + task + "</li>");
    }

    // 7. insert into ul
    ul.innerHTML = tasks.join("");

    // 8. empty the input field
    input.value = "";

    // Test
    console.log(tasks);
}