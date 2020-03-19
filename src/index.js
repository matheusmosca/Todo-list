const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

// Save TODO list in local storage
function saveInStorage() {
    localStorage.setItem('todoList', JSON.stringify(listOfTodos));
}

// Load Todos of local storage
function loadStorage() {
    return JSON.parse(localStorage.getItem('todoList')) || [];
}

// Create a li element and append it to ul
function createTodoElement(inputContent) {
    const todo = document.createElement('li');
    todo.textContent = inputContent;
    
    // Font awesome needs some classes to appear
    const trashIcon = document.createElement('i');
    trashIcon.classList.add('fas', 'fa-trash-alt', 'delete');
    
    todo.appendChild(trashIcon);
    
    ul.appendChild(todo);
}

// Render the page 
function renderTodos(listOfTodos) {
    listOfTodos.forEach(element => createTodoElement(element));
}

const listOfTodos = loadStorage();

renderTodos(listOfTodos);

function removeTodo(pos, target) {
    listOfTodos.splice(pos, 1);
    target.parentElement.remove();
    saveInStorage();
}

// Adding Todo:
form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Value of input
    const todoContent = input.value.trim();
    // Create a li tag and append it to ul
    createTodoElement(todoContent);

    // Saves the new TODO in local Storage
    listOfTodos.push(todoContent);
    saveInStorage()
    input.value = '';
});

// Deleting Todo:
ul.addEventListener('click', ({ target }) => {
    // If the target is a trash icon
    if(target.classList.contains('delete')) {
        // Text inside li
        const valueOfTarget = target.parentElement.textContent;
        const positionOfTarget = listOfTodos.indexOf(valueOfTarget);
        removeTodo(positionOfTarget, target);
    }
});