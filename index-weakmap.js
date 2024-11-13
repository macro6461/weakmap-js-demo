// Create a WeakMap to store state for each To-Do List item
const todoStateMap = new WeakMap();

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

  // Set the state for this element in the WeakMap (false = not completed)
  todoStateMap.set(li, { completed: false });

  // Event listener to toggle completion status when clicked
  li.addEventListener("click", () => toggleComplete(li));

  return li;
}

// Function to toggle the "completed" state of a To-Do item
function toggleComplete(li) {
  const currentState = todoStateMap.get(li);
  currentState.completed = !currentState.completed;

  // Update the UI based on the completion status
  li.style.textDecoration = currentState.completed ? "line-through" : "none";
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
