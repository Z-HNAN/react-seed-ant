/* eslint-disable require-jsdoc */
import React from 'react'
import {
  Route,
  Switch
} from 'react-router-dom'
import PropTypes from 'prop-types'

import Lodable from 'react-loadable'
import LoadableLoading from '@Common/LoadableLoading'

// Dynamically load reducer
import injectAsyncReducer from './injectAsyncReducer'
// Dynamically load saga
import injectAsyncSaga from './injectAsyncSaga'

/**
 * Router with lazy loaded pages
 */
const Router = (props, context) => {
  const FormPage = Lodable({
    loader: () => {
      injectAsyncReducer( // Aynchronously load reducer
        context.store,
        'form', // Reducer name
        require('./Form/reducer').default // Reducer function
      )

      injectAsyncSaga( // Aynchronously load saga
        require('./Form/saga').default // Reducer function
      )

      return import('./Form')
    },
    loading: LoadableLoading
  })

  return (
    <Switch>

      <Route exact path="/" component={ FormPage } />

    </Switch>
  )
}

Router.contextTypes = {
  store: PropTypes.object
}

export default Router
