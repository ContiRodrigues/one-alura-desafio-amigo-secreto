//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
  let novoAmigo = document.getElementById('amigo').value;

  if (novoAmigo == '') {
    alert('Por favor, insira um nome.');
  } 
  
  if (amigos.includes(novoAmigo)) {
    alert('Esse amigo já foi inserido.');
  } else {
    amigos.push(novoAmigo);
  }

  limparCampo();
  listarAmigos();
}

function limparCampo() {
  amigo = document.getElementById('amigo');
  amigo.value = '';
}

function listarAmigos() {
  let listaDeAmigos = document.getElementById('listaAmigos');
  
  if (amigos.length > 0) {
    listaDeAmigos.innerHTML = '';
    for (i = 0; i < amigos.length; i++) {
      let li = document.createElement('li');
      li.textContent = amigos[i];
      listaDeAmigos.appendChild(li);
    }
  }
}

function sortearAmigo() {
  if (amigos.length > 0) {
    let amigoSorteado = Math.floor(Math.random() * amigos.length);
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `O amigo secreto sorteado é: ${amigos[amigoSorteado]}`;
  }
}