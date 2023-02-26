import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { crearNuevoProductoAction } from '../redux/actions/productoActions'
import { useNavigate } from 'react-router-dom'

const NuevoProducto = () => {
  const dispatch = useDispatch()
  const [nombre, setNombre] = useState('')
  const [precio, setPrecio] = useState(0)
  const navigate = useNavigate()

  const cargando = useSelector((state) => state.productos.loading)
  const error = useSelector((state) => state.productos.error)

  const enviarProducto = (producto) => {
    dispatch(crearNuevoProductoAction(producto))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (nombre.trim() === '' || precio <= 0) {
      return
    }

    enviarProducto({ nombre, precio })

    navigate('/')
  }
  const handleInputChange = (event) => {
    setNombre(event.target.value)
  }
  const handleInputChangePrecio = (event) => {
    setPrecio(Number(event.target.value))
  }

  return (
    <div className='row justify-content-center'>
      <div className='col-md-8'>
        <div className='card'>
          <div className='card-body'>
            <h2 className='text-center mb-4 font-weight-bold'>Add Product</h2>
            <form onSubmit={handleSubmit}>
              <div className='form-group'>
                <label>Product Name</label>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Nombre Producto'
                  name='nombre'
                  value={nombre}
                  onChange={handleInputChange}
                ></input>
              </div>
              <div className='form-group'>
                <label>Product Price</label>
                <input
                  type='number'
                  className='form-control'
                  placeholder='Precio Producto'
                  name='precio'
                  value={precio}
                  onChange={handleInputChangePrecio}
                ></input>
              </div>
              <button
                type='submit'
                className='btn btn-primary font-weight-bold text-uppercase d-block w-100'
              >
                Add
              </button>
            </form>
            {cargando ? <p>Cargando...</p> : null}
            {error ? (
              <p className='aler alert-danger p2 mt-4 text-center'>Error</p>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  )
}

export default NuevoProducto
