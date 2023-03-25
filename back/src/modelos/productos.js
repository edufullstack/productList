const { DataTypes } = require('sequelize')

module.exports = (database) => {
  database.define(
    'Producto',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      precio: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  )
}
