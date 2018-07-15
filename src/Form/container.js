/* eslint-disable require-jsdoc */
import {connect} from 'react-redux';

import Component from './component';
import {
  sync,
} from './actions';

const {
  addChildren,
  changeAge,
  changeBirthTime,
  changeChildrenName,
  changeName,
  removeChildren,
  resetForm,
} = sync;

const mapStateToProps = (state, ownProps) => {
  return {
    age: state.form.age,
    birthTime: state.form.birthTime,
    children: state.form.children,
    name: state.form.name,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onAgeChange: (payload) => {
      dispatch(changeAge(payload));
    },
    onBirthTimeChange: (payload) => {
      dispatch(changeBirthTime(payload));
    },
    onChildrenAdd: (payload) => {
      dispatch(addChildren(payload));
    },
    onChildrenNameChange: (payload) => {
      dispatch(changeChildrenName(payload));
    },
    onChildrenRemove: (payload) => {
      dispatch(removeChildren(payload));
    },
    onFormReset: () => {
      dispatch(resetForm());
    },
    onNameChange: (payload) => {
      dispatch(changeName(payload));
    },
  };
};

@connect(mapStateToProps, mapDispatchToProps)
class Container extends Component {

}

export default Container;
