const { Prisma } = require('prisma-binding')

const db = new Prisma({
  // Prisma database schema
  typeDefs: 'src/generated/prisma.graphql',

  // Endpoint of the Prisma database service
  endpoint: process.env.PRISMA_ENDPOINT,

  // Taken from database/prisma.yml
  secret: process.env.PRISMA_SECRET,

  // Log all GraphQL queries & mutations
  debug: true
})

module.exports = db