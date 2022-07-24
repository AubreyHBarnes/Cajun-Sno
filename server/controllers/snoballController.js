const asyncHandler = require('express-async-handler')

const snoball = require('../model/snoballModel')

// Get base snoball flavors
// GET /API/snoballs
// @access public

const getSnoballs = asyncHandler(async (req, res) => {
    const snoballs = await snoball.find()

    res.json(snoballs)
})

// Set base snoball flavors
// SET /API/snoballs
// @access public

const setSnoballs = async (req, res) => {
    if(!req.body.flavor){
        res.status(400)
        throw new Error('please add required data')

    }
    const snoballs = await snoball.create({
        flavor: req.body.flavor,
        size: req.body.size,
        price: req.body.price
    })

    res.json(snoballs)
    
}

module.exports = {
    getSnoballs,
    setSnoballs,
}