const btnSubmit = document.querySelector('#btnSubmit'),
inViewPassword = document.querySelector('#inViewPassword');

btnSubmit.addEventListener('click', function() 
{ /* VALIDAÇÃO DO FORMULÁRIO */

    // Variáveis padrão:
    const nome = document.getElementById('inNome').value,
    email = document.getElementById('inEmail').value,
    senha = document.getElementById('inSenha').value;

    // Expressão regular do e-mail:
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    // Validando os campos de nome e senha:
    if (nome === '' || email === '' || senha === '') {
        alert('ERRO 101: \nCertifique-se de preencher todos os campos!')
    } else if (senha.length > 8) {
        alert('ERRO 102: \nLimite de caracteres excedido! Sua senha ultrapassou o limite de 8 caracteres. Experimente encurtar o tamanho da sua senha.')
    } else if(!emailRegex.test(email)) {
        alert('ERRO 100: \nO e-mail inserido é inválido. Por favor, verifique se ele contêm um único arroba (@) e domínio (exemplo: .com), respectivamente.')
    }
})

inViewPassword.addEventListener('click', function()
{ /* ALTERAR VISIBILIDADE DA SENHA */
    
    // Chamar campo de preenchimento da senha:
    const inSenha  = document.getElementById('inSenha');

    if(inSenha.type === 'password') {
        inSenha.type = 'text'
    } else {
        inSenha.type = 'password'
    }
})