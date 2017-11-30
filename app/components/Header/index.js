import React from 'react';
import { FormattedMessage } from 'react-intl';

import messages from './messages';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <FormattedMessage {...messages.title} />
      </div>
    );
  }
}

export default Header;
