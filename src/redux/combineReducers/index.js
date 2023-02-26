import { combineReducers } from 'redux'
import productosReducer from '../reducer/productosReducer'
import alertaReducer from '../reducer/alertaReducer'

export default combineReducers({
  productos: productosReducer,
  alerta: alertaReducer,
})
