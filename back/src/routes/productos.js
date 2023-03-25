const express = require('express')
const router = express.Router()
const {
  postProducto,
  getProducto,
  deleteProducto,
  updateProducto,
} = require('../controllers/index')

router.post('/', async (req, res) => {
  try {
    const { nombre, precio } = req.body
    await postProducto(nombre, precio)
    res.status(200).send('Producto creado exitosamente')
  } catch (error) {
    res.status(404).json({ error: error.message })
  }
})
router.get('/', async (req, res) => {
  try {
    const productos = await getProducto()
    res.status(200).json(productos)
  } catch (error) {
    res.status(404).json({ error: error.message })
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params
    await deleteProducto(id)
    res.status(200).send('Producto borrado')
  } catch (error) {
    res.status(404).json({ error: error.message })
  }
})

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const { nombre, precio } = req.body
    await updateProducto(nombre, precio, id)
    res.status(200).send('Producto actualizado')
  } catch (error) {
    res.status(404).json({ error: error.message })
  }
})

// .post('/productos', producto)
// .get('/productos'
// delete(`/productos/${id}
// put(`/productos/${producto.id}`, producto)

module.exports = router
