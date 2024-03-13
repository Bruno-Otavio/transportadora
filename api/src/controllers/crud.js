const connection = require("../connect/connect");

const checkDataError = (data) => {
    for (let key in data) {
        if (data[key] === "") return true;
    }
}

class CRUD {
    constructor(query) {
        this.queries = query;
    }

    getAll = (req, res) => {
        connection.query(this.queries().getAll, (err, result) => {
            if (err) res.status(400).json(err).end();
            else res.status(202).json(result).end();
        });
    }

    get = (req, res) => {
        const data = {...req.params};
        connection.query(this.queries(data).get, (err, result) => {
            if (err) res.status(404).json(err).end();
            else res.status(202).json(result[0]).end();
        });
    }

    create = (req, res) => {
        const data = {...req.body};
        connection.query(this.queries(data).create, (err, result) => {
            if (err || checkDataError(data)) {
                res.status(400).json(err).end();
            } else {
                const newItem = req.body;
                newItem.id = result.insertId;
                res.status(201).json(newItem).end();
            }
        });
    }

    update = (req, res) => {
        const data = { id: req.params.id, ...req.body };
        connection.query(this.queries(data).update, (err, result) => {
            if (err || checkDataError(data)) res.status(400).json(err).end();
            else {
                if (result.affectedRows > 0) {
                    res.status(202).json(req.body).end();
                } else {
                    res.status(404).json(err).end();
                }
            }
        });
    }

    deleteData = (req, res) => {
        const data = {...req.params};
        connection.query(this.queries(data).delete, (err, result) => {
            if (err) res.status(404).json(err).end();
            else {
                if (result.affectedRows > 0) {
                    res.status(204).json(result).end();
                }
                else {
                    result.message = "ID not found";
                    res.status(404).json(result).end();
                }
            }
        });
    }
}

module.exports = CRUD;
