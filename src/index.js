import {
  clearCompleted,
  modifyToDoList,
  populate,
  populateTasks,
} from './module/addRemoveEdit.js';
import './style.css';

const buttonClear = document.getElementById('clear_everything');

buttonClear.addEventListener('click', clearCompleted);

populate();
modifyToDoList();
populateTasks();