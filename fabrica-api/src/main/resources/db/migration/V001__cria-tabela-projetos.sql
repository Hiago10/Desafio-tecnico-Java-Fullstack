create table projetos (
	projeto_id BIGSERIAL PRIMARY KEY,
   	nome VARCHAR(100) NOT NULL,
   	descricao TEXT NOT NULL,
   	valor NUMERIC(20, 2) NOT NULL,
   	data_inicio DATE NOT NULL,
   	data_encerramento DATE NOT NULL
);