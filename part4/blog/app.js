const mongoose = require('mongoose')
const express = require('express')
const app = express()
const cors = require('cors')
const config = require('./utils/config')
const blogsRouter = require('./controllers/blogs')
const usersRouter = require('./controllers/users')
const logger = require('./utils/logger')

mongoose.set('strictQuery', false)
app.use(cors())
app.use(express.json())

app.use('/api/blogs/', blogsRouter)
app.use('/api/users/', usersRouter)

mongoose.connect(config.MONGODB_URI).then(() => {
    logger.info('connected to MongoDB');
}).catch((error) => { logger.error(error) });

module.exports = app