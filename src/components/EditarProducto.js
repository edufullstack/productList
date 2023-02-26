import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { editarProductoAction } from '../redux/actions/productoActions'
import { useNavigate } from 'react-router-dom'

const EditarProducto = () => {
  const dispatch = useDispatch()
  const producto = useSelector((state) => state.productos.productoEditar)
  const navigate = useNavigate()

  useEffect(() => {
    setProd(producto)
  }, [producto])

  const [prod, setProd] = useState({
    nombre: producto.nombre,
    precio: producto.precio,
  })
  const onChangeForm = (event) => {
    setProd({
      ...prod,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    dispatch(editarProductoAction(prod))

    navigate('/')
  }

  return (
    <div className='row justify-content-center'>
      <div className='col-md-8'>
        <div className='card'>
          <div className='card-body'>
            <h2 className='text-center mb-4 font-weight-bold'>Edit</h2>
            <form onSubmit={handleSubmit}>
              <div className='form-group'>
                <label>Product Name</label>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Product Name'
                  name='nombre'
                  value={prod.nombre}
                  onChange={onChangeForm}
                ></input>
              </div>
              <div className='form-group'>
                <label>Product Price</label>
                <input
                  type='number'
                  className='form-control'
                  placeholder='Product Price'
                  name='precio'
                  value={prod.precio}
                  onChange={onChangeForm}
                ></input>
              </div>
              <button
                type='submit'
                className='btn btn-primary font-weight-bold text-uppercase d-block w-100'
              >
                Save Changes
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditarProducto
