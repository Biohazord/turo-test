import { takeEvery } from 'redux-saga';
import { put, all, call, select } from 'redux-saga/effects';
import moment from 'moment';

import request from '../../utils/request';

import {
    SEARCH,
} from './constants';

import {
    searchError,
    searchSuccess,
} from './actions';

import {
    makeSelectDropoffDate,
    makeSelectPickupDate,
    makeSelectQuery,
} from './selectors';

function* searchSaga() {
  try {
    const query = yield select(makeSelectQuery());
    const pickupDate = yield select(makeSelectPickupDate());
    const dropoffDate = yield select(makeSelectDropoffDate());
    const pickupMoment = moment(pickupDate);
    const dropoffMoment = moment(dropoffDate);
    // TODO: Add env file for api key
    const apiKey = '';
    // The Hotline API doesn't respond to the fetch pre-flight request with a Access-Control-Allow-Origin header so we need to use a proxy.
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const requestURL = `${proxyUrl}http://api.hotwire.com/v1/search/car?dest=${query}&startdate=${pickupMoment.format('MM/DD/YYYY')}&enddate=${dropoffMoment.format('MM/DD/YYYY')}&pickuptime=${pickupMoment.format('HH:mm')}&dropofftime=${dropoffMoment.format('HH:mm')}&format=JSON&apikey=${apiKey}`;
    if (query.length <= 0) {
      throw Error('Missing location');
    }
    const results = yield call(request, requestURL);
    const { MetaData: { CarMetaData: { CarTypes: carTypes } } } = results;
    const { Result: availableCars } = results;
    yield put(searchSuccess({ carTypes, availableCars }));
  } catch (e) {
    yield put(searchError({ msg: e }));
  }
}

// List of generator function functions.
function* saga() {
  yield all([
    takeEvery(SEARCH, searchSaga),
  ]);
}

export {
    saga as default,
    // Individual exports for testing
    searchSaga,
};
