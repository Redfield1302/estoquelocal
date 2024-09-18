document.addEventListener("DOMContentLoaded", function() {
    const quantidadeInput = document.getElementById("quantidade-item");
    const adicionarBtn = document.getElementById("adicionar-btn");
    const novoItemInput = document.getElementById("novo-item");
    const lista = document.getElementById("lista");
    
    // Função para carregar itens
    function carregarItens() {
        const itens = JSON.parse(localStorage.getItem("estoque")) || [];
        itens.forEach(item => adicionarItemNaLista(item.nome, item.quantidade));
    }

    // Função para salvar o estoque no local storage
    function salvarItens() {
        const itens = [];
        lista.querySelectorAll("li").forEach(item => {
            const nome = item.querySelector(".nome").textContent;
            const quantidade = parseInt(item.querySelector(".quantidade").textContent, 10);
            itens.push({ nome, quantidade });
        });
        localStorage.setItem("estoque", JSON.stringify(itens));
    }

    // Função para adicionar um item na lista
    function adicionarItemNaLista(nome, quantidade) {
        const novoItem = document.createElement("li");
        novoItem.innerHTML = `
            <span class="nome">${nome}</span> -
            <span class="quantidade">${quantidade}</span>
            <button class="editar">Editar</button>
            <button class="remover">Remover</button>
        `;

        // Botão de remover
        novoItem.querySelector(".remover").addEventListener("click", function() {
            novoItem.remove();
            salvarItens();
        });

        // Botão de editar
        novoItem.querySelector(".editar").addEventListener("click", function() {
            const novaQuantidade = prompt("Edite a quantidade do item", quantidade);
            if (novaQuantidade && !isNaN(novaQuantidade)) {
                novoItem.querySelector(".quantidade").textContent = novaQuantidade;
                salvarItens();
            }
        });

        lista.appendChild(novoItem);
    }

    // Ao clicar no botão adicionar
    adicionarBtn.addEventListener("click", function() {
        const nome = novoItemInput.value.trim();
        const quantidade = parseInt(quantidadeInput.value, 10);

        if (nome === "" || isNaN(quantidade) || quantidade <= 0) {
            alert("Por favor, preencha todos os campos corretamente.");
            return;
        }

        adicionarItemNaLista(nome, quantidade);
        salvarItens();

        // Limpa os campos de entrada
        novoItemInput.value = "";
        quantidadeInput.value = "";
    });

    // Chama a função para carregar itens ao carregar a página
    carregarItens();
});
