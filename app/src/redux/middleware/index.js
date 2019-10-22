import thunk from 'redux-thunk'
import { applyMiddleware, compose } from 'redux'
// import { composeWithDevTools } from 'redux-devtools-extension'

const actionStatus = () => {
  return next => action => {
    console.log('Action Fired:', action.type)
    const baseAction = action.type.split('_')
    const actionStatus = baseAction.pop()
    return next({
      ...action,
      base: baseAction.join('_'),
      status: actionStatus
    })
  }
}

export default window.navigator.userAgent.includes('Chrome') &&
window.navigator.vendor === 'Google Inc.'
  ? compose(
      applyMiddleware(thunk, actionStatus)
      // composeWithDevTools()
    )
  : compose(applyMiddleware(thunk, actionStatus))
