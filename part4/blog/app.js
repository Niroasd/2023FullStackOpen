const mongoose = require('mongoose')
const express = require('express')
const app = express()
const cors = require('cors')
const config = require('./utils/config')
const blogsRouter = require('./controllers/blogs')

mongoose.set('strictQuery', false)
app.use(cors())
app.use(express.json())


app.use('/api/blogs/', blogsRouter)

mongoose.connect(config.MONGODB_URI).then(() => {
    console.log('connected to MongoDB');
}).catch((error) => { console.log(error) });

module.exports = { app }