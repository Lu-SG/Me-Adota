




setTimeout(async function setarDados() {
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

                document.getElementById('telefone').value = user.telefone;
                document.getElementById('estado').value = user.estado;
                document.getElementById('cidade').value = user.cidade;
                document.getElementById('bairro').value = user.bairro;
                document.getElementById('rua').value = user.rua;
                document.getElementById('numero').value = user.numero;
                document.getElementById('complemento').value = user.complemento;
                //preferencias
                document.getElementById('especie').value = user.especie_desejada;


                if(user.porte_desejado === 'P')
                {
                    const radioP = document.getElementById('porte_p');
                    radioP.checked = true;
                }
                if(user.porte_desejado === 'M')
                    {
                        const radioM = document.getElementById('porte_m');
                        radioM.checked = true;
                    }
                if(user.porte_desejado === 'G')
                {
                    const radioG = document.getElementById('porte_g');
                    radioG.checked = true;
                }
                if(user.porte_desejado === 'XG')
                {
                    const radioXG = document.getElementById('porte_xg');
                     radioXG.checked = true;
                }


                if(user.sexo_desejado === 'M')
                {
                    const radioM = document.getElementById('sexo_m');
                    radioM.checked = true;
                }
                if(user.sexo_desejado === 'F')
                {
                    const radioF = document.getElementById('sexo_f');
                     radioF.checked = true;
                }

                if(user.aceita_necessidade_especial === 'sim')
                    {
                        const radioNecS = document.getElementById('necessidade_sim');
                        radioNecS.checked = true;
                    }
                    if(user.aceita_necessidade_especial === 'nao')
                    {
                        const radioNecN = document.getElementById('necessidade_nao');
                         radioNecN.checked = true;
                    }

                if(user.aceita_doenca_cronica === 'sim')
                    {
                        const radioDocS = document.getElementById('doenca_sim');
                        radioDocS.checked = true;
                    }
                if(user.aceita_doenca_cronica === 'nao')
                {
                    const radioDocN = document.getElementById('doenca_nao');
                    radioDocN.checked = true;
                }


                if(user.ja_tem_outros_animais === 'sim')
                {
                    const radioAnS = document.getElementById('outros_sim');
                    radioAnS.checked = true;
                }
                if(user.ja_tem_outros_animais === 'nao')
                {
                    const radioAnN = document.getElementById('outros_nao');
                     radioAnN.checked = true;
                }
    
                


                if(user.tem_tempo_pro_animal === 'sim')
                    {
                        const radioTmpS = document.getElementById('tempo_sim');
                        radioTmpS.checked = true;
                    }
                    if(user.tem_tempo_pro_animal === 'nao')
                    {
                        const radioTmpN = document.getElementById('tempo_nao');
                         radioTmpN.checked = true;
                    }
            } 
            else 
            { 
                alert("Erro ao buscar dados."); 
            } 
        } catch (err) { 
            console.error("Erro ao buscar dados:", err); 
        }


        
}, 100);


async function atualizarUsuario(event) {
    const email = localStorage.getItem('emailUsuario');
    const API_URL_ATUALIZACAO = `http://localhost:3001/api/usuarios/atualizarUsuario/${email}`

    const telefone = document.getElementById('telefone').value;
    const estado = document.getElementById('estado').value;
    const cidade = document.getElementById('cidade').value;
    const bairro = document.getElementById('bairro').value;
    const rua = document.getElementById('rua').value;
    const numero = document.getElementById('numero').value;
    const complemento = document.getElementById('complemento').value;

    let especie_desejada = document.getElementById('especie').value;

    let portes = document.querySelectorAll('input[name="porte"]');
    let porte_desejado = '';
    for(const opcao1 of portes){
        if(opcao1.checked){
            porte_desejado = opcao1.value;
            break;
        }
    }

    let sexos = document.querySelectorAll('input[name="sexo"]');
    let sexo_desejado = '';
    for(const opcao of sexos){
        if(opcao.checked){
            sexo_desejado = opcao.value;
            break;
        }
    }

    let aceita_doencaBoolean = document.querySelectorAll('input[name="doenca"]');
    let aceita_doenca_cronica = '';
    for(const opcao of aceita_doencaBoolean){
        if(opcao.checked){
            aceita_doenca_cronica = opcao.value;
            break;
        }
    }

    let necessidade_especial_Boolean = document.querySelectorAll('input[name="necessidade"]');
    let aceita_necessidade_especial = '';
    for(const opcao of necessidade_especial_Boolean){
        if(opcao.checked){
            aceita_necessidade_especial = opcao.value;
            break;
        }
    }

    let ja_tem_outros_animais_Boolean = document.querySelectorAll('input[name="outros"]');
    let ja_tem_outros_animais = '';
    for(const opcao of ja_tem_outros_animais_Boolean){
        if(opcao.checked){
            ja_tem_outros_animais = opcao.value;
            break;
        }
    }

    let tem_tempo_pro_animal_Boolean = document.querySelectorAll('input[name="tempo"]');
    let tem_tempo_pro_animal = '';
    for(const opcao of tem_tempo_pro_animal_Boolean){
        if(opcao.checked){
            tem_tempo_pro_animal = opcao.value;
            break;
        }
    }
    event.preventDefault();


    function validarTelefone()
    {
        const phoneRegex = /^\(\d{2}\)\d{5}-\d{4}$/; 
        if (phoneRegex.test(telefone)) 
            { 
                return true; 
            } 
            else 
            { 
                alert('Número de telefone inválido. O formato correto é (00)00000-0000.');
                return false; 
            }
    }

    function validarNumero()
    {
        if (!isNaN(numero) && numero !== '') 
            { 
                return true; 
            } 
            else 
            { 
                alert('Número inválido. Por favor, insira um número.'); 
                 return false; 
            }
    }

    if(validarTelefone() == true && validarNumero() == true)
        {
            const updateUserData = { telefone, estado, cidade, bairro, rua, numero, complemento, especie_desejada, porte_desejado, sexo_desejado, aceita_necessidade_especial, aceita_doenca_cronica, ja_tem_outros_animais, tem_tempo_pro_animal, email };

            try {
                const response = await fetch(API_URL_ATUALIZACAO, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updateUserData)
            });
            if (response.ok) {
                alert("Mudanças Salvas com sucesso!");
            
                window.location.href = 'buscarAnimal.html';
            } else {
                alert("Erro ao salvar mudanças.");
            }
            } catch (err) {
            console.error("Erro ao Atualizar Dados:", err);
            }
        }
        else
        {
            event.preventDefault();
        }



}


async function excluirConta(){
    const email = localStorage.getItem('emailUsuario');
    const API_URL_EXCLUSAO = `http://localhost:3001/api/usuarios/excluirConta/${email}`;
    const valores = {email};

    const confirmar = confirm("Tem certeza que deseja excluir sua conta? Esta ação não pode ser desfeita.");

    if(confirmar)
    {
        try {
            const response = await fetch(API_URL_EXCLUSAO, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(valores)
        });
        if (response.ok) {
            alert("Conta Excluída com sucesso.");
        
            window.location.href = "index.html";
        } else {
            alert("Erro ao excluir conta.");
        }
        } catch (err) {
        console.error("Erro ao excluir conta:", err);
        }
    }
    
}




    




    
const botaoPerfil = document.getElementById('botao-perfil');
if(botaoPerfil){
    document.getElementById('botao-perfil').addEventListener('click', setarDados);
}
document.getElementById('form-usuario-atualizacao').addEventListener('submit', atualizarUsuario);
document.getElementById('excluir-conta').addEventListener('click', excluirConta);