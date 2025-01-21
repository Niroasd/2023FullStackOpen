require('dotenv').config()
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const Person = require('./models/person')
const mongoose = require('mongoose')
const app = express()

app.use(express.json())

app.use(morgan(':method :url :response-time :status :post-body', {
    skip: function (req, res) { return req.method !== 'POST' }
}))

morgan.token('post-body', function getContents(req) {
    return JSON.stringify(req.body)
})

app.use(cors())

app.use(express.static('dist'))

app.get('/api/persons', (request, response) => {
    Person.find({}).then(persons => {
        response.json(persons)
    })
})

app.get('/api/persons/:id', (request, response) => {
    const id = request.params.id
    mongoose.findById(id).then(person => {
        response.json(person)
    })
})

app.get('/info', (request, response) => {
    const timestamp = new Date().toString()
    response.send(`<div>Phonebook has info for ${data.length} people</div><br></br><div>${timestamp}</div>`)
})

app.post('/api/persons', (request, response) => {
    const body = request.body

    if (body.name === undefined || body.number === undefined) {
        return response.status(400).json({ error: 'content missing' })
    }

    const person = new Person({
        name: body.name,
        number: body.number
    })

    person.save().then(savedPerson => {
        response.json(savedPerson)
    })
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
})