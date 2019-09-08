import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'
import {
  Button,
  Form as AntForm,
  Input,
  InputNumber,
  Row,
  TimePicker
} from 'antd'

const FormItem = AntForm.Item

const styles = {
  addButton: {
    color: 'white',
    background: 'deeppink'
  }
}

/**
 * Form Page
 */
@AntForm.create({
  mapPropsToFields (props) {
    const childrenProp = {}

    props.children.forEach((child, index) => {
      childrenProp[`children[${index}].name`] = AntForm.createFormField({
        value: child.name
      })
      childrenProp[`children[${index}].age`] = AntForm.createFormField({
        value: child.age
      })
    })

    return {
      age: AntForm.createFormField({
        value: props.age
      }),
      birthTime: AntForm.createFormField({
        value: props.birthTime
      }),
      ...childrenProp,
      name: AntForm.createFormField({
        value: props.name
      })
    }
  }
})

class Form extends React.Component {
  /**
   * Form submit handler.
   * @param  {Object} e - The event source of the callback.
   */
  handleSubmit (e) {
    e.preventDefault()

    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
      }
    })
  }

  /**
   * Render Form Page
   * @return {Node}
   */
  render () {
    const {
      classes,
      children,
      form,
      onAgeChange,
      onBirthTimeChange,
      onChildrenAdd,
      onChildrenAgeChange,
      onChildrenNameChange,
      onChildrenRemove,
      onFormReset,
      onNameChange
    } = this.props

    const {
      getFieldDecorator
    } = form

    return (
      <AntForm layout='inline' onSubmit={this.handleSubmit.bind(this)}>
        <Row>
          <FormItem label='姓名'>
            {getFieldDecorator('name', {
              rules: [{
                required: true,
                message: '必填'
              }]
            })(
              <Input
                autoComplete='off'
                onChange={(e) => {
                  onNameChange(e.target.value)
                }}
              />
            )}
          </FormItem>
          <FormItem label='年龄'>
            {getFieldDecorator('age', {
              rules: [{
                required: true,
                message: '必填'
              }]
            })(
              <InputNumber
                min={0}
                onChange={(e) => {
                  onAgeChange(e)
                }}
                precision={2}
              />
            )}
          </FormItem>
          <FormItem label='出生时间'>
            {getFieldDecorator('birthTime', {
              rules: [{
                required: true,
                message: '必填'
              }]
            })(
              <TimePicker
                format='HH:mm'
                onChange={(e) => {
                  onBirthTimeChange(e)
                }}
              />
            )}
          </FormItem>
        </Row>
        {children.map((child, index) => {
          return (
            <Row key={child.id}>
              <FormItem label='孩子姓名'>
                {getFieldDecorator(`children[${index}].name`, {
                  rules: [{
                    required: true,
                    message: '必填'
                  }]
                })(
                  <Input
                    autoComplete='off'
                    onChange={(e) => {
                      onChildrenNameChange({ index, value: e.target.value })
                    }}
                  />
                )}
              </FormItem>
              <FormItem label='孩子年龄'>
                {getFieldDecorator(`children[${index}].age`, {
                  rules: [{
                    required: true,
                    message: '必填'
                  }]
                })(
                  <InputNumber
                    min={0}
                    onChange={(e) => {
                      onChildrenAgeChange({ index, value: e })
                    }}
                    precision={2}
                  />
                )}
              </FormItem>
            </Row>
          )
        })}
        <Row>
          <FormItem>
            <Button className={classes.addButton} type='primary' onClick={onChildrenAdd}>Add</Button>
          </FormItem>
          <FormItem>
            <Button type='primary' onClick={onChildrenRemove}>Remove</Button>
          </FormItem>
        </Row>
        <Row>
          <FormItem>
            <Button type='primary' onClick={onFormReset}>Reset</Button>
          </FormItem>
          <FormItem>
            <Button type='primary' htmlType='submit'>Submit</Button>
          </FormItem>
        </Row>
      </AntForm>
    )
  }
}

Form.propTypes = {
  classes: PropTypes.object,
  children: PropTypes.array,
  form: PropTypes.object,
  onAgeChange: PropTypes.func,
  onBirthTimeChange: PropTypes.func,
  onChildrenAdd: PropTypes.func,
  onChildrenAgeChange: PropTypes.func,
  onChildrenNameChange: PropTypes.func,
  onChildrenRemove: PropTypes.func,
  onFormReset: PropTypes.func,
  onNameChange: PropTypes.func
}

export default withStyles(styles)(Form)
