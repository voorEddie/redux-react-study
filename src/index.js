import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reduxDCMM from './reducers'
import 'normalize.css'
import 'font-awesome/css/font-awesome.css'
import App from './App'

let store = createStore(reduxDCMM)

store.subscribe(() =>
  console.log(store.getState())
)

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
)
