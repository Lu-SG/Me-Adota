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

export async function addUser(req, res) {
    const userData = req.body; // Obtém os dados do corpo da requisição

    try {
        await model.addUser(userData);
        res.status(201).json({ message: "Usuário cadastrado com sucesso!" }); // Retorna status 201 (criado)
    } catch (err) {
        console.error("Erro ao cadastrar Usuário:", err);
        res.status(500).json({ message: "Erro ao cadastrar Usuário." });
    }
}

export async function getAllUsers(req, res){
    try {
        const users = await model.getUsers();
        res.status(200).json(users); // Retorna a lista de usuarios com status 200 (sucesso)
    } catch (err) {
        console.error("Erro ao buscar usuarios:", err);
        res.status(500).json({ message: "Erro ao buscar usuarios" });
    }

}



// Controlador para calcular a compatibilidade 
export async function calcularCompatibilidade(req, res) { 
    const { id_usuario } = req.params;
    try { 
        const usuario = await model.getUsuarioById(id_usuario); 
        const animais = await model.getAnimals();
        const resultados = animais.map(animal => { 
            const compatibilidade = model.calcularCompatibilidade(usuario, animal); 
            console.log(`Compatibilidade entre ${usuario.nome} e ${animal.nome}:`, compatibilidade); 
            return { ...animal, compatibilidade }; });
        
        if (!resultados || resultados.length === 0) 
        { 
            console.error('Nenhum resultado foi gerado'); 
            return res.status(500).json({ 
                error: 'Nenhum resultado foi gerado' 
            }); 
        }
        
        console.log('Resultados de compatibilidade antes de ordenar:', resultados);
        const animaisCompativeis = resultados.sort((a, b) => b.compatibilidade - a.compatibilidade); 
        res.json(animaisCompativeis); 
    } catch (err) { 
        console.error('Erro ao calcular compatibilidade:', err); 
        res.status(500).json({ error: 'Erro ao calcular compatibilidade' });
    } 
}



