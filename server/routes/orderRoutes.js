const express = require('express')
const router = express.Router()
const { getOrder,
        setOrder } = require('../controllers/orderController')

router.get('/', getOrder)

router.post('/', setOrder)

router.put('/:id', (req, res) => {
    res.json({ message: `Update goal ${req.params.id}` })
})

router.delete('/:id', (req, res) => {
    res.json({ message: `Delete goal ${req.params.id}` })
})

module.exports = router