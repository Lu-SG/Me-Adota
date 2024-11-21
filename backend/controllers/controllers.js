import * as model from '../models/model.js';

// Controller para buscar todos os animais
export async function getAllAnimals(req, res) {
    try {
        const animals = await model.getAnimals();
        res.status(200).json(animals); // Retorna a lista de animais com status 200 (sucesso)
    } catch (err) {
        console.error("Erro ao buscar animais:", err);
        res.status(500).json({ message: "Erro ao buscar animais" });
    }
}

// Controller para adicionar um novo animal
export async function addAnimal(req, res) {
    const animalData = req.body; // Obtém os dados do corpo da requisição

    try {
        await model.addAnimal(animalData);
        res.status(201).json({ message: "Animal cadastrado com sucesso!" }); // Retorna status 201 (criado)
    } catch (err) {
        console.error("Erro ao cadastrar animal:", err);
        res.status(500).json({ message: "Erro ao cadastrar animal" });
    }
}

// Controller para buscar um animal por ID
export async function getAnimalById(req, res) {
    const { id } = req.params; // Obtém o ID da rota

    try {
        const animal = await model.findAnimalById(id); // Chama a função do model
        if (animal) {
            res.status(200).json(animal); // Retorna o animal com status 200
        } else {
            res.status(404).json({ message: "Animal não encontrado" }); // Animal não encontrado
        }
    } catch (err) {
        console.error("Erro ao buscar animal por ID:", err);
        res.status(500).json({ message: "Erro ao buscar animal" }); // Erro ao processar a requisição
    }
}
