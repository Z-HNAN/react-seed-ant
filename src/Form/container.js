/* eslint-disable require-jsdoc */
import {connect} from 'react-redux';

import Component from './component';
import {
  sync,
} from './actions';

const {
  changeAge,
  changeName,
  resetForm,
} = sync;

const mapStateToProps = (state, ownProps) => {
  return {
    age: state.form.age,
    name: state.form.name,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onAgeChange: (payload) => {
      dispatch(changeAge(payload));
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
