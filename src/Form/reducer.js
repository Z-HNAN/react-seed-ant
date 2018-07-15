/* eslint-disable require-jsdoc */
import {
  sync,
} from './actions';
import moment from 'moment';

const {
  ADD_CHILDREN,
  CHANGE_AGE,
  CHANGE_BIRTH_TIME,
  CHANGE_CHILDREN_NAME,
  CHANGE_NAME,
  REMOVE_CHILDREN,
  RESET_FORM,
} = sync;

const initialState = {
  age: '30',
  birthTime: moment('14:25', 'HH:mm'),
  name: '张三',
  children: [],
};

export default function Reducer(state=initialState, action) {
  switch (action.type) {
    case ADD_CHILDREN:
      return {
        ...state,
        children: [
          ...state.children,
          {
            id: state.children.slice(-1)[0] ? state.children.slice(-1)[0].id + 1 : 0,
            name: '',
          },
        ],
      };
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
    case CHANGE_CHILDREN_NAME:
      return {
        ...state,
        children: [
          ...state.children.slice(0, action.payload.index),
          {
            ...state.children[action.payload.index],
            name: action.payload.value,
          },
          ...state.children.slice(action.payload.index + 1),
        ],
      };
    case CHANGE_NAME:
      return {
        ...state,
        name: action.payload,
      };
    case REMOVE_CHILDREN:
      return {
        ...state,
        children: [
          ...state.children.slice(0, -1),
        ],
      };
    case RESET_FORM:
      return {
        ...initialState,
      };
    default:
      return state;
  }
}
