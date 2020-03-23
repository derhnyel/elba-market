import { combineReducers } from 'redux'

import products from './productReducer'
import user from './userReducer'

export default combineReducers({
  products,
  user
})