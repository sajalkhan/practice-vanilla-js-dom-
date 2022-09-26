const completeTaskList = document.querySelector(".complete-list ul");
const incompleteTaskList = document.querySelector("#items");
const inputText = document.querySelector("#new-task");
const form = document.querySelector("form");

const createTask = (task) => {
  const listItem = document.createElement("li");
  const label = document.createElement("label");
  const checkbox = document.createElement("input");

  checkbox.type = "checkbox";
  label.innerText = task;
  listItem.appendChild(checkbox);
  listItem.appendChild(label);

  return listItem;
};

const addNewTask = (event) => {
  event.preventDefault();
  const listItem = createTask(inputText.value);
  incompleteTaskList.appendChild(listItem);
  inputText.value = "";

  bindIncompleteTask(listItem, completeTask);
};

const completeTask = function () {
  const listItem = this.parentNode;
  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete";
  deleteBtn.innerText = "Delete";
  listItem.appendChild(deleteBtn);

  const checkbox = listItem.querySelector("input[type='checkbox']");
  checkbox.remove();
  completeTaskList.appendChild(listItem);
  bindCompleteTask(listItem, removeTask);
};

const removeTask = function() {
    const listItem = this.parentNode;
    const item = listItem.parentNode;
    item.removeChild(listItem);
}

const bindIncompleteTask = (item, callback) => {
  const checkBox = item.querySelector("input[type='checkbox']");
  checkBox.onchange = callback;
};

const bindCompleteTask =(item, callback)=> {
    const deleteBtn = item.querySelector('.delete');
    deleteBtn.onclick = callback;
}

for(let i=0; i< incompleteTaskList.children.length; i++) {
    bindIncompleteTask(incompleteTaskList.children[i], completeTask);
}

for(let i=0; i< completeTaskList.children.length; i++) {
    bindCompleteTask(completeTaskList.children[i], removeTask);
}

form.addEventListener("submit", addNewTask);
