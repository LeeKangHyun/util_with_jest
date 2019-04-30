import { combineReducers } from 'redux'

import filters from './Filters'
import counter from './Counter'

const rootReducer = combineReducers({
  filters,
  counter,
})

export default rootReducer
