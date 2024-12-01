CREATE TABLE usuarios (
    id_usuario SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    senha VARCHAR(255) NOT NULL,
	telefone VARCHAR(25),
    rua VARCHAR(100),
    numero VARCHAR(20),
    bairro VARCHAR(50),
    cidade VARCHAR(50),
    estado CHAR(2),
	complemento VARCHAR(100),

	especie_desejada VARCHAR(50),
	porte_desejado VARCHAR(2),
	sexo_desejado VARCHAR(1),
	aceita_necessidade_especial VARCHAR(100),
	aceita_doenca_cronica VARCHAR(50),
	ja_tem_outros_animais VARCHAR(50),
	tem_tempo_pro_animal VARCHAR(50)
);