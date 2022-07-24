const mongoose = require('mongoose')

const snoballSchema = mongoose.Schema({
    flavor: {
        type: [String],
        required: true
    },
    size: {
        type: [String],
        required: true
    },
    price: {
        type: [Number],
        required: true
    }
})

module.exports = mongoose.model('Snoball', snoballSchema)