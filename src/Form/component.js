import React from 'react';
import {
} from 'prop-types';
import {hot} from 'react-hot-loader';
import {
  Button,
  Form as AntForm,
  Input,
  InputNumber,
  Row,
} from 'antd';

const FormItem = AntForm.Item;

/**
 * Form Page
 */
@hot(module)
@AntForm.create({
  mapPropsToFields(props) {
    return {
      age: AntForm.createFormField({
        value: props.age,
      }),
      name: AntForm.createFormField({
        value: props.name,
      }),
    };
  },
})
class Form extends React.Component {
  static propTypes = {
  };

  handleSubmit(e) {
    e.preventDefault();

    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  /**
   * Render Form Page
   * @return {Node}
   */
  render() {
    const {
      form,
      onAgeChange,
      onFormReset,
      onNameChange,
    } = this.props;

    const {
      getFieldDecorator,
    } = form;

    return (
      <AntForm layout="inline" onSubmit={this.handleSubmit.bind(this)}>
        <Row>
          <FormItem label="姓名">
            {getFieldDecorator('name', {
              rules: [{
                required: true,
                message: '必填',
              }],
            })(
              <Input
                autoComplete='off'
                onChange={(e) => {
                  onNameChange(e.target.value);
                }}
              />
            )}
          </FormItem>
          <FormItem label="年龄">
            {getFieldDecorator('age', {
              rules: [{
                required: true,
                message: '必填',
              }],
            })(
              <InputNumber
                min={0}
                onChange={(e) => {
                  onAgeChange(e);
                }}
                precision={2}
              />
            )}
          </FormItem>
        </Row>
        <Row>
          <FormItem>
            <Button type="primary" onClick={onFormReset}>Reset</Button>
          </FormItem>
          <FormItem>
            <Button type="primary" htmlType="submit">Submit</Button>
          </FormItem>
        </Row>
      </AntForm>
    );
  }
}

export default Form;
