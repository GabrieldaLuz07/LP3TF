CREATE TABLE status (
    id_status  SERIAL PRIMARY KEY,
    situacao   VARCHAR(10) NOT NULL
);

CREATE TABLE modalidade (
    id_modalidade    SERIAL PRIMARY KEY,
    nome             VARCHAR(50) NOT NULL,
	descricao        VARCHAR(100),
	hora_inicio      VARCHAR(15) NOT NULL,
    hora_fim         VARCHAR(15) NOT NULL,
    capacidademaxima INTEGER,
    diassemana       VARCHAR(50)
);

CREATE TABLE plano (
    id_plano       SERIAL PRIMARY KEY,
    nome           VARCHAR(10) NOT NULL,
    valor          FLOAT NOT NULL,
    periodo        INTEGER,
    id_modalidade  INTEGER NOT NULL REFERENCES modalidade(id_modalidade),
	id_status 	   INTEGER NOT NULL REFERENCES status(id_status)
);

CREATE TABLE personal (
    id_personal  SERIAL PRIMARY KEY,
    nome         VARCHAR(50) NOT NULL,
    cpf          VARCHAR(14) NOT NULL,
    telefone     VARCHAR(14),
    sexo         VARCHAR(1) NOT NULL,
	nascimento   DATE NOT NULL,
	cref 		 INTEGER NOT NULL
);

CREATE TABLE aluno (
    id_aluno    SERIAL PRIMARY KEY,
    nome        VARCHAR(100) NOT NULL,
    cpf         VARCHAR(14) NOT NULL,
    senha       TEXT NOT NULL,
    nascimento  DATE NOT NULL,
    sexo        VARCHAR(1) NOT NULL,
    endereco    VARCHAR(100),
    telefone    VARCHAR(14),
    id_plano    INTEGER NOT NULL REFERENCES plano(id_plano),
    id_status   INTEGER NOT NULL REFERENCES status(id_status)
);

CREATE TABLE aluno_avaliacao (
    id_avaliacao    SERIAL PRIMARY KEY,
    data_avaliacao  DATE NOT NULL,
    altura          FLOAT NOT NULL,
    peso            FLOAT NOT NULL,
    ombros          FLOAT,
    peitoral        FLOAT,
    abdomen         FLOAT,
    quadril         FLOAT,
    bracos          FLOAT,
    pernas          FLOAT,
    id_aluno        INTEGER NOT NULL REFERENCES aluno(id_aluno),
    id_personal     INTEGER NOT NULL REFERENCES personal(id_personal)
);

CREATE TABLE personal_modalidade (
	id_personal_modalidade SERIAL PRIMARY KEY,
    id_personal    INTEGER NOT NULL REFERENCES personal(id_personal),
    id_modalidade  INTEGER NOT NULL REFERENCES modalidade(id_modalidade),
    hora_entrada   VARCHAR(5),
    hora_saida     VARCHAR(5),
    id_status 	   INTEGER NOT NULL REFERENCES status(id_status)
);

CREATE TABLE aluno_plano (
    id_aluno_plano  SERIAL PRIMARY KEY,
    id_aluno             INTEGER NOT NULL REFERENCES aluno(id_aluno),
    id_plano        	 INTEGER NOT NULL REFERENCES plano(id_plano),
    data_inicio       	 DATE NOT NULL,
	data_fim 			 DATE,
	observacao           VARCHAR(100)
);

CREATE TABLE pagamento (
    id_pagamento    SERIAL PRIMARY KEY,
    pago            BOOLEAN NOT NULL,
    data_limite     DATE,
    data_pagamento  DATE,
    parcela         INTEGER NOT NULL,
    id_plano        INTEGER NOT NULL REFERENCES plano(id_plano),
    id_aluno        INTEGER NOT NULL REFERENCES aluno(id_aluno)
);



INSERT INTO status (id_status, situacao) VALUES (1, 'Ativo');

INSERT INTO modalidade (id_modalidade, nome, descricao, hora_inicio, hora_fim, capacidademaxima, diassemana) 
VALUES (1, 'Musculação', 'Treinamento com pesos livres e máquinas', '08:00', '22:00', 50, 'Segunda a Sábado');

INSERT INTO plano (id_plano, nome, valor, periodo, id_modalidade, id_status) 
VALUES (1, 'Mensal', 100.00, 30, 1, 1);

INSERT INTO personal (id_personal, nome, cpf, telefone, sexo, nascimento, cref) 
VALUES (1, 'João Silva', '123.456.789-01', '9999-9999', 'M', '1990-01-01', 123456);

INSERT INTO aluno (id_aluno, nome, cpf, senha, nascimento, sexo, endereco, telefone, id_plano, id_status) 
VALUES (1, 'Maria Souza', '105.450.599-33', 'senha123', '1995-05-15', 'F', 'Rua A, 123', '8888-8888', 1, 1);

INSERT INTO aluno_avaliacao (id_avaliacao, data_avaliacao, altura, peso, ombros, peitoral, abdomen, quadril, bracos, pernas, id_aluno, id_personal) 
VALUES (1, '2024-06-06', 1.70, 65.0, 110.0, 90.0, 80.0, 100.0, 35.0, 60.0, 1, 1);

INSERT INTO personal_modalidade (id_personal_modalidade, id_personal, id_modalidade, hora_entrada, hora_saida, id_status) 
VALUES (1, 1, 1, '08:00', '22:00', 1);

INSERT INTO aluno_plano (id_aluno_plano, id_aluno, id_plano, data_inicio, data_fim, observacao) 
VALUES (1, 1, 1, '2024-06-06', NULL, 'Primeira aula');

INSERT INTO pagamento (id_pagamento, pago, data_limite, data_pagamento, parcela, id_plano, id_aluno) 
VALUES (1, TRUE, '2024-07-06', '2024-06-06', 1, 1, 1);