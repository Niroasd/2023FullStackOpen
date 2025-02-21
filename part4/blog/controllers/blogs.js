const blogsRouter = require('express').Router()
const Blog = require('../models/blog')

blogsRouter.get('/', async (request, response) => {
    const blogs = await Blog.find({})
    response.json(blogs)
})

blogsRouter.post('/', async (request, response) => {
    // console.log('Incoming request body:', request.body);
    if (!request.body.title || !request.body.url) {
        return response.status(400).json({ error: 'Title and URL needed' })
    }
    const blog = new Blog(request.body)
    const savedBlog = await blog.save()
    response.status(201).json(savedBlog)
})

blogsRouter.delete('/:id', async (request, response) => {
    await Blog.findByIdAndDelete(request.params.id)
    response.status(204).end()
})

blogsRouter.put('/:id', async (request, response) => {
    const result = await Blog.findByIdAndUpdate(request.params.id, request.body, { new: true })
    response.status(201).json(result)
})

module.exports = blogsRouter