
const API_URL = 'http://localhost:3001/api/usuarios';

async function addUser(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const senha = document.getElementById('senha').value;
    const estado = document.getElementById('estado').value;
    const cidade = document.getElementById('cidade').value;
    const bairro = document.getElementById('bairro').value;
    const rua = document.getElementById('rua').value;
    const numero = document.getElementById('numero').value;
    const complemento = document.getElementById('complemento').value;


    //Preferências

    const especie_desejada = document.getElementById('especie').value;



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

    const newUser = { nome, email, telefone, senha, estado, cidade, bairro, rua, numero, complemento, especie_desejada, porte_desejado, sexo_desejado, aceita_necessidade_especial, aceita_doenca_cronica, ja_tem_outros_animais, tem_tempo_pro_animal };

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newUser)
        });
        if (response.ok) {
            
            alert("Usuário cadastrado com sucesso!");
        } else {
            alert("Erro ao cadastrar Usuário.");
        }
    } catch (err) {
        console.error("Erro ao adicionar Usuário:", err);
    }

}

document.getElementById('form-usuario').addEventListener('submit', addUser);

