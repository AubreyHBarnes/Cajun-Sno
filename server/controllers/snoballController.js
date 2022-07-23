const asyncHandler = require('express-async-handler')

// Get base snoball flavors
// GET /API/snoballs
// @access public

const getSnoballs = asyncHandler(async (req, res) => {
    res.json({ message: 'Get goals' })
})

// Set base snoball flavors
// SET /API/snoballs
// @access public

// const setSnoballs = (req, res) => {
//     res.json({ message: 'Get goals' })
// }

module.exports = {
    getSnoballs,
    // setSnoballs,
}