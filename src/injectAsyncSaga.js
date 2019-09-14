import createSagaMiddleware from 'redux-saga'
import { fork } from 'redux-saga/effects'

/**
 * export sagaMiddleware to init sagaMiddleware
 */
export const sagaMiddleware = createSagaMiddleware()

const sagas = []

export default function injectAsyncSaga (key, saga) {
  if (sagas.includes(key)) {
    /* already inject this saga */
    return
  } else {
    /* no inject this saga */
    sagas.push(key)
    const main = function* () {
      yield fork(saga)
    }
    /* add listener to sage */
    sagaMiddleware.run(main)
  }
}
