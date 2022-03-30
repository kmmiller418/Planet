const list = document.querySelector('ul');
const input = document.querySelector('input');

function add() {
    const newItem = document.createElement('li');
    newItem.class = "todo-item";
    newItem.innerText = `${input.value}`;
    list.appendChild(newItem);
}