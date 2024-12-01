const API_URL = `http://localhost:3001/api/usuarios/getUserByEmail`;

async function setarDados() {
    const teste = 'a';
    const Email = localStorage.getItem('emailUsuario');
    const valores = {Email, teste};
    try { 
        const response = await fetch(API_URL, { 
            method: 'POST', // Ajustado para GET 
            headers: { 'Content-Type': 'application/json' } ,
            body: JSON.stringify(valores)
        }); 
        if (response.ok) 
            { 
                const user = await response.json();
                alert(user);
                //window.location.href = 'AtualizarPerfil.html';
            } 
            else 
            { 
                alert("Erro ao buscar dados."); 
            } 
        } catch (err) { 
            console.error("Erro ao buscar dados:", err); 
        }
}


/*sync function AtualizarUsuario(event) {
    event.preventDefault();
}*/

document.addEventListener('DOMContentLoaded', () => {
    const botaoPerfil = document.getElementById('botao-perfil');
    if (botaoPerfil) {
      botaoPerfil.addEventListener('click', setarDados);
    }
  });

//document.getElementById('form-usuario').addEventListener('submit', AtualizarUsuario);
