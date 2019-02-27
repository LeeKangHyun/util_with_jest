import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import configureStore from '@/redux/Store/configureStore'
import Route from '@/config/Route'

const store = configureStore()

const rootElement = document.getElementById('app')
ReactDOM.render(
  <Provider store={store}>
    <Route />
  </Provider>,
  rootElement,
)
