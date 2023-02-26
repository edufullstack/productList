import { combineReducers } from 'redux'
import productosReducer from '../reducer/productosReducer'

export default combineReducers({
  productos: productosReducer,
})
