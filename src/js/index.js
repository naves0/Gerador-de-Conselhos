document.getElementById("btn-gerar-conselho").addEventListener("click", () => {
    gerarUmConselhoAleatorio();
});

async function criarUmConselhoAleatorio() {
    try {
        const resposta = await fetch("https://api.adviceslip.com/advice");
        return await resposta.json();
    } catch (error) {
        console.log("Ocorreu um erro inexperado ao tentar buscar informações na API", error);
    }
};

async function gerarUmConselhoAleatorio() {
    try {
        const conselho = await criarUmConselhoAleatorio();
        const idConselho = conselho.slip.id;
        const mensagemConselho = conselho.slip.advice;
        document.querySelector(".conselho").innerText = `Advice #${idConselho}`;
        document.querySelector(".descricao-conselho").innerText = `"${mensagemConselho}"`;
    } catch (error) {
        console.log("Houve um problema no meio da aplicação da API", error);
    }
};

gerarUmConselhoAleatorio();