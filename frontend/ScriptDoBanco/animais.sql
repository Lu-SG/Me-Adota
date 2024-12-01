CREATE TABLE animais (
    id_animal SERIAL PRIMARY KEY,
	nome VARCHAR(250),
	idade INT,
    especie VARCHAR(250),
    raca VARCHAR(250),
	sexo VARCHAR(1),
    porte varchar(2),
	numero VARCHAR(20),
	rua VARCHAR(100),
    bairro VARCHAR(100)
    cidade VARCHAR(50),
    estado CHAR(2),
    complemento VARCHAR(150),
	data_resgate VARCHAR(50),

	convivencia VARCHAR(50),
	doenca_cronica VARHCAR(50),
	necessidade_especial VARCHAR(50), 
    necessidade_atencao VARCHAR(50)
    desc_necessidade VARCHAR(250)
     foto BYTEA,
     mime_type VARCHAR(255),
     
);