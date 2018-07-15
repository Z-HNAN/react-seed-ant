/* eslint-disable require-jsdoc */
import {Async, Sync} from 'redux-action-boilerplate';

export const async = new Async({
  prefix: 'form',
  actions: [
  ],
});

export const sync = new Sync({
  prefix: 'form',
  actions: [
    'addChildren',
    'changeAge',
    'changeBirthTime',
    'changeChildrenAge',
    'changeChildrenName',
    'changeName',
    'removeChildren',
    'resetForm',
  ],
});
