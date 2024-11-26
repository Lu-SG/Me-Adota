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

export async function getUsers() {
    const query = `SELECT * FROM usuarios`;
    try {
        const result = await executeQuery(query);
        return result.rows; // Retorna todos os animais
    } catch (err) {
        console.error("Erro ao buscar usuarios:", err);
        throw err;
    }
}
export async function getUsuarioById(id_usuario) { 
    const query = `SELECT * FROM usuarios WHERE id_usuario = $1`;
    const params = [id_usuario];
    try {
        const result = await executeQuery(query, params);
        return result.rows[0]; // Retorna o primeiro animal encontrado
    } catch (err) {
        console.error("Erro ao buscar usuário por ID:", err);
        throw err;
    }
}



export function calcularCompatibilidade(usuario, animal) { 
    let pontos = 0; 
    if (usuario.especie_desejada === animal.especie) 
    {
        pontos += 20; 
    }
    else
    {
        pontos -= 20;
    }


    if (usuario.porte_desejado === animal.porte)
    {
        pontos += 10; 
    }
    else
    {
        pontos -= 10;
    }

    if (usuario.sexo_desejado === animal.sexo)
    {
        pontos += 5; 
    }
    else
    {
        pontos -= 5;
    }


    if (usuario.aceita_necessidade_especial === animal.necessidade_especial)
    {
        pontos += 10; 
    }
    else
    {
        if(usuario.aceita_necessidade_especial === 'sim' && animal.necessidade_especial ==='nao')
        {
            pontos += 10;
        }
        
    }


    if (usuario.aceita_doenca_cronica === 'sim' && animal.doenca_cronica === 'sim')
    {
        pontos += 10; 
    }
    
    if(usuario.aceita_doenca_cronica === 'nao' && animal.doenca_cronica === 'nao')
    {
        pontos += 5;
    }
    
    if(usuario.ja_tem_outros_animais === animal.convivencia)
    {
        pontos += 5;
    }

    if(usuario.ja_tem_outros_animais === 'sim' && animal.convivencia === 'nao')
    {
        pontos = -100;
    }

    if(usuario.tem_tempo_pro_animal === 'sim' && animal.necessidade_atencao === 'sim')
    {
        pontos += 5;
    }

    if(usuario.tem_tempo_pro_animal === 'nao' && animal.necessidade_atencao === 'sim')
    {
        pontos = -100;
    }
    return pontos;
}


// Função para encontrar um usuário pelo email
export async function findUserByEmail(email) {
  try {
    const query = `SELECT * FROM usuarios WHERE email = $1`;
    const params = [email];

    // Realiza uma consulta SQL na tabela 'usuarios'
    const result = await executeQuery(query, params);
    return result.rows[0];
  } catch (error) {
    console.error('Erro ao encontrar usuário por email:', error);
    throw error;
  }
};

