/* eslint-disable require-jsdoc */
import {
  sync,
} from './actions';
import moment from 'moment';

const {
  CHANGE_AGE,
  CHANGE_BIRTH_TIME,
  CHANGE_NAME,
  RESET_FORM,
} = sync;

const initialState = {
  age: '30',
  birthTime: moment('14:25', 'HH:mm'),
  name: '张三',
};

export default function Reducer(state=initialState, action) {
  switch (action.type) {
    case CHANGE_AGE:
      return {
        ...state,
        age: action.payload,
      };
    case CHANGE_BIRTH_TIME:
      return {
        ...state,
        birthTime: action.payload,
      };
    case CHANGE_NAME:
      return {
        ...state,
        name: action.payload,
      };
    case RESET_FORM:
      return {
        ...initialState,
      };
    default:
      return state;
  }
}
