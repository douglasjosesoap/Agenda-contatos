const form = document.getElementById('form-cadastro');
const cadastro = [];
const telefone = [];
let linhas = '';

/* Impedir que a página atualize automaticamente */

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();


})

/* Adiciona linha nova no programa */

function adicionaLinha() {
    const inputNomeCadastro = document.getElementById('nome-cadastro');
    const inputTelefoneCadastro = document.getElementById('telefone-cadastro');

    if (cadastro.includes(inputNomeCadastro.value)||telefone.includes(inputTelefoneCadastro.value)) {

        alert( `Nome ou telefone duplicado! Favor corrigir`);

    } else {
        cadastro.push(inputNomeCadastro.value);
        telefone.push(inputTelefoneCadastro.value);

        let linha = '<tr>'
        linha += `<td>${inputNomeCadastro.value}</td>`;
        linha += `<td>${inputTelefoneCadastro.value}</td>`;
        linha += '</td>'

        linhas += linha;
    }

    inputNomeCadastro.value = '';
    inputTelefoneCadastro.value = '';
}

/* Função para atualizar tabela */

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}