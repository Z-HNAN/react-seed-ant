/**
 * This module composes root reducer including react-router
 * @requires redux
 * @requires connected-react-router
 */
import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import appReducer from './App/reducer'

/**
 * This is a create reducer function
 * It returns current permanent and asynchronously loaded reducers
 * @param  {function} asyncReducers - asynchronously loaded recuders
 * @return {object} - root reducer
 */
export default function createReducer (history, asyncReducers) {
  /**
   * Return root reducer
   * Name of each leaf store should match Page Name or Functionality Name
   */
  return combineReducers({
    // Permanent redux reducers
    app: appReducer,
    /**
     * Router reducer (we don't provide reducer.js, use as e.g)
     * -> https://github.com/ReactTraining/history#navigation
     * method (history): push, replace, go, goBack, goForward
     *
     * e.g dispatch(push('/person'))
     */
    router: connectRouter(history),
    // Aync reducers
    ...asyncReducers
  })
}
