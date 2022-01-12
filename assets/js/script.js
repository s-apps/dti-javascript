window.addEventListener('load', start);

var nomeGeral = "Banana";

function start(){
    console.log('HELLO');
}

function handleEnviar(){
    event.preventDefault();
    var nome = document.getElementById('nome');
    var h1 = document.querySelector('h1');
    h1.textContent = nomeGeral; //nome.value;
    h1.classList.add('Destaque');
    var lista = document.getElementById('lista');
    var novoItem = document.createElement('li');
    novoItem.textContent = nome.value;
    lista.appendChild(novoItem);
}