/**
*
* PriceDetail
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, FormattedNumber } from 'react-intl';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

import messages from './messages';

const PriceDetail = ({ taxesAndFees, dailyRate, rentalDays, subTotal, currencyCode }) => {
  const tooltip = (
    <Tooltip id="priceDetail">
      <div>
        <div>
          <FormattedNumber value={dailyRate} {...{ style: 'currency' }} currency={currencyCode} /> X {rentalDays} = <FormattedNumber value={subTotal} {...{ style: 'currency' }} currency={currencyCode} />
        </div>
        <div>
          <FormattedMessage {...messages.taxesAndFees} values={{ amount: <FormattedNumber value={taxesAndFees} {...{ style: 'currency' }} currency={currencyCode} /> }} />
        </div>
      </div>
    </Tooltip>
  );

  return (
    <OverlayTrigger
      overlay={tooltip}
      placement="left"
      delayShow={300}
      delayHide={150}
    >
      <FontAwesome name={'plus-circle'} />
    </OverlayTrigger>
  );
};

PriceDetail.propTypes = {
  taxesAndFees: PropTypes.number,
  dailyRate: PropTypes.number,
  rentalDays: PropTypes.number,
  subTotal: PropTypes.number,
  currencyCode: PropTypes.string,
};

export default PriceDetail;
