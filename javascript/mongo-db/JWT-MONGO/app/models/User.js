const mongoose = require("../.././db_connection");
const Schema = mongoose.Schema;

const User = new Schema({
    name: String,
    password: String,
    admin: Boolean
});

module.exports= mongoose.model('User', User);