const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const schema = new Schema({
    nama: String,
    job: String,

});

module.exports = mongoose.model('users', schema);