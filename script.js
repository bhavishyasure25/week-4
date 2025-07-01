function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (taskText === "") return;

  const list = document.getElementById("taskList");
  const li = document.createElement("li");
  li.textContent = taskText;

  const removeBtn = document.createElement("span");
  removeBtn.textContent = "❌";
  removeBtn.onclick = () => li.remove();

  li.appendChild(removeBtn);
  list.appendChild(li);

  input.value = "";
}
