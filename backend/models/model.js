import { executeQuery } from './db.js';

// Função para buscar todos os animais
export async function getAnimals() {
    const query = `SELECT * FROM animais`;
    try {
        const result = await executeQuery(query);
        return result.rows; // Retorna todos os animais
    } catch (err) {
        console.error("Erro ao buscar animais:", err);
        throw err;
    }
}

// Função para adicionar um novo animal
export async function addAnimal(animal) {
    const query = `
        INSERT INTO animais (fk_id_protetor, fk_id_tutor, nome, idade, especie, raca, sexo, porte, castrado, numero, bairro, cidade, estado, cep, data_resgate, convivencia, doenca_cronica, doenca_transmissivel, necessidade_tratamento, desc_geral)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20)`;
    const params = [
        animal.fk_id_protetor,
        animal.fk_id_tutor,
        animal.nome,
        animal.idade,
        animal.especie,
        animal.raca,
        animal.sexo,
        animal.porte,
        animal.castrado,
        animal.numero,
        animal.bairro,
        animal.cidade,
        animal.estado,
        animal.cep,
        animal.data_resgate,
        animal.convivencia,
        animal.doenca_cronica,
        animal.doenca_transmissivel,
        animal.necessidade_tratamento,
        animal.desc_geral
    ];
    try {
        await executeQuery(query, params);
        console.log("Animal cadastrado com sucesso!");
    } catch (err) {
        console.error("Erro ao cadastrar animal:", err);
        throw err;
    }
}

// Função para buscar um animal por ID
export async function findAnimalById(id) {
    const query = `SELECT * FROM animais WHERE id = $1`;
    const params = [id];
    try {
        const result = await executeQuery(query, params);
        return result.rows[0]; // Retorna o primeiro animal encontrado
    } catch (err) {
        console.error("Erro ao buscar animal por ID:", err);
        throw err;
    }
}
