
const API_URL_USUARIO = 'http://localhost:3001/api/usuarios/checkEmail';


async function checkEmail(event) {
    event.preventDefault();


    let senha = document.getElementById('senha').value;
    let email = document.getElementById('email').value;

    const valores = {email, senha};


    try {
        const response = await fetch(API_URL_USUARIO, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(valores)
        });
        if (response.ok) {
            alert("Usuário logado com sucesso!");
        } else {
            alert("Erro ao logar Usuário.");
        }
    } catch (err) {
        console.error("Erro ao logar Usuário:", err);
    }
}







document.getElementById('login-form').addEventListener('submit', checkEmail)