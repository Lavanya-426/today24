async function addTask() {
  const input = document.getElementById("taskInput");
  const task = input.value;

  if (!task) return;

  const response = await fetch("/todo", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ task }),
  });

  const data = await response.json();
  const li = document.createElement("li");
  li.textContent = task + " ";

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";

  deleteBtn.onclick = function () {
    li.remove();
  };

  li.appendChild(deleteBtn);

  document.getElementById("taskList").appendChild(li);

  input.value = "";
}
