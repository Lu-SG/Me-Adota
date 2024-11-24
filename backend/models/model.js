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
        INSERT INTO animais (nome, idade, especie, raca, sexo, porte, numero, rua, cidade, estado, complemento, data_resgate, convivencia, doenca_cronica, necessidade_especial, necessidade_atencao)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16)`;
    const params = [
        animal.nome,
        animal.idade,
        animal.especie,
        animal.raca,
        animal.sexo,
        animal.porte,
        animal.numero,
        animal.rua,
        animal.cidade,
        animal.estado,
        animal.complemento,
        animal.data_resgate,
        animal.convivencia,
        animal.doenca_cronica,
        animal.necessidade_especial,
        animal.necessidade_atencao,
        
    ];
    try {
        await executeQuery(query, params);
        console.log("Animal cadastrado com sucesso!");
    } catch (err) {
        console.error("Erro ao cadastrar animal:", err);
        throw err;
    }
}

export async function addUser(user) {
    const query = `
        INSERT INTO usuarios(nome, email, telefone, senha, estado, cidade, bairro, rua, numero, complemento, especie_desejada, porte_desejado, sexo_desejado, aceita_necessidade_especial, aceita_doenca_cronica, ja_tem_outros_animais, tem_tempo_pro_animal )
        VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17)`;
    const params = [
        user.nome,
        user.email,
        user.telefone,
        user.senha,
        user.estado,
        user.cidade,
        user.bairro,
        user.rua,
        user.numero,
        user.complemento,
        user.especie_desejada,
        user.porte_desejado,
        user.sexo_desejado,
        user.aceita_necessidade_especial,
        user.aceita_doenca_cronica,
        user.ja_tem_outros_animais,
        user.tem_tempo_pro_animal,
    ];
    try {
        await executeQuery(query, params);
        console.log("Usuário cadastrado com sucesso!");
    } catch (err) {
        console.error("Erro ao cadastrar Usuário:", err);
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
