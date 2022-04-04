const mongoose = require('mongoose');

const Jobs = mongoose.Schema(
    {
        nome: { type: String, require: true},
        usuario: { type: String, require: true},
        status: { type: String, require: true},
        recorrencia: { type: String, require: true},
        valor: { type: String, require: true},
        caso: { type: String, require: true}
    }
)

module.exports = mongoose.model('jobs', Jobs);