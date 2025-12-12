const inputfield = document.getElementById("input");
const button = document.getElementById("button");
const list = document.getElementById("Task-list");

function addtask() {
    const inputText = input.value;
    console.log("input value: ", inputText);

    const li = document.createElement("li");
    li.textContent = inputText;
    list.appendChild(li);
}
button.addEventListener("click",() => {
    addtask();
})