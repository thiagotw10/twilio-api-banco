const mongoose = require('mongoose');

const User = mongoose.Schema(
    {
        cliente: { nome: String},
        menus: [{ nome: String, submenus: [{ nome: String}]}],
    }
)

module.exports = mongoose.model('clientes', User);