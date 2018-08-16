const { Link } = require('./Link')
const { Tag } = require('./Tag')
// import { Authentication } from './Authentication'
// import { Comment } from './Comment'
// import { AuthPayload } from './AuthPayload'

module.exports = {
  Query: {
    ...Link.Query,
    ...Tag.Query,
    // ...Authentication.Query,
    // ...Comment.Query
  }
  // Mutation: {
    // ...Authentication.Mutation,
    // ...Link.Mutation,
    // ...Comment.Mutation
  // },
  // AuthPayload
}