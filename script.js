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
  const li = document.createElement("li"); // Cria elemento li novo
  const inputValue = document.querySelector("#myInput").value; // Pega texto digitado no input
  const taskText = document.createTextNode(inputValue); // Add o texto do input na const taskText
  li.appendChild(taskText); // Adiciona o texto na li

  // Verifica se o input está vazio
  if (inputValue === "") {
    alert("Você deve digitar algum texto para adicionar!");
  } else {
    document.getElementById("myUL").appendChild(li); // Add a li na ul
  }

  document.querySelector("#myInput").value = ""; // Zera o input

  // Cria um btn de apagar para cada li, com um icon X
  const span = document.createElement("span");
  const icon = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(icon);
  li.appendChild(span);
  
  // Se o botão de apagar for clicado, ele muda o display da li para none, fazendo ela sumir da tela
  const close = document.getElementsByClassName("close");
  for (let i = 0; i < close.length; i++) {
    close[i].addEventListener("click", function () {
      const div = this.parentElement;
      div.style.display = "none";
    });
  }
});
