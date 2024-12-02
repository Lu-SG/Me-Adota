

async function getAnimalById(event) {
    event.preventDefault();

    const id_animal_txt = document.getElementById('id-animal').value;
    const id_animal = Number(id_animal_txt);
    const API_URL_SELECIONAR = `http://localhost:3001/api/animais/${id_animal}`;

    try {
        const response = await fetch(API_URL_SELECIONAR, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            const animal = await response.json();
            
            const animalString = JSON.stringify(animal);
            localStorage.setItem('animal', animalString);

            localStorage.setItem('id_animal', id_animal);
           // alert(animal.nome);

            window.location.href = 'atualizarAnimal.html';

        } else {
            alert("Id não existente");
        }
    } catch (err) {
        console.error("Erro ao achar animal por id:", err);
    }



}




document.getElementById('form-animal').addEventListener('submit', getAnimalById);