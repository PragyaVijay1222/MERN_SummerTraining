document.getElementById("button").onclick = function () {
  const data = document.getElementById("text").value;
  const todo = document.createElement("li");
  const text = document.createTextNode(data);
  todo.appendChild(text);
  if(data != ""){
  document.getElementById("ulist").appendChild(todo);
  }
  document.getElementById("text").value = "";
};
