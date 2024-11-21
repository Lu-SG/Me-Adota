// URL do backend
const API_URL = 'http://localhost:3001/api/animais';

// Função para buscar e exibir todos os animais
async function fetchAnimals() {
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
                <p>Castrado: ${animal.castrado ? 'Sim' : 'Não'}</p>
                <p>Número: ${animal.numero}</p>
                <p>Bairro: ${animal.bairro}</p>
                <p>Cidade: ${animal.cidade}</p>
                <p>Estado: ${animal.estado}</p>
                <p>CEP: ${animal.cep}</p>
                <p>Data de Resgate: ${animal.data_resgate}</p>
                <p>Convivência: ${animal.convivencia ? 'Sim' : 'Não'}</p>
                <p>Doença Crônica: ${animal.doenca_cronica ? 'Sim' : 'Não'}</p>
                <p>Doença Transmissível: ${animal.doenca_transmissivel ? 'Sim' : 'Não'}</p>
                <p>Necessidade de Tratamento: ${animal.necessidade_tratamento ? 'Sim' : 'Não'}</p>
                <p>Descrição Geral: ${animal.desc_geral}</p>
                <p>Espécie: ${animal.especie}</p>
                <p>Raça: ${animal.raca}</p>
                <p>Idade: ${animal.idade}</p>
                <p>Porte: ${animal.porte}</p>
                <p>Sexo: ${animal.sexo}</p>
                <p>Castrado: ${animal.castrado ? 'Sim' : 'Não'}</p>
                <p>Número: ${animal.numero}</p>
                <p>Bairro: ${animal.bairro}</p>
                <p>Cidade: ${animal.cidade}</p>
                <p>Estado: ${animal.estado}</p>
                <p>CEP: ${animal.cep}</p>
                <p>Data de Resgate: ${animal.data_resgate}</p>
                <p>Convivência: ${animal.convivencia ? 'Sim' : 'Não'}</p>
                <p>Doença Crônica: ${animal.doenca_cronica ? 'Sim' : 'Não'}</p>
                <p>Doença Transmissível: ${animal.doenca_transmissivel ? 'Sim' : 'Não'}</p>
                <p>Necessidade de Tratamento: ${animal.necessidade_tratamento ? 'Sim' : 'Não'}</p>
                <p>Descrição Geral: ${animal.desc_geral}</p>
            `;
            animalList.appendChild(animalCard);
        });
    } catch (err) {
        console.error("Erro ao buscar animais:", err);
    }
}

// Função para adicionar um novo animal
async function addAnimal(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const especie = document.getElementById('especie').value;
    const raca = document.getElementById('raca').value;
    const idade = document.getElementById('idade').value;
    const porte = document.getElementById('porte').value;

    const newAnimal = { nome, especie, raca, idade, porte };

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newAnimal)
        });
        if (response.ok) {
            document.getElementById('animalForm').reset();
            fetchAnimals(); // Atualiza a lista após adicionar
            alert("Animal cadastrado com sucesso!");
        } else {
            alert("Erro ao cadastrar animal.");
        }
    } catch (err) {
        console.error("Erro ao adicionar animal:", err);
    }
}

// Carrega os animais ao abrir a página
document.addEventListener('DOMContentLoaded', fetchAnimals);

// Adiciona evento para o formulário
document.getElementById('animalForm').addEventListener('submit', addAnimal);
