const express = require('express')
const router = express.Router()
const { getCategories,
        setCategories } = require('../controllers/categoryController')

router.get('/', getCategories)

router.post('/', setCategories)

router.put('/:id', (req, res) => {
    res.json({ message: `Update goal ${req.params.id}` })
})

router.delete('/:id', (req, res) => {
    res.json({ message: `Delete goal ${req.params.id}` })
})

module.exports = router