const asyncHandler = require('express-async-handler')

const orderModel = require('../model/orderModel')

// Get base snoball flavors
// GET /API/snoballs
// @access public

const getOrder = asyncHandler(async (req, res) => {
    const orders = await orderModel.find()

    res.json(orders)
})

// Set base snoball flavors
// SET /API/snoballs
// @access public

const setOrder = async (req, res) => {
    // if(!req.body.parkingNum){
    //     res.status(400)
    //     throw new Error('please add required data')

    // }
    const orders = await orderModel.create({
        parkingNum: req.body.parkingNum,
        selected: req.body.selected,
        subtotal: req.body.subtotal
    })

    res.json(orders)
    
}

module.exports = {
    getOrder,
    setOrder
}