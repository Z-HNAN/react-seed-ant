/* eslint-disable require-jsdoc */
import {all} from 'redux-saga/effects';

import form from './Form/saga';

export default function* rootSaga() {
  yield all([
    form(),
  ]);
}
