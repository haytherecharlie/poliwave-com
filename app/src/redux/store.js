import { createStore } from 'redux'
import { connect } from 'react-redux'
import { createAddEntries } from './content/entries.action'
import middleware from './middleware'
import rootReducer from './root.reducer'

export const addEntries = () => async d => await createAddEntries(d)

const store = createStore(rootReducer, middleware)

export { store, connect }
