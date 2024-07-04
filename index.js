const list = document.querySelector("ul");
const button = document.querySelector("button");
const input = document.querySelector("input");

button.addEventListener("click", () => {
  const value = input.value;
  input.value = "";

  const listItem = document.createElement("li");
  const span = document.createElement("span");
  const deleteButton = document.createElement("button");

  listItem.appendChild(span);
  listItem.appendChild(deleteButton);

  span.textContent = value;
  deleteButton.textContent = "Delete";

  list.appendChild(listItem);

  deleteButton.addEventListener("click", () => {
    list.removeChild(listItem);
  });

  input.focus();
});
