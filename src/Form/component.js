import React from 'react';
import {
} from 'prop-types';
import {hot} from 'react-hot-loader';

/**
 * Form Page
 */
@hot(module)
class Form extends React.Component {
  static propTypes = {
  };

  /**
   * Render Form Page
   * @return {Node}
   */
  render() {
    const {
    } = this.props;

    return (
      <div>
        Form Page
      </div>
    );
  }
}

export default Form;
