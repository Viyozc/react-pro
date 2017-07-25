import {combineReducers} from 'redux'
import assign from 'loash/assign'
import {routerReducer} from 'react-router-redux'

import pageReducer from './page'
export default combineReducers(assign({
  routing: routerReducer,
  data: pageReducer.data
}))
