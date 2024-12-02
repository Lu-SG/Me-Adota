

async function setarDados() {
    const email = localStorage.getItem('emailUsuario');
    const valores = {email};
    const API_URL_DADOS = `http://localhost:3001/api/usuarios/setarDados/${email}`;
    try { 
        const response = await fetch(API_URL_DADOS, { 
            method: 'POST',  
            headers: { 'Content-Type': 'application/json' } ,
            body: JSON.stringify(valores)
        }); 
        if (response.ok) 
            { 
                const user = await response.json();

                const userData = JSON.stringify(user);

                let telefone = document.getElementById('telefoneATT').value;
                telefone = user.telefone;
                alert(user.telefone);
                
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


    


//document.getElementById('form-usuario').addEventListener('submit', AtualizarUsuario);
