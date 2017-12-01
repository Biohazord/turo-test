/**
 *
 * Car
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

import { FormattedMessage, FormattedNumber } from 'react-intl';
import messages from './messages';

import PriceDetail from '../../components/PriceDetail';

const StyledGrid = styled(Grid)`
    padding: 5px 0;
`;

function Car({
                currencyCode,
                deepLink,
                subTotal,
                taxesAndFees,
                totalPrice,
                dailyRate,
                mileageDescription,
                rentalDays,
                carType,
                className }) {
  const { carTypeName, typicalSeating, possibleModels, possibleFeatures } = carType;
  return (
    <div>
      <StyledGrid bsClass={className}>
        <Row>
          <Col xs={12}>
            <h3><a href={deepLink}>{carTypeName}</a></h3>
          </Col>
        </Row>
        <Row>
          <Col sm={6}>
            <ul style={{ listStyle: 'none' }}>
              <li>
                <FontAwesome name={'user'} /> { typicalSeating }
              </li>
              <li>
                {possibleModels}
              </li>
            </ul>
          </Col>
          <Col sm={6}>
            <ul style={{ listStyle: 'none' }}>
              <li>
                <FormattedMessage {...messages.distance} values={{ distance: mileageDescription }} />
              </li>
              <li>
                <PriceDetail currencyCode={currencyCode} dailyRate={dailyRate} rentalDays={rentalDays} subTotal={subTotal} taxesAndFees={taxesAndFees} />
                <FormattedNumber value={totalPrice} {...{ style: 'currency' }} currency={currencyCode} />
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <div>*{possibleFeatures}</div>
          </Col>
        </Row>
      </StyledGrid>
    </div>
  );
}

Car.propTypes = {
  currencyCode: PropTypes.string,
  deepLink: PropTypes.string,
  subTotal: PropTypes.number,
  taxesAndFees: PropTypes.number,
  totalPrice: PropTypes.number,
  dailyRate: PropTypes.number,
  mileageDescription: PropTypes.string,
  rentalDays: PropTypes.number,
  carType: PropTypes.object,
  className: PropTypes.string,
};

Car.defautlProps = {
  currencyCode: 'USD',
  deepLink: undefined,
  resultId: '', // We may want to use UUID to generate a unique ID
  refNumber: undefined,
  subTotal: '0',
  taxesAndFees: '0',
  totalPrice: '0',
  carTypeCode: undefined,
  dailyRate: '0',
  locationDescription: undefined,
  mileageDescription: undefined,
  pickupAirport: undefined,
  rentalDays: undefined,
  vendorLocationId: undefined,
  carType: {},
  className: undefined,
};
export default Car;
