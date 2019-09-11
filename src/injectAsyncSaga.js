import createSagaMiddleware from 'redux-saga'
import { fork } from 'redux-saga/effects'

/**
 * export sagaMiddleware to init sagaMiddleware
 */
export const sagaMiddleware = createSagaMiddleware()

export default function injectAsyncSaga (saga) {
  const main = function* () {
    yield fork(saga)
  }
  /* add listener to sage */
  sagaMiddleware.run(main)
}
