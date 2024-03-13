const Crud = require("./crud");

const table = "funcionario";

const queries = (data={}) => {
    return {
        getAll: `SELECT * FROM ${table}`,
        get: `SELECT * FROM ${table} WHERE id_${table} = ${data.id}`,
        create: `INSERT INTO ${table}(nome, cargo, salario) VALUE 
            ('${data.nome}', 
            '${data.cargo}', 
            ${data.salario})`,
        update: `UPDATE ${table} SET 
            nome = '${data.nome}', 
            cargo = '${data.cargo}', 
            salario = '${data.salario}'
            WHERE id_${table} = ${data.id}`,
        delete: `DELETE FROM ${table} WHERE id_${table} = ${data.id}`
    }
};


class Funcionarios extends Crud {
    constructor(queries) {
        super(queries);
    }
}

const funcionarios = new Funcionarios(queries);
module.exports = funcionarios;
