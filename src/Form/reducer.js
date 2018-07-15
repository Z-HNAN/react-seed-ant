/* eslint-disable require-jsdoc */
import {
  sync,
} from './actions';

const {
  CHANGE_AGE,
  CHANGE_NAME,
  RESET_FORM,
} = sync;

const initialState = {
  age: '30',
  name: '张三',
};

export default function Reducer(state=initialState, action) {
  switch (action.type) {
    case CHANGE_AGE:
      return {
        ...state,
        age: action.payload,
      };
    case CHANGE_NAME:
      return {
        ...state,
        name: action.payload,
      };
    case RESET_FORM:
      return {
        ...state,
        name: '李四',
      };
    default:
      return state;
  }
}
