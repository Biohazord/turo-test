import { fromJS } from 'immutable';

import appReducer from '../reducer';
import {
  load,
  appInitialized,
  appInitializingError,
} from '../actions';

describe('appReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      loading: false,
      error: false,
    });
  });

  it('should return the initial state', () => {
      expect(appReducer(undefined, {})).toEqual(state);
  });

  it('should handle the load action correctly', () => {
    const expectedResult = state
      .set('loading', true)
      .set('error', false);

    expect(appReducer(state, load())).toEqual(expectedResult);
  });

  it('should handle the appInitialized action correctly', () => {
    const expectedResult = state.set('loading', false);

    expect(appReducer(state, appInitialized())).toEqual(expectedResult);
  });

  it('should handle the appInitializingError action correctly', () => {
    const fixture = {
      msg: 'Not found',
    };
    const expectedResult = state
      .set('error', fixture)
      .set('loading', false);

    expect(appReducer(state, appInitializingError(fixture))).toEqual(expectedResult);
  });
});
