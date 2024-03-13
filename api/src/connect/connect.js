const mysql = require("mysql");

const connect = mysql.createConnection({
    user: "root",
    //password: "ROOT",
    host: "localhost",
    database: "transportadora"
});

module.exports = connect;
