// Sample To-Do items fetched from the database (simulated here as an array)
const todoItems = [
  { id: 1, text: "Learn JavaScript", isCompleted: false },
  { id: 2, text: "Build a web app", isCompleted: false },
  { id: 3, text: "Master React", isCompleted: false },
];

// Function to create a new To-Do item element and associate it with its state
function createTodoElement(todoItem) {
  const li = document.createElement("li");
  li.textContent = todoItem.text;
  li.id = todoItem.id;
  li.style.textDecoration = todoItem.isCompleted ? "line-through" : "none";

  // Event listener to toggle completion status when clicked
  li.addEventListener("click", () => toggleCompleteAlt(li));

  return li;
}

// Function to toggle the "completed" state of a To-Do item
function toggleComplete(li) {
  let id = parseInt(li.id);
  let item = todoItems.find((item) => item.id === id);
  item.isCompleted = !item.isCompleted;
  li.style.textDecoration = item.isCompleted ? "line-through" : "none";
}

// Alternate function to toggle the "completed" state of a To-Do item.
// In this method, instead of manipulating the DOM element here, we are simply re-rendering the list.
// This is not the most efficient function, especially if the dataset gets large.
function toggleCompleteAlt(li) {
  let id = parseInt(li.id);
  let item = todoItems.find((item) => item.id === id);
  item.isCompleted = !item.isCompleted;
  document.getElementById("todo-list").innerHTML = ""; // clear list before re-rendering
  renderTodoList();
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
  todoStateMap.delete(li);
  li.remove();
}
