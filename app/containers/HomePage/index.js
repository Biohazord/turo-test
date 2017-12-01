/**
 *
 * HomePage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';

import { Grid, Row, Col, Button } from 'react-bootstrap';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

import DateTimePicker from '../../components/DateTimePicker';
import Car from '../../components/Car';
import LoadingIndicator from '../../components/LoadingIndicator';
import Input from '../../components/Input';

import {
    makeSelectAvailableCars,
    makeSelectQuery,
    makeSelectPickupDate,
    makeSelectDropoffDate,
    makeSelectIsLoading,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import {
    search,
    changeDestination,
    changePickupDate,
    changeDropoffDate,
} from './actions';
import messages from './messages';

const ConstrainedGrid = styled(Grid)`
    width: auto;
`;

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {
        availableCars,
        destination,
        pickupDate,
        dropoffDate,
        onDestinationChange,
        onPickupChange,
        onDropoffChange,
        onSearch,
        isLoading,
    } = this.props;

    return (
      <div style={{ padding: '5px 0 0 0' }}>
        <Helmet>
          <title>HomePage</title>
          <meta name="description" content="Description of HomePage" />
        </Helmet>
        <ConstrainedGrid>
          <Row>
            <Col sm={2}>
                Location:
              <Input value={destination} onChange={onDestinationChange} placeholder={'Destination'} />
            </Col>
            <Col sm={4}>
                Pick-up Date:
              <DateTimePicker date={pickupDate} onChange={onPickupChange} />
            </Col>
            <Col sm={4}>
                Drop-off Date:
              <DateTimePicker date={dropoffDate} onChange={onDropoffChange} />
            </Col>
            <Col sm={2}>
                &nbsp;
              <Button onClick={onSearch}><FontAwesome name={'search'} />Search</Button>
            </Col>
          </Row>
        </ConstrainedGrid>
        { isLoading && <LoadingIndicator />}
        {
          !isLoading &&
          (<ConstrainedGrid>
            {
              availableCars.map((availableCar) => (
                <Car
                  key={availableCar.id}
                  currencyCode={availableCar.currencyCode}
                  dailyRate={availableCar.dailyRate}
                  deepLink={availableCar.deepLink}
                  mileageDescription={availableCar.mileageDescription}
                  rentalDays={availableCar.rentalDays}
                  subTotal={availableCar.subTotal}
                  taxesAndFees={availableCar.taxesAndFees}
                  totalPrice={availableCar.totalPrice}
                  carType={availableCar.carType}
                />
              ))
            }
          </ConstrainedGrid>)
        }
        <div>
          *: <FormattedMessage {...messages.disclaimer} />
        </div>
      </div>
    );
  }
}

HomePage.propTypes = {
  onSearch: PropTypes.func.isRequired,
  availableCars: PropTypes.array,
  destination: PropTypes.string,
  pickupDate: PropTypes.object,
  dropoffDate: PropTypes.object,
  onDestinationChange: PropTypes.func,
  onPickupChange: PropTypes.func,
  onDropoffChange: PropTypes.func,
  isLoading: PropTypes.bool,
};

HomePage.defaultProps = {
  availableCars: [],
  pickupDate: new Date(),
  dropoffDate: new Date(),
};

const mapStateToProps = createStructuredSelector({
  availableCars: makeSelectAvailableCars(),
  destination: makeSelectQuery(),
  pickupDate: makeSelectPickupDate(),
  dropoffDate: makeSelectDropoffDate(),
  isLoading: makeSelectIsLoading(),
});

function mapDispatchToProps(dispatch) {
  return {
    onSearch: () => dispatch(search()),
    onDestinationChange: (value) => dispatch(changeDestination({ value })),
    onPickupChange: (value) => dispatch(changePickupDate({ value })),
    onDropoffChange: (value) => dispatch(changeDropoffDate({ value })),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'homePage', reducer });
const withSaga = injectSaga({ key: 'homePage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
