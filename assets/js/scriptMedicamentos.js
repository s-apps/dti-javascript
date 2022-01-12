var totalDeMedicamentos = document.getElementById('total');
var listaDeMedicamentos = document.getElementById('lista');
var medicamento = document.getElementById('medicamento');
var preco = document.getElementById('preco');
var total = 0;

window.addEventListener('load', () => {
    totalDeMedicamentos.textContent = 0;
    listaDeMedicamentos.textContent = '';
});

window.addEventListener('submit', (e) => {
    e.preventDefault();
    incluir();
});

function incluir(){
    if (medicamento.value === '' || preco.value === ''){
        alert('Preencha os campos');
        return;
    }

    var novoMedicamento = document.createElement('li');
    novoMedicamento.setAttribute('id', 'medicamento' + total);
    novoMedicamento.innerHTML = `${medicamento.value} - ${preco.value} - <a href="#" onclick="excluir(${total})">Excluir</a>`;

    listaDeMedicamentos.appendChild(novoMedicamento);

    totalDeMedicamentos.textContent = ++total;
    medicamento.value = '';
    preco.value = '';
    medicamento.focus();
}

function excluir(indice){
    var medicamento = document.getElementById('medicamento' + indice);
    medicamento.remove();
    totalDeMedicamentos.textContent = --total;
}