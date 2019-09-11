/* eslint-disable require-jsdoc */
/**
 * This module composes redux store instance.
 * Redux store manages many complex states for the app
 */
import { applyMiddleware, createStore } from 'redux'

import { routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import { sagaMiddleware } from './injectAsyncSaga'
import rootSaga from './saga'
import logger from 'redux-logger'

import createReducer from './reducer'

/**
 * Create middlewares
 */
const middlewares = []
/**
 * Contains HTML5 browser history instance
 */
export const history = createBrowserHistory()
/**
 * Represents history middleware
 */
const historyMiddleware = routerMiddleware(history)
middlewares.push(historyMiddleware)

/**
 * Represents saga middleware
 */
middlewares.push(sagaMiddleware)

// Disable logger middlewares in production mode
if (process.env.NODE_ENV !== 'production') {
  middlewares.push(logger)
}

/**
 * Factory composing react store with reducers and middlewares
 * @param  {Object} initialState - Instance by calling applyMiddleware
 * @return {Store}
 */
export default function configureStore () {
  const store = createStore(
    createReducer(history),
    applyMiddleware(...middlewares)
  )

  sagaMiddleware.run(rootSaga)

  // Enable Webpack hot module replacement for reducers
  // if (module.hot) {
  //   module.hot.accept('./reducer', () => {
  //     store.replaceReducer(createReducer(store.asyncReducers));
  //   });
  // }

  // Extensions
  // Async reducer registry, adding an extra attribute to the store object
  store.asyncReducers = {}

  return store
}
