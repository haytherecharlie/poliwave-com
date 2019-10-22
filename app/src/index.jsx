import React from 'react'
import ReactDOM from 'react-dom'
import Router from 'routes/Router'
import { Provider } from 'react-redux'
import { store } from 'redux/store'
import { GlobalStyle } from 'assets/styles/App.styled'

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <Router />
  </Provider>,
  document.getElementById('root')
)
