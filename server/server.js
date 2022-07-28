const express = require('express')
const dotenv = require('dotenv').config()
const colors = require('colors')
const cloudinary = require('cloudinary')
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const port = process.env.PORT || 5000

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/snoballs', require('./routes/snoballRoutes'))
app.use('/api/orders', require('./routes/orderRoutes'))

app.use(errorHandler)

cloudinary.config({ 
    cloud_name: 'dvdpi6o9g', 
    api_key: '591448994383299', 
    api_secret: 'CXi40gQYJNduhk78Cbdo9vkC-Ng' 
  });

app.listen(port, () => {
    console.log(`server started on port ${port}`)
})
