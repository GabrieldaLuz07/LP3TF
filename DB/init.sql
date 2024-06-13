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



-- Status
INSERT INTO status (id_status, situacao) VALUES (1, 'Ativo');
INSERT INTO status (id_status, situacao) VALUES (2, 'Inativo');
INSERT INTO status (id_status, situacao) VALUES (3, 'Em aguardo');
INSERT INTO status (id_status, situacao) VALUES (4, 'Pago');
INSERT INTO status (id_status, situacao) VALUES (5, 'Erro');

-- Modalidade
INSERT INTO modalidade (id_modalidade, nome, descricao, hora_inicio, hora_fim, capacidademaxima, diassemana) 
VALUES (1, 'Musculação', 'Treinamento com pesos livres e máquinas', '08:00', '22:00', 50, 'Segunda a Sábado');
INSERT INTO modalidade (id_modalidade, nome, descricao, hora_inicio, hora_fim, capacidademaxima, diassemana) 
VALUES (2, 'Yoga', 'Aulas de Yoga', '06:00', '20:00', 30, 'Segunda a Sexta');
INSERT INTO modalidade (id_modalidade, nome, descricao, hora_inicio, hora_fim, capacidademaxima, diassemana) 
VALUES (3, 'Pilates', 'Aulas de Pilates', '07:00', '21:00', 25, 'Segunda a Sábado');
INSERT INTO modalidade (id_modalidade, nome, descricao, hora_inicio, hora_fim, capacidademaxima, diassemana) 
VALUES (4, 'Spinning', 'Aulas de Spinning', '08:00', '22:00', 20, 'Terça e Quinta');
INSERT INTO modalidade (id_modalidade, nome, descricao, hora_inicio, hora_fim, capacidademaxima, diassemana) 
VALUES (5, 'Crossfit', 'Treinamento Crossfit', '06:00', '22:00', 15, 'Segunda a Domingo');

-- Plano
INSERT INTO plano (id_plano, nome, valor, periodo, id_modalidade, id_status) 
VALUES (1, 'Mensal', 100.00, 30, 1, 1);
INSERT INTO plano (id_plano, nome, valor, periodo, id_modalidade, id_status) 
VALUES (2, 'Trimestral', 270.00, 90, 2, 2);
INSERT INTO plano (id_plano, nome, valor, periodo, id_modalidade, id_status) 
VALUES (3, 'Semestral', 500.00, 180, 3, 3);
INSERT INTO plano (id_plano, nome, valor, periodo, id_modalidade, id_status) 
VALUES (4, 'Anual', 900.00, 365, 4, 4);
INSERT INTO plano (id_plano, nome, valor, periodo, id_modalidade, id_status) 
VALUES (5, 'Mensal', 120.00, 30, 5, 5);

-- Personal
INSERT INTO personal (id_personal, nome, cpf, telefone, sexo, nascimento, cref) 
VALUES (1, 'João Silva', '123.456.789-01', '9999-9999', 'M', '1990-01-01', 123456);
INSERT INTO personal (id_personal, nome, cpf, telefone, sexo, nascimento, cref) 
VALUES (2, 'Ana Costa', '234.567.890-12', '9999-9998', 'F', '1985-02-02', 234567);
INSERT INTO personal (id_personal, nome, cpf, telefone, sexo, nascimento, cref) 
VALUES (3, 'Carlos Pereira', '345.678.901-23', '9999-9997', 'M', '1980-03-03', 345678);
INSERT INTO personal (id_personal, nome, cpf, telefone, sexo, nascimento, cref) 
VALUES (4, 'Beatriz Oliveira', '456.789.012-34', '9999-9996', 'F', '1995-04-04', 456789);
INSERT INTO personal (id_personal, nome, cpf, telefone, sexo, nascimento, cref) 
VALUES (5, 'Eduardo Lima', '567.890.123-45', '9999-9995', 'M', '1970-05-05', 567890);

-- Aluno
INSERT INTO aluno (id_aluno, nome, cpf, senha, nascimento, sexo, endereco, telefone, id_plano, id_status) 
VALUES (1, 'Maria Souza', '105.450.599-33', '$2b$10$CwTycUXWue0Thq9StjUM0uJ8bGZZG42I5LRNNY8aGzMm/2BfE2OQK', '1995-05-15', 'F', 'Rua A, 123', '8888-8888', 1, 1);
INSERT INTO aluno (id_aluno, nome, cpf, senha, nascimento, sexo, endereco, telefone, id_plano, id_status) 
VALUES (2, 'Pedro Santos', '206.550.600-44', 'senha456', '1993-06-16', 'M', 'Rua B, 456', '8888-8887', 2, 2);
INSERT INTO aluno (id_aluno, nome, cpf, senha, nascimento, sexo, endereco, telefone, id_plano, id_status) 
VALUES (3, 'Lucia Almeida', '307.650.701-55', 'senha789', '1988-07-17', 'F', 'Rua C, 789', '8888-8886', 3, 3);
INSERT INTO aluno (id_aluno, nome, cpf, senha, nascimento, sexo, endereco, telefone, id_plano, id_status) 
VALUES (4, 'Rafael Ferreira', '408.750.802-66', 'senha012', '1991-08-18', 'M', 'Rua D, 012', '8888-8885', 4, 4);
INSERT INTO aluno (id_aluno, nome, cpf, senha, nascimento, sexo, endereco, telefone, id_plano, id_status) 
VALUES (5, 'Clara Oliveira', '509.850.903-77', 'senha345', '1994-09-19', 'F', 'Rua E, 345', '8888-8884', 5, 5);

