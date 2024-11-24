// URL do backend
const API_URL = 'http://localhost:3001/api/animais';


// Função para buscar e exibir todos os animais
/*async function fetchAnimals() {
    try {
        const response = await fetch(API_URL);
        const animals = await response.json();
        
        const animalList = document.getElementById('animalList');
        animalList.innerHTML = '';

        animals.forEach(animal => {
            const animalCard = document.createElement('div');
            animalCard.classList.add('animal-card');
            animalCard.innerHTML = `
                <h3>${animal.nome}</h3>
                <p>Espécie: ${animal.especie}</p>
                <p>Raça: ${animal.raca}</p>
                <p>Idade: ${animal.idade}</p>
                <p>Porte: ${animal.porte}</p>
                <p>Sexo: ${animal.sexo}</p>
                <p>Número: ${animal.numero}</p>
                <p>Bairro: ${animal.bairro}</p>
                <p>Cidade: ${animal.cidade}</p>
                <p>Estado: ${animal.estado}</p>
                <p>CEP: ${animal.cep}</p>
                <p>Data de Resgate: ${animal.data_resgate}</p>
                <p>Convivência: ${animal.convivencia ? 'Sim' : 'Não'}</p>
                <p>Doença Crônica: ${animal.doenca_cronica ? 'Sim' : 'Não'}</p>
                <p>Descrição Geral: ${animal.desc_geral}</p>
                
            `;
            animalList.appendChild(animalCard);
        });
    } catch (err) {
        console.error("Erro ao buscar animais:", err);
    }
}*/

// Função para adicionar um novo animal
async function addAnimal(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    let raca = document.getElementById('raca-animal').value;
    const idade = document.getElementById('idade').value;
    const data_resgate = document.getElementById('data-resgate-input').value;

    const cidade = document.getElementById('cidade').value;
    const estado = document.getElementById('estado').value;
    const rua = document.getElementById('rua').value;
    const numero = document.getElementById('numero').value;
    const complemento = document.getElementById('complemento').value;


    const especie = document.getElementById('especie-animal').value;


    const portes = document.querySelectorAll('input[name="porte-animal"]');

    let porte = '';

    for(const opcao1 of portes){
        if(opcao1.checked){
            porte = opcao1.value;
            break;
        }
    }





    let sexos = document.querySelectorAll('input[name="sexo"]');
    
    let sexo = '';
    
    for(const opcao of sexos){
        if(opcao.checked){
            sexo = opcao.value;
            break;
        }
    }

    let doencaBoolean = document.querySelectorAll('input[name="doenca-cronica"]');
    
    let doenca_cronica = '';
    
    for(const opcao of doencaBoolean){
        if(opcao.checked){
            doenca_cronica = opcao.value;
            break;
        }
    }

    let necessidadeAtencaoBoolean = document.querySelectorAll('input[name="atencao"]');
    
    let necessidade_atencao = '';
    
    for(const opcao of necessidadeAtencaoBoolean){
        if(opcao.checked){
            necessidade_atencao = opcao.value;
            break;
        }
    }

    let convivenciaBoolean = document.querySelectorAll('input[name="convivencia"]');
    
    let convivencia = '';
    
    for(const opcao of convivenciaBoolean){
        if(opcao.checked){
            convivencia = opcao.value;
            break;
        }
    }

    let necessidadeBoolean = document.querySelectorAll('input[name="necessidade"]');
    
    let necessidade_especial = '';
    
    for(const opcao of necessidadeBoolean){
        if(opcao.checked){
            necessidade_especial = opcao.value;
            break;
        }
    }

    raca = String(raca).charAt(0).toUpperCase() + String(raca).slice(1).toLowerCase();

    



    const newAnimal = { nome, idade, especie, raca, sexo, porte, numero, rua, cidade, estado, complemento, data_resgate, convivencia, doenca_cronica, necessidade_especial, necessidade_atencao };

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newAnimal)
        });
        if (response.ok) {
            
            alert("Animal cadastrado com sucesso!");
        } else {
            alert("Erro ao cadastrar animal.");
        }
    } catch (err) {
        console.error("Erro ao adicionar animal:", err);
    }
}




// Carrega os animais ao abrir a página

// Adiciona evento para o formulário

document.getElementById('form-animal').addEventListener('submit', addAnimal);


