# WeakMap test

This repo is for learning more about the WeakMap data structure and seeing a potential use case.

Here we are using WeakMap to create a state source for our web app. The app is a todo list, and there is logic needed to be able to toggle whether or not an item is done.

## Usage

### index.html

`index.html` is where the To Do list is rendered. There are three JavaScript files to choose from that interact with `index.html`.

### index.js

This file shows how you would use JavaScript to manipulate the DOM elements by clicking on them. You determine whether or not to "complete" the item by checking it's `text-decoration` property. See below.

```javascript
// Function to toggle the "completed" state of a To-Do item
function toggleComplete(li) {
  li.style.textDecoration =
    li.style.textDecoration === "line-through"
      ? (li.style.textDecoration = "none")
      : (li.style.textDecoration = "line-through");
}
```

### index-weakmap.js

This file utilizes a (`WeakMap`)[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap] to manage app state. As To Do list items are created, they are added to `todoStateMap`. It is the reference in this state variable where we check whether or not an item is "complete". See below.

```javascript
// Function to toggle the "completed" state of a To-Do item
function toggleComplete(li) {
  const currentState = todoStateMap.get(li);
  currentState.completed = !currentState.completed;

  // Update the UI based on the completion status
  li.style.textDecoration = currentState.completed ? "line-through" : "none";
}
```

### index-property.js

The final file demonstrates how we might handle the style changes/rendering if we were to treat the To Do list items as if they had a `isCompleted`. When a todo list item is toggled, we change the style. See below.

```javascript
// Function to toggle the "completed" state of a To-Do item
function toggleComplete(li) {
  const currentState = todoStateMap.get(li);
  currentState.completed = !currentState.completed;

  // Update the UI based on the completion status
  li.style.textDecoration = currentState.completed ? "line-through" : "none";
}
```

I have an alternative function that can be used to demonstrate how this might work if we, instead of directly manipulating the DOM element on click, if we instead re-rendered the list, applying the styles upon creating. This isn't the most efficient method, especially if we get a lot of results. See below.

```javascript
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
```
