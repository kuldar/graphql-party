const { GraphQLServer } = require('graphql-yoga')
const { Prisma } = require('prisma-binding')
const resolvers = require('./resolvers')

const server = new GraphQLServer({
  typeDefs: 'src/schema.graphql',
  resolvers,
  context: req => ({
    ...req,
    db: new Prisma({
      // Prisma database schema
      typeDefs: 'src/generated/prisma.graphql',

      // Endpoint of the Prisma database service
      endpoint: process.env.PRISMA_ENDPOINT,

      // Taken from database/prisma.yml
      secret: process.env.PRISMA_SECRET,

      // Log all GraphQL queries & mutations
      debug: true
    })
  })
})

// Start the server and tell the good news
server.start(() => console.log(`Server is running on ${process.env.APP_ENDPOINT}`))