/**
*
* Input
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { FormControl } from 'react-bootstrap';


class Input extends React.PureComponent {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e) => {
    const { onChange } = this.props;
    e.preventDefault();
    onChange(e.target.value);
  };

  render() {
    const { value, placeholder } = this.props;
    return (<FormControl type="text" value={value} onChange={this.handleChange} placeholder={placeholder} />);
  }
}

Input.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  value: '',
  placeholder: '',
};

export default Input;
