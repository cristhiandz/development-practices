const mongoose = require('mongoose');
const {Schema} = mongoose;

const noteSchema = new Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    date: {type: Date, default : Date.now},
    user: {type: String}
});

const noteModel = mongoose.model('notes', noteSchema);

module.exports = noteModel;