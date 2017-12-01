/**
*
* DateTimePicker
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';
import momentLocalizer from 'react-widgets-moment';
import { DateTimePicker as ReactDateTimePicker } from 'react-widgets';

Moment.locale('en');
momentLocalizer();

function DateTimePicker({ date, onChange }) {
  return (
    <ReactDateTimePicker
      value={date}
      onChange={onChange}
    />
  );
}

DateTimePicker.propTypes = {
  date: PropTypes.object,
  onChange: PropTypes.func,
};

DateTimePicker.defaultProps = {
  date: new Date(),
};

export default DateTimePicker;
