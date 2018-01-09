import React from 'react'
import { render } from 'react-dom'
// import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './App'
import reducer from './reducer'
const redux = require('redux')

const store = redux.createStore(reducer,redux.compose(
  window.devToolsExtension ? window.devToolsExtension(): f => f
))

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
