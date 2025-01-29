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

module.exports = {
  dummy, totalLikes, favoriteBlog
}