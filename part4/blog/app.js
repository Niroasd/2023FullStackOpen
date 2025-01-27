const mongoose = require('mongoose')
const express = require('express')
const app = express()
const cors = require('cors')
const config = require('./utils/config')
const blogsRouter = require('./controllers/blogs')

app.use('/api/blogs/', blogsRouter)
app.use(cors())
app.use(express.json())

mongoose.connect(config.MONGODB_URI).then(() => {
    console.log('connected to MongoDB');
}).catch((error) => { console.log(error) });

module.exports = { app }