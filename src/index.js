import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import configureStore, { history } from './store'

import App from './app'
/**
 * Represents the integration of redux store and react router
 * Logger must be the last middleware in chain,
 * otherwise it will log thunk and promise, not actual actions
 */
const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app')
)
