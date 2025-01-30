
/* 
Objetivo 1 - Quando clicarmos na setinha de avançar, temos que mostrar o proxima cartão da lista.
- Passo 1: Dar um jeito de pegar o elemento html da seta avanvar
- Passo 2: dar um jeito de identificar o clique do usuário sobre o cartão
- PAsso 3 - Fazer aparecer o próximo cartão da lista
PAsso 4 - Buscar o cartão que está selecionado e esconder */

/* Objetivo 2 - Quando clicar na seta voltar, tem que aparecer o cartão anterior da lista
 - PAsso 1: dar um jeito de pegar o elemento html do botao voltar. 
 - PAsso 2: dar um jeito que reconhecer o clique de um usuãrio 
 - passo 3: fazer aparecer a carta anterior
 - passo 4: Buscar o cartão que está selecionado e esconder
*/

// Objetivo 1 - Fazer as cartas avançarem. 

// Passo 1: dar um jeito de pegar o o elemento html da seta avancar
const btnAvancar = document.getElementById("btn-avancar");
const cartoes = document.querySelectorAll(".cartao");
let cartaoAtual = 0;
const btnVoltar = document.getElementById("btn-voltar")
// Passo 2: Dar um jeito de identidicar o clique do usuário na seta 
btnAvancar.addEventListener("click", function () {

    if (cartaoAtual === cartoes.length - 1) return;

    //PAsso 4 - Buscar o cartão que está selecionado e esconder
    esconderCartaoSelecionado();

    // Passo 3: Fazer a carta avancar
    cartaoAtual++;
    cartoes[cartaoAtual].classList.add("selecionado");
});

btnVoltar.addEventListener("click", function () {
    if (cartaoAtual === 0) return;

    esconderCartaoSelecionado();

    cartaoAtual--;
    cartoes[cartaoAtual].classList.add("selecionado")
})

function esconderCartaoSelecionado() {
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove('selecionado');
}

