const btnAdd = document.querySelector("#addBtn"); // Pega o botão

// Cria um evento de click para o botão, que irá executar a function anonima:
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

  // Botão Apagar
  const span = document.createElement("span"); // Cria um elemento span
  const icon = document.createTextNode("\u00D7"); // Adiciona um texto no HTML que é o código do icone X, porém em formato para JS
  span.className = "close"; // Adiciona a classe close a essa span
  span.appendChild(icon); // Insere o icon na span
  li.appendChild(span); // Insere a span na li criada

  // Apagar uma tarefa
  const close = document.querySelectorAll(".close"); // Captura todas as spans de fechar

  // Varre a lista de spanas e verifica uma por uma, qual foi clicada
  for (let i = 0; i < close.length; i++) {
    close[i].addEventListener("click", function () {
      const li = this.parentElement; // Captura a tag pai dessa (this) tag span, no caso a li
      li.style.display = "none"; // Muda o display da li para "none" fazendo ela sumir da tela.
    });
  }
});

// Marcar como "tarefa feita"
const list = document.querySelector("ul"); // Captura a lista inteira

// Ao clicar na lista a minha função recebe um evento
list.addEventListener("click",  (ev) => {
  // Se o nome do item que eu cliquei na lista foi "LI"
  if (ev.target.nodeName === "LI") {
    ev.target.classList.toggle("checked"); // Adiciona nesse elemento a classe "checked"
  }
});
