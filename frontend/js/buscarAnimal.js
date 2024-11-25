
async function buscarDados()
{
    const API_URL_ANIMAIS = 'http://localhost:3001/api/animais';
    const API_URL_USUARIO = 'http://localhost:3001/api/usuarios';
    const API_URL_COMPATIBILIDADE = 'http://localhost:3001/api/compatibilidade_usuarios_animais';

    //pegando usuarios
    try {
        const response = await fetch(API_URL_USUARIO, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            const usuarios = await response.json(); 
            console.log("Usuários:", usuarios); 
            // Aqui você pode fazer o que quiser com os dados dos usuários, como exibi-los na interface
        } else {
            alert("Erro ao buscar Usuário.");
        }
    } catch (err) {
        console.error("Erro ao buscar usuários:", err);    }

        //pegando animais
        try {
            const response = await fetch(API_URL_ANIMAIS, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            });
            if (response.ok) {
                const usuarios = await response.json(); 
                console.log("Animais:", usuarios); 
                // Aqui você pode fazer o que quiser com os dados dos usuários, como exibi-los na interface
            } else {
                alert("Erro ao buscar Animais.");
            }
        } catch (err) {
            console.error("Erro ao buscar Animais:", err);    }
    

            //pegando compatibilidade
            try {
                const response = await fetch(API_URL_COMPATIBILIDADE, {
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json' },
                });
                if (response.ok) {
                    const compatibilidade = await response.json(); 
                    console.log("compatibilidade:", compatibilidade); 
                    // Aqui você pode fazer o que quiser com os dados dos usuários, como exibi-los na interface
                } else {
                    alert("Erro ao buscar compatibilidade.");
                }
            } catch (err) {
                console.error("Erro ao buscar compatibilidade:", err);   
            }
        
            const id_usuario_txt = document.getElementById('id_usuario');
            const id_usuario = Number(id_usuario_txt);


            try {
                const response = await fetch(API_URL_COMPATIBILIDADE, {
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json' },
                });
                if (response.ok) {
                    const compatibilidade = await response.json(); 
                    console.log("compatibilidade:", compatibilidade); 
                    // Aqui você pode fazer o que quiser com os dados dos usuários, como exibi-los na interface
                } else {
                    alert("Erro ao buscar compatibilidade.");
                }
            } catch (err) {
                console.error("Erro ao buscar compatibilidade:", err);   
            }






}






document.getElementById("buscarAnimal").addEventListener("click", buscarDados);