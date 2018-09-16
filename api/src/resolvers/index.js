// const { forwardTo } = require('prisma-binding')

const { Link } = require('./Link')
const { Tag } = require('./Tag')
const { User } = require('./User')
const { Like } = require('./Like')

module.exports = {
  Query: {
    ...Link.Query,
    ...Tag.Query,
    ...User.Query
  },
  Mutation: {
    ...User.Mutation,
    ...Link.Mutation,
    ...Like.Mutation
  }
}