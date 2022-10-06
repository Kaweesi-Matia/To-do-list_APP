import './style.css';

const listContent = document.querySelector('.list-content');

const lists = [{
  description: 'reading',
  bool: 'false',
  index: '1',
},
{
  description: 'coding',
  bool: 'false',
  index: '2',
}, {
  description: 'eating',
  bool: 'false',
  index: '3',
}];

lists.forEach((task) => {
  const div = document.createElement('div');
  div.innerHTML = `
    <div class="todo_Item">
    <input class="checkBox" type="checkbox">${task.description}<i class="fa-solid fa-ellipsis-vertical dots"></i>
    </div>
    `;
  listContent.append(div);
});
