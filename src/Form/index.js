import React from 'react'
import { connect } from 'react-redux'
import FormComponent from './component'
import {
  sync
} from './actions'

const {
  addChildren,
  changeAge,
  changeBirthTime,
  changeChildrenAge,
  changeChildrenName,
  changeName,
  removeChildren,
  resetForm
} = sync

const mapStateToProps = (state, ownProps) => {
  return {
    age: state.form.age,
    birthTime: state.form.birthTime,
    children: state.form.children,
    name: state.form.name
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onAgeChange: (payload) => {
      dispatch(changeAge(payload))
    },
    onBirthTimeChange: (payload) => {
      dispatch(changeBirthTime(payload))
    },
    onChildrenAdd: () => {
      dispatch(addChildren())
    },
    onChildrenAgeChange: (payload) => {
      dispatch(changeChildrenAge(payload))
    },
    onChildrenNameChange: (payload) => {
      dispatch(changeChildrenName(payload))
    },
    onChildrenRemove: () => {
      dispatch(removeChildren())
    },
    onFormReset: () => {
      dispatch(resetForm())
    },
    onNameChange: (payload) => {
      dispatch(changeName(payload))
    }
  }
}

@connect(mapStateToProps, mapDispatchToProps)
class Form extends React.PureComponent {
  render () {
    return (
      <FormComponent { ...this.props }/>
    )
  }
}

export default Form
