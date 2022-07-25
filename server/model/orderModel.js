const mongoose = require('mongoose')

const orderSchema = mongoose.Schema({
    parkingNum: {
        type: Number,
        required: true
    },
    selected: [
        new mongoose.Schema({
            flavor: String,
            size: String
        })
    ],
    subtotal: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Order', orderSchema)