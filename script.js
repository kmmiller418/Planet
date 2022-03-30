const list = document.querySelector('ul');

document.querySelector('.todo').addEventListener('keypress', (event) => {
    if (event.key == "Enter"){
        console.log('filler');
    }
})

function add() {
    const newItem = document.createElement('input');
    newItem.type = Text;
    newItem.class = "todo";
    newItem.placeholder = "What are we going to do today?";
    list.appendChild(newItem);
}