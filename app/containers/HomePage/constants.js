/*
 *
 * HomePage constants
 *
 */

const actionFormatter = (action) => `turoTest/HomePage/${action}`;

const SEARCH = actionFormatter('SEARCH');
const SEARCH_SUCCESS = actionFormatter('SEARCH_SUCCESS');
const SEARCH_ERROR = actionFormatter('SEARCH_ERROR');

const CHANGE_DESTINATION = actionFormatter('CHANGE_DESTINATION');
const CHANGE_PICKUP_DATE = actionFormatter('CHANGE_PICKUP_DATE');
const CHANGE_DROPOFF_DATE = actionFormatter('CHANGE_DROPOFF_DATE');

// I prefer exports at the end of the file. That way you're not searching through a file to find what is exported.
export {
    SEARCH,
    SEARCH_SUCCESS,
    SEARCH_ERROR,
    CHANGE_DESTINATION,
    CHANGE_PICKUP_DATE,
    CHANGE_DROPOFF_DATE,
};

