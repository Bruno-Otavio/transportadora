const Crud = require("./crud");

const table = "entrega";

const queries = (data={}) => {
    console.table(data);
    return {
        getAll: `SELECT * FROM ${table}`,
        get: `SELECT * FROM ${table} WHERE id_${table} = ${data.id}`,
        create: `INSERT INTO ${table}(motorista, id_veiculo, id_rota, inicio, fim, statusEntrega) VALUE 
            ('${data.motorista}', 
            '${data.id_veiculo}', 
            '${data.id_rota}', 
            '${data.inicio}',
            '${data.fim}', 
            '${data.statusEntrega}')`, 
        update: `UPDATE ${table} SET 
            motorista = '${data.motorista}', 
            id_veiculo = '${data.id_veiculo}', 
            id_rota = '${data.id_rota}',
            inicio = '${data.inicio}',
            fim = '${data.fim}',
            statusEntrega = '${data.statusEntrega}' 
            WHERE id_${table} = ${data.id}`,
        delete: `DELETE FROM ${table} WHERE id_${table} = ${data.id}`
    }
};


class Entregas extends Crud {
    constructor(queries) {
        super(queries);
    }
}

const entregas = new Entregas(queries);
module.exports = entregas;

