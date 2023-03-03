import saveToLocalStorage from './saveToDb.js';

const todoStatus = (todo) => {
  const notificationIcon = document.querySelector('.badge');
  const checkStatusInput = document.querySelectorAll('.todo-status');
  const todoContent = document.querySelectorAll('.todo-content');
  const filterednotification = todo.filter((data) => !data.completed);
  notificationIcon.innerHTML = filterednotification.length;

  todo.forEach((todoItem, i) => {
    if (todoItem.completed) {
      checkStatusInput[i].checked = true;
      todoContent[i].classList.add('completed');
    } else {
      checkStatusInput[i].checked = false;
      todoContent[i].classList.remove('completed');
    }
  });
  checkStatusInput.forEach((check, i) => check.addEventListener('change', (e) => {
    if (e.target.checked) {
      todo[i].completed = true;
      checkStatusInput[i].checked = true;
      todoContent[i].classList.add('completed');
      const filterednotification = todo.filter((data) => !data.completed);
      notificationIcon.innerHTML = filterednotification.length;
      saveToLocalStorage(todo);
    } else {
      todoContent[i].classList.remove('completed');
      todo[i].completed = false;
      checkStatusInput[i].checked = false;
      todoContent[i].classList.remove('completed');
      const filterednotification = todo.filter((data) => !data.completed);
      notificationIcon.innerHTML = filterednotification.length;
      saveToLocalStorage(todo);
    }
  }));
};

export default todoStatus;