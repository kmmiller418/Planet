const button = document.querySelector("button");
const list = document.querySelector(".todo-list");

button.addEventListener("click", () => {
  const newItem = document.createElement("li");
  const input = document.querySelector("input");
  newItem.innerHTML = `${input.value}`;
  newItem.className = "todo-item";
  if (input.value !== "") {
    list.append(newItem);
  } else {
    alert("can't add an empty task!");
  }
});

list.addEventListener("click", (e) => {
  let listItem = e.target;
  listItem.style.textDecoration = "line-through";
  setTimeout(() => (listItem.remove()), 1000);
});