-- Aluno Avaliacao
INSERT INTO aluno_avaliacao (id_avaliacao, data_avaliacao, altura, peso, ombros, peitoral, abdomen, quadril, bracos, pernas, id_aluno, id_personal) 
VALUES (1, '2024-06-06', 1.70, 65.0, 110.0, 90.0, 80.0, 100.0, 35.0, 60.0, 1, 1);
INSERT INTO aluno_avaliacao (id_avaliacao, data_avaliacao, altura, peso, ombros, peitoral, abdomen, quadril, bracos, pernas, id_aluno, id_personal) 
VALUES (2, '2024-06-07', 1.75, 70.0, 115.0, 95.0, 85.0, 105.0, 37.0, 65.0, 2, 2);
INSERT INTO aluno_avaliacao (id_avaliacao, data_avaliacao, altura, peso, ombros, peitoral, abdomen, quadril, bracos, pernas, id_aluno, id_personal) 
VALUES (3, '2024-06-08', 1.80, 75.0, 120.0, 100.0, 90.0, 110.0, 39.0, 70.0, 3, 3);
INSERT INTO aluno_avaliacao (id_avaliacao, data_avaliacao, altura, peso, ombros, peitoral, abdomen, quadril, bracos, pernas, id_aluno, id_personal) 
VALUES (4, '2024-06-09', 1.85, 80.0, 125.0, 105.0, 95.0, 115.0, 41.0, 75.0, 4, 4);
INSERT INTO aluno_avaliacao (id_avaliacao, data_avaliacao, altura, peso, ombros, peitoral, abdomen, quadril, bracos, pernas, id_aluno, id_personal) 
VALUES (5, '2024-06-10', 1.90, 85.0, 130.0, 110.0, 100.0, 120.0, 43.0, 80.0, 5, 5);

-- Personal Modalidade
INSERT INTO personal_modalidade (id_personal_modalidade, id_personal, id_modalidade, hora_entrada, hora_saida, id_status) 
VALUES (1, 1, 1, '08:00', '22:00', 1);
INSERT INTO personal_modalidade (id_personal_modalidade, id_personal, id_modalidade, hora_entrada, hora_saida, id_status) 
VALUES (2, 2, 2, '06:00', '20:00', 2);
INSERT INTO personal_modalidade (id_personal_modalidade, id_personal, id_modalidade, hora_entrada, hora_saida, id_status) 
VALUES (3, 3, 3, '07:00', '21:00', 3);
INSERT INTO personal_modalidade (id_personal_modalidade, id_personal, id_modalidade, hora_entrada, hora_saida, id_status) 
VALUES (4, 4, 4, '08:00', '22:00', 4);
INSERT INTO personal_modalidade (id_personal_modalidade, id_personal, id_modalidade, hora_entrada, hora_saida, id_status) 
VALUES (5, 5, 5, '06:00', '22:00', 5);

-- Aluno Plano
INSERT INTO aluno_plano (id_aluno_plano, id_aluno, id_plano, data_inicio, data_fim, observacao) 
VALUES (1, 1, 1, '2024-06-06', NULL, 'Primeira aula');
INSERT INTO aluno_plano (id_aluno_plano, id_aluno, id_plano, data_inicio, data_fim, observacao) 
VALUES (2, 2, 2, '2024-06-07', NULL, 'Primeira aula');
INSERT INTO aluno_plano (id_aluno_plano, id_aluno, id_plano, data_inicio, data_fim, observacao) 
VALUES (3, 3, 3, '2024-06-08', NULL, 'Primeira aula');
INSERT INTO aluno_plano (id_aluno_plano, id_aluno, id_plano, data_inicio, data_fim, observacao) 
VALUES (4, 4, 4, '2024-06-09', NULL, 'Primeira aula');
INSERT INTO aluno_plano (id_aluno_plano, id_aluno, id_plano, data_inicio, data_fim, observacao) 
VALUES (5, 5, 5, '2024-06-10', NULL, 'Primeira aula');

-- Pagamento
INSERT INTO pagamento (id_pagamento, pago, data_limite, data_pagamento, parcela, id_plano, id_aluno) 
VALUES (1, TRUE, '2024-07-06', '2024-06-06', 1, 1, 1);
INSERT INTO pagamento (id_pagamento, pago, data_limite, data_pagamento, parcela, id_plano, id_aluno) 
VALUES (2, TRUE, '2024-07-07', '2024-06-07', 1, 2, 2);
INSERT INTO pagamento (id_pagamento, pago, data_limite, data_pagamento, parcela, id_plano, id_aluno) 
VALUES (3, TRUE, '2024-07-08', '2024-06-08', 1, 3, 3);
INSERT INTO pagamento (id_pagamento, pago, data_limite, data_pagamento, parcela, id_plano, id_aluno) 
VALUES (4, TRUE, '2024-07-09', '2024-06-09', 1, 4, 4);
INSERT INTO pagamento (id_pagamento, pago, data_limite, data_pagamento, parcela, id_plano, id_aluno) 
VALUES (5, TRUE, '2024-07-10', '2024-06-10', 1, 5, 5);