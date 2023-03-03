import saveToLocalStorage from './saveToDb.js';

const editData = (dataArray) => {
  const refreshIcon = document.querySelector('.refresh-icon');
  refreshIcon.addEventListener('click', () => {
    window.location.reload();
  });

  const todoLists = document.querySelectorAll('.list');
  const todoContent = document.querySelectorAll('.todo-content');
  const dragIcon = document.querySelectorAll('.drag-icon');
  const trashIcon = document.querySelectorAll('.trash-icon');

  todoContent.forEach((input, item) => input.addEventListener('click', (e) => {
    e.stopImmediatePropagation();
    dataArray[item].description = todoContent[item].value;
    saveToLocalStorage(dataArray);
    todoLists[item].classList.add('active');
    trashIcon[item].style.display = 'flex';
    dragIcon[item].style.display = 'none';
    todoContent[item].focus();
    todoContent[item].style.cursor = 'text';
    todoLists.forEach((todoItem, i) => {
      if (item !== i) {
        todoItem.classList.remove('active');
        trashIcon[i].style.display = 'none';
        dragIcon[i].style.display = 'block';
      }
    });
  }));

  todoContent.forEach((todo, i) => todo.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      dataArray[i].description = todoContent[i].value;
      saveToLocalStorage(dataArray);
      todoContent[i].blur();
      todoLists[i].classList.remove('active');
      trashIcon[i].style.display = 'none';
      dragIcon[i].style.display = 'block';
    }
  }));
  todoContent.forEach((todo, i) => todo.addEventListener('focusout', () => {
    dataArray[i].description = todoContent[i].value;
    saveToLocalStorage(dataArray);
  }));
};
export default editData;