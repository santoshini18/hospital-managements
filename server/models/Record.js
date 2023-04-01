const mongoose = require('mongoose')

const RecordSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
        
    },
    isbn:{
        type: String,
        required: true
    },
    author:{
        type: String,
        required: true
    },
    description: {
        type: String
    },

    publisher: {
        type: String
    },
    updateed_date: {
        type: Date,
        default: Date.now
    },
})

module.exports = Record = mongoose.model('record', RecordSchema)

  