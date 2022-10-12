// import {
//  clearCompleted,
//  modifyToDoList,
//  populate,
// populateTasks,
// } from './module/addRemoveEdit.js';
import {
  clearCompleted, populate, modifyToDoList, populateTasks,
} from './module/interaction.js';
import './style.css';

const buttonClear = document.getElementById('clear_everything');

buttonClear.addEventListener('click', clearCompleted);

populate();
modifyToDoList();
populateTasks();