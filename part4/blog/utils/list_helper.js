var _ = require('lodash')

const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => {
  return blogs.reduce((likes, newLikes) => likes + newLikes.likes, 0)
}

const favoriteBlog = (blogs) => {
  if (blogs.length === 0) { return 'no blogs found' }
  return blogs.reduce((best, { likes, author, title }) => best.likes > likes ? best : { title, author, likes }, 0)
}

// Define a function called mostBlogs that receives an array of blogs as a parameter.
// The function returns the author who has the largest amount of blogs.
//  The return value also contains the number of blogs the top author has:

const mostBlogs = (blogs) => {
  temp = _.countBy(blogs, 'author')
  temp = Object.entries(temp).reduce((acc, val) => acc[1] > val[1] ? acc : val)
  // console.log(asd);
  return {
    author: temp[0],
    blogs: temp[1]
  }
}

const mostLikes = (blogs) => {

  const temp = _.groupBy(blogs, 'author');
  console.log(temp);


  /* note to self: 
  this one took way too long lol
  next time use unique variable names dummy */
  const likes = _.map(temp, (authorsBlogs, author) => ({
    author,
    totalLikes: _.sumBy(authorsBlogs, 'likes')
  }));
  console.log(likes);


  const highest = _.maxBy(likes, 'totalLikes');
  console.log(highest);

  return highest;
};


const listWithMultipleBlogs = [
  {
    _id: "5a422a851b54a676234d17f7",
    title: "React patterns",
    author: "Michael Chan",
    url: "https://reactpatterns.com/",
    likes: 7,
    __v: 0
  },
  {
    _id: "5a422aa71b54a676234d17f8",
    title: "Go To Statement Considered Harmful",
    author: "Edsger W. Dijkstra",
    url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
    likes: 5,
    __v: 0
  },
  {
    _id: "5a422b3a1b54a676234d17f9",
    title: "Canonical string reduction",
    author: "Edsger W. Dijkstra",
    url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
    likes: 12,
    __v: 0
  },
  {
    _id: "5a422b891b54a676234d17fa",
    title: "First class tests",
    author: "Robert C. Martin",
    url: "http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll",
    likes: 10,
    __v: 0
  },
  {
    _id: "5a422b3a1b54a676234d17f9",
    title: "Canonical string reduction",
    author: "Edsger W. Dijkstra",
    url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
    likes: 12,
    __v: 0
  },
  {
    _id: "5a422ba71b54a676234d17fb",
    title: "TDD harms architecture",
    author: "Robert C. Martin",
    url: "http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html",
    likes: 0,
    __v: 0
  },
  {
    _id: "5a422bc61b54a676234d17fc",
    title: "Type wars",
    author: "Robert C. Martin",
    url: "http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html",
    likes: 2,
    __v: 0
  }
]

// favoriteBlog(listWithMultipleBlogs)
// mostLikes(listWithMultipleBlogs)

module.exports = {
  dummy, totalLikes, favoriteBlog, mostBlogs, mostLikes
}