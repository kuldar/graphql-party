const { GraphQLServer } = require('graphql-yoga')
const { Prisma } = require('prisma-binding')
const cookieParser = require('cookie-parser')
const jwt = require('jsonwebtoken')

require('dotenv').config({ path: '.env.development' })
const db = require('./db')
const resolvers = require('./resolvers')

const server = new GraphQLServer({
  typeDefs: 'src/schema.graphql',
  resolverValidationOptions: {
    requireResolversForResolveType: false
  },
  resolvers,
  context: req => ({ ...req, db })
})

server.express.use(cookieParser())

server.express.use((req, res, next) => {
  const { token } = req.cookies
  if (token) {
    const { userId } = jwt.verify(token, process.env.APP_SECRET)
    req.userId = userId
  }
  next()
})

// Get User from their ID
server.express.use(async (req, res, next) => {
  if (!req.userId) return next()

  const user = await db.query.user(
    { where: { id: req.userId } },
    `{ id, email, name }`
  )

  req.user = user
  next()
})

// Start the server and tell the good news
server.start(
  {
    cors: { credentials: true, origin: process.env.CLIENT_ENDPOINT },
    port: process.env.PORT,
  },
  server => console.log(`Server is running on http://localhost:${server.port}`)
)