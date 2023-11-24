create table bolsista (
	num_matricula bigint primary key not null,
	nome varchar (100),
	curso varchar (100),
	data_nascimento date,
	instituto varchar(100),
	codprojeto int, 
	foreign key(codprojeto) references projeto_coordenador(codprojeto) 
);


create table projeto_coordenador (
	codprojeto serial primary key not null,
	titulo varchar(100),
	data_inicio date,
	data_termino date,
	codcoord int,
	nome_coord varchar(100),
	instituto_coord varchar(100)
);