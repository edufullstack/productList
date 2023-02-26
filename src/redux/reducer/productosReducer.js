import {
  AGREGAR_PRODUCTO,
  AGREGAR_PRODUCTO_EXITO,
  AGREGAR_PRODUCTO_ERROR,
  COMENZAR_DESCARGA_PRODUCTOS,
  DESCARGA_PRODUCTOS_ERROR,
  DESCARGA_PRODUCTOS_EXITO,
  OBTENER_PRODUCTO_ELIMINAR,
  PRODUCTO_ELIMINADO_ERROR,
  PRODUCTO_ELIMINADO_EXITO,
  OBTENER_PRODUCTO_EDITAR,
  COMENZAR_EDICION_PRODUCTO,
  PRODUCTO_EDITADO_EXITO,
  PRODUCTO_EDITADO_ERROR,
} from '../action-types/ActionTypes'

// cada reducer tiene su propio state
const initialState = {
  productos: [],
  error: null,
  loading: false,
  productoEliminar: null,
  productoEditar: null,
}

const productosReducer = (state = initialState, action) => {
  switch (action.type) {
    case COMENZAR_DESCARGA_PRODUCTOS:
    case AGREGAR_PRODUCTO:
      return {
        ...state,
        loading: action.payload,
      }
    case AGREGAR_PRODUCTO_EXITO:
      return {
        ...state,
        loading: false,
        productos: [...state.productos, action.payload],
      }
    case DESCARGA_PRODUCTOS_ERROR:
    case PRODUCTO_ELIMINADO_ERROR:
    case AGREGAR_PRODUCTO_ERROR:
    case PRODUCTO_EDITADO_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    case DESCARGA_PRODUCTOS_EXITO:
      return {
        ...state,
        productos: action.payload,
        loading: false,
        error: null,
      }
    case OBTENER_PRODUCTO_ELIMINAR:
      return {
        ...state,
        productoEliminar: action.payload,
      }
    case PRODUCTO_ELIMINADO_EXITO:
      return {
        ...state,
        productos: state.productos.filter((producto) => {
          return producto.id !== state.productoEliminar
        }),
      }
    case OBTENER_PRODUCTO_EDITAR:
      return {
        ...state,
        productoEditar: action.payload,
      }
    case PRODUCTO_EDITADO_EXITO:
      return {
        ...state,
        productos: state.productos.map((producto) => {
          return producto.id === action.payload.id
            ? (producto = action.payload)
            : producto
        }),
        productoEditar: null,
      }

    default:
      return { ...state }
  }
}

export default productosReducer
