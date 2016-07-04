var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ingrediente = new Schema({
        supermercado: String,
        descripcion: String,
        precio: Number,
        peso: Number,
        unidades: Number,
        create_at: Number
    },
    {
        collection: 'ingredientes'
    });

module.exports = {
  ingrediente:mongoose.model('ingredientes', ingrediente)
}
