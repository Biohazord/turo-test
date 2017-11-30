import {
  INITIALIZE,
  INITIALIZE_SUCCESS,
  INITIALIZE_ERROR,
} from '../constants';

import {
  load,
  appInitialized,
  appInitializingError,
} from '../actions';

describe('App Actions', () => {
  describe('load', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: INITIALIZE,
      };

      expect(load()).toEqual(expectedResult);
    });
  });

  describe('appInitialized', () => {
    it('should return the correct type and the passed repos', () => {
      const expectedResult = {
        type: INITIALIZE_SUCCESS,
      };

      expect(appInitialized()).toEqual(expectedResult);
    });
  });

  describe('appInitializingError', () => {
    it('should return the correct type and the error', () => {
      const fixture = {
        msg: 'Something went wrong!',
      };
      const expectedResult = {
        type: INITIALIZE_ERROR,
        error: fixture,
      };

      expect(appInitializingError(fixture)).toEqual(expectedResult);
    });
  });
});
