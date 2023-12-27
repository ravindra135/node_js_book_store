const db = require('../db')

const categoryfunctions = {
    all: async (req, res) => {
        const cat = db.query('SELECT * FROM category',[], function (error, results, fields) {
            if (error) {
                return console.error(error.message);
            }
              
            // res.status(200).json(results);
            res.send(results)
        });
    },

    show: async (req, res) => {
        const id = req.params.id;
        const categoryQuery = `SELECT * FROM category where id = ?`;
        db.query(categoryQuery, [id], function (error, results) {
            if (error) {
                return console.error(error.message);
            }

            res.send(results);
        });
    }
}

module.exports = categoryfunctions