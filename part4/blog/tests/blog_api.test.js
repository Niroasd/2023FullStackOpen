const { test, after, describe, beforeEach } = require('node:test')
const assert = require('node:assert')
const mongoose = require('mongoose')
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

    const newblog =
    {
      "title": "4.10 do you copy?",
      "author": "hope this works",
      "url": "woo",
      "likes": 999
    }
    // console.log(`and here we have ${JSON.stringify(newblog)}`);
    const response = await api
      .post('/api/blogs')
      .send(newblog)
    // console.log(response.body);
    const blogAmount = await (Blog.find({}))
    // console.log(blogAmount.length, initialBlogs.length);
    assert.strictEqual(blogAmount.length, initialBlogs.length + 1)
  })
  test('default likes is 0', async () => {
    const newBlogNoLike =
    {
      "title": "4.10 do you copy?",
      "author": "hope this works",
      "url": "woo",
    }
    const response = await api
      .post('/api/blogs')
      .send(newBlogNoLike)
      .expect(201)
    // console.log(`object >> ${JSON.stringify(response.body)}`);
    // console.log(`likes >> ${response.body.likes}`);

    assert.strictEqual(response.body.likes, 0)
  })
  test('title or url missing returns 400', async () => {
    const newBlogNoTitle =
    {
      "author": "hope this works",
      "url": "woo",
    }
    const newBlogNoUrl =
    {
      "title": "4.12 do you copy?",
      "author": "hope this works",
    }

    await api.post('/api/blogs').send(newBlogNoTitle).expect(400)
    await api.post('/api/blogs').send(newBlogNoUrl).expect(400)

  })
  test('deletion returns 204', async () => {
    const blogsAtStart = await Blog.find({})
    const blogToDelete = blogsAtStart[0]

    await api
      .delete(`/api/blogs/${blogToDelete.id}`)
      .expect(204)

    const blogs = await Blog.find({})
    assert.strictEqual(blogs.length, initialBlogs.length - 1)
  })
  test('updated blog has new likes', async () => {
    const blogsAtStart = await Blog.find({})
    const blogToUpdate = blogsAtStart[0]

    const likeUpdate = {
      "likes": 214786111
    }

    const response = await api.put(`/api/blogs/${blogToUpdate.id}`).send(likeUpdate).expect(201)
    // console.log(`old >> ${response.body.likes}`);
    // console.log(`new >> ${likeUpdate.likes}`);
    assert.strictEqual(response.body.likes, likeUpdate.likes)
  })
})

after(async () => {
  await mongoose.connection.close()
})