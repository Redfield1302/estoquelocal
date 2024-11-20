document.addEventListener("DOMContentLoaded", function() {
    const loginContainer = document.getElementById("login");
    const mainContent = document.getElementById("main-content");
    const loginButton = document.getElementById("login-btn");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const loginError = document.getElementById("login-error");

    const validUsername = "admin"; // Usuário fixo para exemplo
    const validPassword = "12345"; // Senha fixa para exemplo

    loginButton.addEventListener("click", function() {<!DOCTYPE html>
        <html lang="pt-BR">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Login - Estoque da Pizzaria</title>
            <link rel="stylesheet" href="login.css">
        </head>
        <body>
            <div class="login-container">
                <h2>Login</h2>
                <form id="login-form" onsubmit="return handleLogin(event)">
                    <input type="text" id="username" placeholder="Usuário" required>
                    <input type="password" id="password" placeholder="Senha" required>
                    <button type="submit">Entrar</button>
                </form>
            </div>
            <script>
                function handleLogin(event) {
                    event.preventDefault();
                    const username = document.getElementById('username').value;
                    const password = document.getElementById('password').value;
        
                    // Substitua estas credenciais pela lógica do seu sistema
                    if (username === 'admin' && password === 'senha123') {
                        alert('Login bem-sucedido!');
                        window.location.href = 'index.html'; // Redirecionar para a página de estoque
                    } else {
                        alert('Usuário ou senha incorretos!');
                    }
                }
            </script>
        </body>
        </html>
        
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        if (username === validUsername && password === validPassword) {
            // Armazena uma informação no local storage para verificar se o usuário está logado
            localStorage.setItem("loggedIn", "true");
            // Redireciona para a página principal
            window.location.href = "index.html";
        } else {
            loginError.style.display = "block";
        }
    });

    function carregarItens() {
        // Adicione o código para carregar itens aqui, se necessário
    }
});
