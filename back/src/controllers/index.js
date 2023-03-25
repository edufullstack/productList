const { Producto } = require('../db')

const postProducto = async (nombre, precio) => {
  const posteado = await Producto.create({
    nombre,
    precio,
  })
  return posteado
}

const getProducto = async () => {
  const productos = await Producto.findAll()
  return productos
}

const deleteProducto = async (id) => {
  await Producto.destroy({ where: { id } })
}

const updateProducto = async (nombre, precio, id) => {
  await Producto.update(
    { nombre, precio },
    {
      where: { id },
    }
  )
}

module.exports = { postProducto, getProducto, deleteProducto, updateProducto }
