const mongoose = require('mongoose');

const { model, Schema } = mongoose;

const TrasactionSchema = new Schema({
    name: {type: String, required: true},
    price: {type: Number, required: true},
    description: {type: String, required: true},
    datetime: {type: Date, required: true},
});

const TrasactionModel = model('Transaction',TrasactionSchema);

module.exports = TrasactionModel;