const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => {
  return blogs.reduce((likes, newLikes) => likes + newLikes.likes, 0)
}

module.exports = {
  dummy, totalLikes
}