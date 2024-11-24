import pg from 'pg';
const { Pool } = pg;

const pool = new Pool({
    user: 'postgres',
    password: '1234',
    host: 'localhost',
    port: 5432,
    database: "postgres",
});

export async function executeQuery(query, params) {
    const client = await pool.connect();
    try {
        const result = await client.query(query, params);
        return result;
    } catch (err) {
        console.error("Erro ao executar a query:", err);
        throw err;
    } finally {
        client.release(); // Libera a conexão de volta ao pool
    }
}

export async function CadastroUsuario(
    nome, 
    email, 
    telefone,
    senha, 
    estado,  
    cidade, 
    bairro, 
    rua,
    numero, 
    complemento,
    especie_desejada,
    porte_desejado,
    sexo_desejado,
    aceita_necessidade_especial,
    aceita_doenca_cronica,
    ja_tem_outros_animais,
    tem_tempo_pro_animal,
)
     {
    const query = `
        INSERT INTO usuarios(nome, email, telefone, senha, estado, cidade, bairro, rua, numero, complemento, especie_desejada, porte_desejado, sexo_desejado, aceita_necessidade_especial, aceita_doenca_cronica, ja_tem_outros_animais, tem_tempo_pro_animal )
        VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17)`;
    const params = [nome, email, telefone, senha, estado, cidade, bairro, rua, numero, complemento, especie_desejada, porte_desejado, sexo_desejado, aceita_necessidade_especial, aceita_doenca_cronica, ja_tem_outros_animais, tem_tempo_pro_animal ];
    try {
        await executeQuery(query, params);
        console.log("Usuário cadastrado com sucesso!");
    } catch (err) {
        console.error("Erro ao cadastrar usuário:", err);
    }
}

export async function CadastroAnimal(
    nome,
    idade,
    especie,
    raca,
    sexo,
    porte,
    numero,
    rua,
    cidade,
    estado,
    complemento,
    data_resgate,
    convivencia,
    doenca_cronica,
    necessidade_especial,
    necessidade_atencao,
) {
    const query = `
        INSERT INTO animais (nome, idade, especie, raca, sexo, porte, 
        numero, rua, cidade, estado, complemento, data_resgate, convivencia, 
        doenca_cronica, necessidade_especial, necessidade_atencao)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, 
        $10, $11, $12, $13, $14, $15, $16)`;
    const params = [
        nome, idade, especie, raca, sexo, porte,
        numero, rua, cidade, estado, complemento, data_resgate, convivencia,
        doenca_cronica, necessidade_especial, necessidade_atencao
    ];
    try {
        await executeQuery(query, params);
        console.log("Animal cadastrado com sucesso!");
    } catch (err) {
        console.error("Erro ao cadastrar animal:", err);
    }
}

// Exemplo de uso da função CadastroAnimal
/*CadastroAnimal(
    1, 1, "Rex", 5, "Cachorro", "Vira-lata", "M", "M",
    true, "123", "Centro", "Cidade Exemplo", "SP", "12345-678",
    "2024-11-13", true, false, false, true, "Animal saudável e amigável"
);
*/

/*
CadastroUsuario(
    "Lucas Garcia",
    "lucas.garcia@example.com",
    "senhaSegura123",
    "1995-08-15",
    "Rua dos Programadores",
    "123",
    "Tecnologia",
    "Inovação",
    "SP",
    "12345-678"
);
*/
