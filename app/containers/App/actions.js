/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  INITIALIZE,
  INITIALIZE_SUCCESS,
  INITIALIZE_ERROR,
} from './constants';

/**
 * Initialize the app
 *
 * @return {object} An action object with a type of INITIALIZE
 */
export function load() {
  return {
    type: INITIALIZE,
  };
}

/**
 * Dispatched when the app has initialized
 *
 * @return {object}      An action object with a type of INITIALIZE_SUCCESS
 */
export function appInitialized() {
  return {
    type: INITIALIZE_SUCCESS,
  };
}

/**
 * Dispatched when loading the repositories fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of INITIALIZE_ERROR passing the error
 */
export function appInitializingError(error) {
  return {
    type: INITIALIZE_ERROR,
    error,
  };
}
