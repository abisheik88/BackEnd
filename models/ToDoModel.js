const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
        minlength: 3
    }
})

module.exports = mongoose.model('ToDo', todoSchema)