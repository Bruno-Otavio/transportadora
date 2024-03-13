const Crud = require("./crud");

const table = "cliente";

const queries = (data={}) => {
    return {
        getAll: `SELECT * FROM ${table}`,
        get: `SELECT * FROM ${table} WHERE id_${table} = ${data.id}`,
        create: `INSERT INTO ${table}(nome, email, endereco, telefone) VALUE 
            ('${data.nome}', 
            '${data.email}', 
            '${data.endereco}', 
            '${data.telefone}')`,
        update: `UPDATE ${table} SET 
            nome = '${data.nome}', 
            email = '${data.email}', 
            endereco = '${data.endereco}',
            telefone = '${data.telefone}' 
            WHERE id_${table} = ${data.id}`,
        delete: `DELETE FROM ${table} WHERE id_${table} = ${data.id}`
    }
};


class Clientes extends Crud {
    constructor(queries) {
        super(queries);
    }
}

const clientes = new Clientes(queries);
module.exports = clientes;
