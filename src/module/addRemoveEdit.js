let todoz = [];
const saveTodo = () => {
  const stringfyTodos = JSON.stringify(todoz);
  localStorage.setItem('todoz', stringfyTodos);
};

const completedTodo = (stats, index) => {
  todoz[index - 1].completed = stats;
  saveTodo();
};

const removeTask = (id) => {
  todoz = todoz.filter((books) => books.id !== id);
  todoz.forEach((todo, id) => {
    todo.id = id + 1;
  });
  saveTodo();
};

const addTask = (todo) => {
  const ul = document.createElement('div');
  ul.classList.add('todo-Item');
  const checkBox = document.createElement('input');
  checkBox.type = 'checkbox';
  checkBox.classList.add('checkBox');

  const newInp = document.createElement('input');
  newInp.type = 'text';
  newInp.classList.add('newInput');
  newInp.value = todo.Description;

  checkBox.onclick = (e) => {
    completedTodo(e.target.checked, todo.id);

    if (todo.completed === true) {
      newInp.classList.add('completed');
    } else {
      newInp.classList.remove('completed');
    }
  };

  if (todo.completed === true) {
    checkBox.checked = 'checked';
    newInp.classList.add('completed');
  }
  const deleteIcon = document.createElement('i');
  deleteIcon.classList.add('fa-solid');
  deleteIcon.classList.add('fa-trash');
  deleteIcon.classList.add('dots');
  ul.append(checkBox, newInp, deleteIcon);
  const listContent = document.querySelector('.list-content');
  listContent.append(ul);
  deleteIcon.addEventListener('click', () => {
    deleteIcon.parentElement.remove();
    removeTask(todo.id);
  });
};

todoz.forEach(addTask);
export { addTask, removeTask };