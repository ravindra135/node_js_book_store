const db = require('../db')

const Category = {
    all: function(callback) {
        db.query('SELECT * FROM categories', function (err, results, fields) {
            if (err) throw err;
            callback(results);
        })
    }
}

module.exports = Category