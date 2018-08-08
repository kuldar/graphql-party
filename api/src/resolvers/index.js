const { Link } = require('./Link')
// import { Authentication } from './Authentication'
// import { Comment } from './Comment'
// import { AuthPayload } from './AuthPayload'

module.exports = {
  Query: {
    ...Link.Query
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