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
app.use('/api/categories', require('./routes/categoryRoutes'))

app.use(errorHandler)

cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.API_KEY, 
    api_secret: process.env.API_SECRET
  });

app.listen(port, () => {
    console.log(`server started on port ${port}`)
})
