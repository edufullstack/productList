import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {
  borrarProductoAction,
  obtenerProductoEditar,
} from '../redux/actions/productoActions'
import Swal from 'sweetalert2'

const Producto = ({ producto }) => {
  const { nombre, precio, id } = producto
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const confirmarEliminarProducto = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'A product that is deleted cannot be recovered',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.value) {
        // pasarlo al action
        dispatch(borrarProductoAction(id))
      }
    })
  }

  const redirecionarEdicion = (producto) => {
    dispatch(obtenerProductoEditar(producto))
    navigate(`productos/editar/${producto.id}`)
  }

  return (
    <tr>
      <td>{nombre}</td>
      <td>
        <span className='font-weight-bold'>$ {precio} </span>
      </td>
      <td className='acciones'>
        <button
          type='button'
          onClick={() => {
            redirecionarEdicion(producto)
          }}
          className='btn btn-primary mr-2'
        >
          Edit
        </button>
        <button
          type='button'
          className='btn btn-danger'
          onClick={() => confirmarEliminarProducto(id)}
        >
          Delete
        </button>
      </td>
    </tr>
  )
}

export default Producto
