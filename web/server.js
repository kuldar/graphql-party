// Libraries
const next = require('next')
const { createServer } = require('http')
const express = require('express')

const port = parseInt(process.env.PORT, 10) || 3000
const app = next({ dev: process.env.NODE_ENV !== 'production' })

const handle = app.getRequestHandler()

app.prepare()
  .then(() => {
    const server = express()

    server.get('/', (req, res) => {
      return app.render(req, res, '/links', req.query)
    })

    server.get('/link/new', (req, res) => {
      return app.render(req, res, '/newLink', req.query)
    })

    server.get('/link/:id', (req, res) => {
      return app.render(req, res, '/link', { id: req.params.id })
    })

    server.get('/tags', (req, res) => {
      return app.render(req, res, '/tags', req.query)
    })

    server.get('/tag/:id', (req, res) => {
      return app.render(req, res, '/tag', { id: req.params.id })
    })

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(port, (err) => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}…`)
    })
  })
