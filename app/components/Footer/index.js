import React from 'react';
import { FormattedMessage } from 'react-intl';

import LocaleToggle from '../../containers/LocaleToggle';
import Wrapper from './Wrapper';
import messages from './messages';

function Footer() {
  return (
    <Wrapper>
      <section>
        <FormattedMessage {...messages.message} />
      </section>
      <section>
        <LocaleToggle />
      </section>
      <section>
        <FormattedMessage
          {...messages.authorMessage}
          values={{
            author: <span>Samuel Rossetti</span>,
          }}
        />
      </section>
    </Wrapper>
  );
}

export default Footer;
