import {
  AGREGAR_PRODUCTO,
  AGREGAR_PRODUCTO_ERROR,
  AGREGAR_PRODUCTO_EXITO,
  COMENZAR_DESCARGA_PRODUCTOS,
  DESCARGA_PRODUCTOS_ERROR,
  DESCARGA_PRODUCTOS_EXITO,
  OBTENER_PRODUCTO_ELIMINAR,
  PRODUCTO_ELIMINADO_ERROR,
  PRODUCTO_ELIMINADO_EXITO,
  OBTENER_PRODUCTO_EDITAR,
  PRODUCTO_EDITADO_ERROR,
  PRODUCTO_EDITADO_EXITO,
  COMENZAR_EDICION_PRODUCTO,
} from '../action-types/ActionTypes'
import clienteAxios from '../../config/axios'
import Swal from 'sweetalert2'

export const crearNuevoProductoAction = (producto) => {
  return async (dispatch) => {
    dispatch(agregarProducto())
    try {
      await clienteAxios.post('/productos', producto)
      dispatch(agregarProductoExito(producto))

      Swal.fire('Correct', 'Product added correctly', 'success')
    } catch (error) {
      console.log(error)
      dispatch(agregarProductoError(true))

      Swal.fire({
        icon: 'error',
        title: 'Errorr',
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

export const borrarProductoAction = (id) => {
  return async (dispatch) => {
    dispatch(obtenerProductoEliminar(id))
    try {
      await clienteAxios.delete(`/productos/${id}`)
      dispatch(eliminarProductoExito())
      Swal.fire('Deleted', 'Your product has been deleted', 'success')
    } catch (error) {
      console.log(error)
      dispatch(eliminarProductoError())
    }
  }
}

const obtenerProductoEliminar = (id) => {
  return { type: OBTENER_PRODUCTO_ELIMINAR, payload: id }
}

const eliminarProductoExito = () => {
  return { type: PRODUCTO_ELIMINADO_EXITO }
}

const eliminarProductoError = () => {
  return { type: PRODUCTO_ELIMINADO_ERROR, payload: true }
}

export const obtenerProductoEditar = (producto) => {
  return (dispatch) => {
    dispatch(obtenerProductoAction(producto))
  }
}

const obtenerProductoAction = (producto) => {
  return { type: OBTENER_PRODUCTO_EDITAR, payload: producto }
}
export const editarProductoAction = (producto) => {
  return async (dispatch) => {
    dispatch(editarProducto())
    try {
      await clienteAxios.put(`/productos/${producto.id}`, producto)
      dispatch(editarProductoExito(producto))
    } catch (error) {
      console.log(error)
      dispatch(editarProductoError())
    }
  }
}

const editarProducto = () => {
  return { type: COMENZAR_EDICION_PRODUCTO }
}

const editarProductoExito = (producto) => {
  return { type: PRODUCTO_EDITADO_EXITO, payload: producto }
}
const editarProductoError = () => {
  return { type: PRODUCTO_EDITADO_ERROR, payload: true }
}
