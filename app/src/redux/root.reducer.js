import { combineReducers } from 'redux'
import entriesReducer from './content/entries.reducer'

const rootReducer = combineReducers({
  entries: entriesReducer
})

export default rootReducer
