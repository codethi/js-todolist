// Adicione um símbolo de "marcado" ao clicar em um item da lista
const list = document.querySelector("ul");
list.addEventListener("click", function (ev) {
  if (ev.target.nodeName === "LI") {
    ev.target.classList.toggle("checked");
  }
});

// Crie um novo item da lista ao clicar no botão "Adicionar"
const btnAdd = document.querySelector("#addBtn");

btnAdd.addEventListener("click", function () {
  const li = document.createElement("li");
  const inputValue = document.querySelector("#myInput").value;
  const taskText = document.createTextNode(inputValue);
  li.appendChild(taskText);
  
  if (inputValue === "") {
    alert("Você deve digitar algum texto para adicionar!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.querySelector("#myInput").value = "";

  const span = document.createElement("span");
  const txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  const close = document.getElementsByClassName("close");
  for (let i = 0; i < close.length; i++) {
    close[i].addEventListener("click", function () {
      const div = this.parentElement;
      div.style.display = "none";
    });
  }
});
