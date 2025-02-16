const { test, describe, beforeEach } = require('node:test')
const assert = require('node:assert')
const Blog = require('../models/blog')
const supertest = require('supertest')
const app = require('../app')

const api = supertest(app)

const initialBlogs = [
  {
    "title": "no coping here",
    "author": "asdf",
    "url": "testurl.com",
    "likes": 2
  },
  {
    "title": "4.8 is done soon",
    "author": "jane doe maybe who knows",
    "url": "testurl.com",
    "likes": 6
  }
]
beforeEach(async () => {
  await Blog.deleteMany({})
  const blogList = initialBlogs.map(blog => new Blog(blog))
  const promiseArr = (blogList.map(blog => blog.save()))
  await Promise.all(promiseArr)
})

describe('4.8-4.12 tests under this', () => {
  test('api returns correct amount of blogs', async () => {
    const response = await api.get('/api/blogs')
    assert.strictEqual(response.body.length, 2)
  })
  test('blogs return in json format', async () => {
    await api.get('/api/blogs').expect('Content-Type', /application\/json/)
  })
  test('blog[id] instead of blog[__id]', async () => {
    const response = await api.get('/api/blogs')
    // console.log(response.body);
    assert.strictEqual(response.body.map(blog => blog.id).length, 2)
  })
  test('posting increments by one', async () => {

    const newblog = new Blog(
      {
        "title": "4.10 do you copy?",
        "author": "hope this works",
        "url": "woo",
        "likes": 999
      }
    )
    await api.post('/api/blogs', newblog)
    const blogAmount = await(Blog.find({}))
    console.log(blogAmount.length, initialBlogs.length);
    assert.strictEqual(blogAmount.length, initialBlogs.length + 1)
  })
})
