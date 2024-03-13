DROP DATABASE IF EXISTS transportadora;
CREATE DATABASE transportadora;
USE transportadora;

CREATE TABLE Cliente(
    id_cliente integer primary key unique not null auto_increment,
    nome varchar(50) not null,
    email varchar(50) not null,
    endereco varchar(50) not null,
    telefone varchar(20) not null
);

CREATE TABLE Funcionario(
    id_funcionario integer primary key unique not null auto_increment,
    nome varchar(50) not null,
    cargo varchar(50) not null,
    salario float(10, 2) not null
);

CREATE TABLE Veiculo(
    id_veiculo integer primary key unique not null auto_increment,
    placa varchar(7) unique not null,
    modelo varchar(50) not null,
    capacidade float(10, 2) not null
);

CREATE TABLE Rota(
    id_rota integer primary key unique not null auto_increment,
    origem varchar(50) not null,
    destino varchar(50) not null,
    distancia float(10, 2) not null
);

CREATE TABLE Entrega(
    id_entrega integer primary key unique not null auto_increment,
    motorista integer not null,
    id_veiculo integer not null,
    id_rota integer not null,
    inicio datetime,
    fim datetime,
    statusEntrega varchar(20) not null
);

CREATE TABLE Pedido(
    id_pedido integer primary key unique not null auto_increment,
    id_cliente integer not null,
    id_entrega integer not null,
    valor float(50, 2) not null,
    data_pedido timeStamp not null
);

ALTER TABLE Entrega ADD FOREIGN KEY (id_veiculo) REFERENCES Veiculo(id_veiculo);
ALTER TABLE Entrega ADD FOREIGN KEY (id_rota) REFERENCES Rota(id_rota);
ALTER TABLE Entrega ADD FOREIGN KEY (motorista) REFERENCES Funcionario(id_funcionario);

ALTER TABLE Pedido ADD FOREIGN KEY (id_cliente) REFERENCES Cliente(id_cliente);
ALTER TABLE Pedido ADD FOREIGN KEY (id_entrega) REFERENCES Entrega(id_entrega);
