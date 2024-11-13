// Sample To-Do items fetched from the database (simulated here as an array)
const todoItems = [
  { id: 1, text: "Learn JavaScript" },
  { id: 2, text: "Build a web app" },
  { id: 3, text: "Master React" },
];

// Function to create a new To-Do item element and associate it with its state
function createTodoElement(todoItem) {
  const li = document.createElement("li");
  li.textContent = todoItem.text;

  // Event listener to toggle completion status when clicked
  li.addEventListener("click", () => toggleComplete(li));

  return li;
}

// Function to toggle the "completed" state of a To-Do item
function toggleComplete(li) {
  li.style.textDecoration =
    li.style.textDecoration === "line-through"
      ? (li.style.textDecoration = "none")
      : (li.style.textDecoration = "line-through");
}

// Function to render the To-Do list
function renderTodoList() {
  const todoListElement = document.getElementById("todo-list");
  todoItems.forEach((item) => {
    const todoElement = createTodoElement(item);
    todoListElement.appendChild(todoElement);
  });
}

// Call the render function when the document is loaded
document.addEventListener("DOMContentLoaded", () => {
  renderTodoList();
});

// Example of what happens when a list item is removed
function removeTodoItem(li) {
  // This element will be garbage collected when no longer referenced
  // and its state will also be removed from the WeakMap automatically
  li.remove();
}
