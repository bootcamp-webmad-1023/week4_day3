const mongoose = require('mongoose')

// schema
const dogSchema = mongoose.Schema({
    name: String,
    age: Number,
    color: String,
    adopted: Boolean
})

// model
const Dog = mongoose.model('dog', dogSchema)

module.exports = Dog