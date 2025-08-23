// Exemplo de interação com o painel admin (login)
document.getElementById('admin-login').addEventListener('submit', function(e) {
    e.preventDefault();
    var user = document.getElementById('user').value;
    var password = document.getElementById('password').value;

    if (user === 'Dk' && password === 'mateus*14') {
        alert('Bem-vindo, Dk!');
    } else if (user === 'ytheus' && password === 'Ytcampinas') {
        alert('Bem-vindo, ytheus!');
    } else {
        alert('Usuário ou senha inválidos');
    }
});
