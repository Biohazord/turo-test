/*
 *
 * HomePage actions
 *
 */

import {
    SEARCH,
    SEARCH_ERROR,
    SEARCH_SUCCESS,
    CHANGE_DESTINATION,
    CHANGE_PICKUP_DATE,
    CHANGE_DROPOFF_DATE,
} from './constants';

const generateAction = (action) => (payload) => ({ type: action, payload });

const search = generateAction(SEARCH);
const searchSuccess = generateAction(SEARCH_SUCCESS);
const searchError = generateAction(SEARCH_ERROR);

const changeDestination = generateAction(CHANGE_DESTINATION);
const changePickupDate = generateAction(CHANGE_PICKUP_DATE);
const changeDropoffDate = generateAction(CHANGE_DROPOFF_DATE);

export {
    search,
    searchSuccess,
    searchError,
    changeDestination,
    changePickupDate,
    changeDropoffDate,
};
