const Crud = require("./crud");

const table = "pedido";

const queries = (data={}) => {
    return {
        getAll: `SELECT * FROM ${table}`,
        get: `SELECT * FROM ${table} WHERE id_${table} = ${data.id}`,
        create: `INSERT INTO ${table}(id_cliente, id_entrega, valor, data_pedido) VALUE 
            ('${data.id_cliente}', 
            '${data.id_entrega}', 
            '${data.valor}', 
            '${data.data_pedido}')`,
        update: `UPDATE ${table} SET 
            id_cliente = '${data.id_cliente}', 
            id_entrega = '${data.id_entrega}', 
            valor = '${data.valor}',
            data_pedido = '${data.data_pedido}' 
            WHERE id_${table} = ${data.id}`,
        delete: `DELETE FROM ${table} WHERE id_${table} = ${data.id}`
    }
};


class Pedidos extends Crud {
    constructor(queries) {
        super(queries);
    }
}

const pedidos = new Pedidos(queries);
module.exports = pedidos;
