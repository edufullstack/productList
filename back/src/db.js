require('dotenv').config()
const { Sequelize } = require('sequelize')
const producto = require('./modelos/productos')
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, DB_PORT } = process.env

const database = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
  {
    logging: false,
  }
)

producto(database)

module.exports = {
  database,
  ...database.models,
}
