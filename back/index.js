const server = require('./src/app.js')
const { database } = require('./src/db')
require('dotenv').config()
const { PORT } = process.env

database.sync({ force: false }).then(() =>
  server.listen(PORT, () => {
    console.log('Server on port ', PORT)
  })
)
