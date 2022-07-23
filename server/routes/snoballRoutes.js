const express = require('express')
const router = express.Router()
const { getSnoballs,
        setSnoballs } = require('../controllers/snoballController')

router.get('/', getSnoballs)

// router.post('/', setSnoballs)

router.put('/:id', (req, res) => {
    res.json({ message: `Update goal ${req.params.id}` })
})

router.delete('/:id', (req, res) => {
    res.json({ message: `Delete goal ${req.params.id}` })
})

module.exports = router