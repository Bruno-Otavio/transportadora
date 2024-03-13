const Crud = require("./crud");

const table = "rota";

const queries = (data={}) => {
    return {
        getAll: `SELECT * FROM ${table}`,
        get: `SELECT * FROM ${table} WHERE id_${table} = ${data.id}`,
        create: `INSERT INTO ${table}(origem, destino, distancia) VALUE 
            ('${data.origem}', 
            '${data.destino}', 
            '${data.distancia}')`,
        update: `UPDATE ${table} SET 
            origem = '${data.origem}', 
            destino = '${data.destino}', 
            distancia = '${data.distancia}'
            WHERE id_${table} = ${data.id}`,
        delete: `DELETE FROM ${table} WHERE id_${table} = ${data.id}`
    }
};


class Rotas extends Crud {
    constructor(queries) {
        super(queries);
    }
}

const rotas = new Rotas(queries);
module.exports = rotas;

