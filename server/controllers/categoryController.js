const asyncHandler = require('express-async-handler')

const category = require('../model/categoryModel')

// Get base snoball flavors
// GET /API/snoballs
// @access public

const getCategories = asyncHandler(async (req, res) => {
    const categories = await category.find()

    res.json(categories)
})

// Set base snoball flavors
// SET /API/snoballs
// @access public

const setCategories = async (req, res) => {
    if(!req.body.name){
        res.status(400)
        throw new Error('please add required data')

    }
    const categories = await category.create({
        name: req.body.name
    })

    res.json(categories)
    
}

module.exports = {
    getCategories,
    setCategories,
}