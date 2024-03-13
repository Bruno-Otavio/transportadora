INSERT INTO Cliente(nome, email, endereco, telefone) VALUES
("Ana Maria", "anamaria@email.com", "Rua dos Palmares", "19993887103"),
("Jorge Amaro", "jorgeamaro@email.com", "Rua dos Carvalhos", "19993284199"),
("Lucas Luco", "lucasluco@email.com", "Rua dos Pinheiros", "19999117553"),
("Larissa Gonçalves", "larrissagon@email.com", "Rua dos Abaobá", "19966817116"),
("Junior Pires", "juniorpire@email.com", "Rua dos Secoia", "19973517519");

INSERT INTO Veiculo(placa, modelo, capacidade) VALUES
("MUL3048", "Caminhao", 150),
("JTR2527", "Moto", 50),
("IHK7740", "Caminhao", 150);

INSERT INTO Rota(origem, destino, distancia) VALUES
("Rua Hamburgo", "Rua Gabriel Covelli", 150),
("Rua Hamburgo", "Rua Visconde de Nascar", 50),
("Rua Hamburgo", "Avenida Dalton", 150);

INSERT INTO Funcionario(nome, cargo, salario) VALUES 
("Gabriel Monteiro", "Motorista", 1970),
("Nascar de Nogueira", "Motorista", 2100),
("Mario Humbro", "Motorista", 1890);

INSERT INTO Entrega(motorista, id_veiculo, id_rota, inicio, fim, statusEntrega) VALUES 
(1, 1, 3, date_sub(now(),interval 200 hour), date_sub(now(),interval 196 hour), "Finalizada"),
(3, 2, 1, date_sub(now(),interval 180 hour), date_sub(now(),interval 172 hour), "Finalizada"),
(2, 3, 2, date_sub(now(),interval 160 hour), date_sub(now(),interval 159 hour), "Finalizada"),
(1, 1, 3, date_sub(now(),interval 155 hour), date_sub(now(),interval 151 hour), "Finalizada"),
(1, 1, 3, date_sub(now(),interval 100 hour), date_sub(now(),interval 97 hour), "Finalizada"),
(2, 3, 1, date_sub(now(),interval 90 hour), date_sub(now(),interval 88 hour), "Finalizada"),
(2, 3, 1, date_sub(now(),interval 80 hour),date_sub(now(),interval 79 hour), "Finalizada"),
(3, 2, 1, date_sub(now(),interval 20 hour),date_sub(now(),interval 18 hour), "Finalizada"),
(3, 2, 1, date_sub(now(),interval 2 hour), null, "Em andamento"),
(2, 3, 1, null, null, "Agendada");

INSERT INTO Pedido(id_cliente, id_entrega, valor, data_pedido) VALUES 
(1, 1, 190, date_sub(now(),interval 203 hour)),
(1, 1, 290, date_sub(now(),interval 203 hour)),
(2, 4, 170, date_sub(now(),interval 203 hour)),
(2, 4, 90, date_sub(now(),interval 203 hour)),
(3, 2, 80, date_sub(now(),interval 203 hour)),
(3, 2, 375, date_sub(now(),interval 203 hour)),
(5, 7, 25, date_sub(now(),interval 203 hour)),
(5, 7, 915, date_sub(now(),interval 203 hour)),
(4, 2, 72, date_sub(now(),interval 203 hour)),
(4, 2, 112, date_sub(now(),interval 203 hour)),
(1, 9, 50, date_sub(now(),interval 203 hour)),
(1, 9, 567, date_sub(now(),interval 203 hour)),
(3, 10, 145, date_sub(now(),interval 203 hour)),
(3, 10, 35, date_sub(now(),interval 203 hour)),
(5, 8, 89, date_sub(now(),interval 203 hour)),
(5, 8, 19, date_sub(now(),interval 203 hour)),
(4, 6, 791, date_sub(now(),interval 203 hour)),
(4, 6, 815, date_sub(now(),interval 203 hour)),
(2, 3, 71, date_sub(now(),interval 203 hour)),
(2, 3, 87, date_sub(now(),interval 203 hour));
