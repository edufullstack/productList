import {
  AGREGAR_PRODUCTO,
  AGREGAR_PRODUCTO_ERROR,
  AGREGAR_PRODUCTO_EXITO,
  COMENZAR_DESCARGA_PRODUCTOS,
  DESCARGA_PRODUCTOS_ERROR,
  DESCARGA_PRODUCTOS_EXITO,
} from '../action-types/ActionTypes'
import clienteAxios from '../../config/axios'
import Swal from 'sweetalert2'

export const crearNuevoProductoAction = (producto) => {
  return async (dispatch) => {
    dispatch(agregarProducto())
    try {
      await clienteAxios.post('/productos', producto)
      dispatch(agregarProductoExito(producto))

      Swal.fire('Correcto', 'Product added correctly', 'success')
    } catch (error) {
      console.log(error)
      dispatch(agregarProductoError(true))

      Swal.fire({
        icon: 'error',
        title: 'Hubo un error',
        text: 'Try again',
      })
    }
  }
}

export const agregarProducto = (producto) => {
  return { type: AGREGAR_PRODUCTO, payload: true }
}

export const agregarProductoExito = (producto) => {
  return { type: AGREGAR_PRODUCTO_EXITO, payload: producto }
}

export const agregarProductoError = (estado) => {
  return { type: AGREGAR_PRODUCTO_ERROR, payload: estado }
}

export const obtenerProductosAction = () => {
  return async (dispatch) => {
    dispatch(descargarProductos())
    try {
      const respuesta = await clienteAxios.get('/productos')
      dispatch(descargaProductosExitosa(respuesta.data))
    } catch (error) {
      dispatch(descargaProductosError())
      console.log(error)
    }
  }
}

const descargarProductos = () => {
  return { type: COMENZAR_DESCARGA_PRODUCTOS, payload: true }
}

const descargaProductosExitosa = (productos) => {
  return { type: DESCARGA_PRODUCTOS_EXITO, payload: productos }
}
const descargaProductosError = () => {
  return { type: DESCARGA_PRODUCTOS_ERROR, payload: true }
}
