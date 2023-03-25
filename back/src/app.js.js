const express = require('express')
const server = express()
const routes = require('./routes/productos')
const morgan = require('morgan')

server.use(express.json())
server.use(morgan('dev'))
server.use((req, res, next) => {
  res.header(
    'Access-Control-Allow-Origin',
    'https://product-list-mu.vercel.app'
  )
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
  next()
})
server.use('/productos', routes)

module.exports = server
