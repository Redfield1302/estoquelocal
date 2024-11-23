document.addEventListener("DOMContentLoaded", function() {
    const quantidadeInput = document.getElementById("new-item-quantity");
    const categoriaSelect = document.getElementById("item-category");
    const videoContainer = document.getElementById("video-container");
    const leitorBtn = document.getElementById("leitor-btn");

    // Configurar e iniciar o Quagga.js
    function iniciarLeitor() {
        Quagga.init({
            inputStream: {
                name: "Live",
                type: "LiveStream",
                target: videoContainer, // Onde o vídeo será exibido
            },
            decoder: {
                readers: ["ean_reader"], // Tipos de códigos de barras que serão lidos
            },
        }, function(err) {
            if (err) {
                console.error(err);
                alert("Erro ao iniciar o leitor.");
                return;
            }
            Quagga.start();
        });

        // Listener para quando um código de barras for detectado
        Quagga.onDetected(function(result) {
            const codigo = result.codeResult.code;
            if (codigo) {
                Quagga.stop(); // Para o leitor após detectar o código
                buscarItemPorCodigo(codigo); // Buscar o item pelo código
            }
        });
    }

    // Função para buscar o item pelo código de barras (substitua com sua lógica real)
    function buscarItemPorCodigo(codigo) {
        // Aqui você pode usar o código para buscar o item de um banco de dados ou de uma lista local.
        const itemEncontrado = {
            nome: `Produto ${codigo}`, // Nome fictício para exemplo
            quantidade: 1, // Quantidade inicial
        };

        // Atualiza os campos de entrada com os dados do item
        document.getElementById("new-item-name").value = itemEncontrado.nome;
        quantidadeInput.value = itemEncontrado.quantidade;
    }

    // Inicializa o leitor ao clicar no botão
    leitorBtn.addEventListener("click", function() {
        videoContainer.style.display = "block"; // Mostra o contêiner do vídeo
        iniciarLeitor();
    });
});
