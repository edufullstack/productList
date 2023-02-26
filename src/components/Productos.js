import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { obtenerProductosAction } from '../redux/actions/productoActions'
import Producto from './Producto'

const Productos = () => {
  const dispatch = useDispatch()
  const productos = useSelector((state) => state.productos.productos)
  const error = useSelector((state) => state.productos.error)
  const cargando = useSelector((state) => state.productos.loading)

  useEffect(() => {
    const cargarProductos = () => {
      dispatch(obtenerProductosAction())
    }
    cargarProductos()
  })

  return (
    <>
      <h2 className='text-center my-5'> Product List</h2>
      {error ? (
        <p className='font-weight-bold aler alert-danger text-center mt-4'>
          Error
        </p>
      ) : null}
      {cargando ? <p className='text-center'>Cargando...</p> : null}
      <table className='table table-striped'>
        <thead className='bg-primary table-dark'>
          <tr>
            <th scope='col'>Name</th>
            <th scope='col'>Price</th>
            <th scope='col'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {productos.length === 0 ? (
            <tr>
              <th colSpan='3'>There are no products</th>
            </tr>
          ) : (
            productos.map((producto) => {
              return <Producto key={producto.id} producto={producto} />
            })
          )}
        </tbody>
      </table>
    </>
  )
}

export default Productos
