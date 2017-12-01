/*
 *
 * HomePage reducer
 *
 */

import { fromJS } from 'immutable';
import {
    SEARCH,
    SEARCH_SUCCESS,
    SEARCH_ERROR,
    CHANGE_DESTINATION,
    CHANGE_PICKUP_DATE,
    CHANGE_DROPOFF_DATE,
} from './constants';

const initialState = fromJS({
  isLoading: false,
  carTypes: [],
  availableCars: [],
  query: '',
  pickupDate: new Date(),
  dropoffDate: new Date(),
});

function homePageReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH:
      return state
        .set('isLoading', true)
        .set('carTypes', fromJS([]))
        .set('availableCars', fromJS([]));
    case SEARCH_ERROR:
      return state
          .set('isLoading', false)
          .set('carTypes', fromJS([]))
          .set('availableCars', fromJS([]));
    case SEARCH_SUCCESS: {
      const { carTypes, availableCars } = action.payload;
      return state
            .set('isLoading', false)
            .set('carTypes', fromJS(carTypes))
            .set('availableCars', fromJS(availableCars));
    }
    case CHANGE_DESTINATION:
      return state.set('query', action.payload.value);
    case CHANGE_PICKUP_DATE:
      return state.set('pickupDate', action.payload.value);
    case CHANGE_DROPOFF_DATE:
      return state.set('dropoffDate', action.payload.value);
    default:
      return state;
  }
}

export default homePageReducer;
