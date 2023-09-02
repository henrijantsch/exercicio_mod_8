const form  = document.getElementById('form-atividade');
let linhas = '';

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputContatoAtividade = document.getElementById('numero-atividade');

    let linha = '<tr>';
    linha +=`<td>${inputNomeAtividade.value}</td>`;
    linha +=`<td>${inputContatoAtividade.value}</td>`;
    linha += '</tr>';

    linhas += linha;

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

    inputNomeAtividade = '';
    inputContatoAtividade = '';
});


