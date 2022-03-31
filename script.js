const button = document.querySelector('button');
const list = document.querySelector('.todo-list');

const newItem = document.createElement('li');
newItemStuff = document.querySelector('input').value;
console.log(newItemStuff);
newItem.innerHTML = newItemStuff;

list.append(newItem);

button.addEventListener('click', function() {
    const input = document.querySelector('input');
    newItem.innerHTML = `${input.value}`;
    if (input.value !== ''){
        const newItem = document.createElement('li');
        list.append(newItem);
    } else {
        alert("can't add an empty task!")
    }
})