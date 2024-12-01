

try { 
    const emailUsuario = localStorage.getItem('emailUsuario');
    const response = await fetch(`http://localhost:3001/api/usuarios/${emailUsuario}`, { 
        method: 'GET', // Ajustado para GET 
        headers: { 'Content-Type': 'application/json' } 
    }); 
    if (response.ok) 
            { 
                const usuario = await response.json();
                const telefone = document.getElementById('telefone').value = usuario.telefone;
                    
                
            } 
            else 
            { 
                alert("Erro ao buscar dados."); 
            } 
        } catch (err) { 
            console.error("Erro ao buscar dados:", err); 
        }







async function AtualizarUsuario(event) {
    event.preventDefault();
    alert(emailUsuario);
}


document.getElementById('form-usuario').addEventListener('submit', AtualizarUsuario);
