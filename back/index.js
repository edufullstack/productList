const server = require('./src/app.js')
const { database } = require('./src/db')

database.sync({ force: false }).then(() =>
  server.listen(3001, () => {
    console.log('Server on port 3001')
  })
)
