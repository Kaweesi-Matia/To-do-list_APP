const form = document.querySelector('.form');
const input = document.querySelector('.task_Input');
const listContent = document.querySelector('.list-content');

let todo;
let todoz = JSON.parse(localStorage.getItem('todoz')) || [];
const store = () => {
  todo = {
    Description: input.value,
    id: todoz.length + 1,
    completed: false,
  };
  todoz.push(todo);
  localStorage.setItem('todoz', JSON.stringify(todoz));
};

const clear = () => {
  input.value = '';
};

const removeTask = (id) => {
  todoz = todoz.filter((books) => books.id !== id);
  todoz.forEach((todo, id) => {
    todo.id = id + 1;
  });
  localStorage.setItem('todoz', JSON.stringify(todoz));
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
  const deleteIcon = document.createElement('i');
  deleteIcon.classList.add('fa-solid');
  deleteIcon.classList.add('fa-trash');
  deleteIcon.classList.add('dots');

  ul.append(checkBox, newInp, deleteIcon);
  listContent.append(ul);
  deleteIcon.addEventListener('click', () => {
    deleteIcon.parentElement.remove();
    removeTask(todo.id);
  });
};
todoz.forEach(addTask);
const modifyToDoList = () => {
  const editInput = document.querySelectorAll('.newInput');
  editInput.forEach((edits, indexy) => {
    edits.addEventListener('change', () => {
      todoz.forEach((todo, index) => {
        if (indexy === index) {
          todo.Description = edits.value;
          localStorage.setItem('todoz', JSON.stringify(todoz));
        }
      });
    });
  });
};
modifyToDoList();

function populate() {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (input.value !== '') {
      store();
      addTask(todo);
      clear();
    }
  });
}
export { populate, modifyToDoList };
