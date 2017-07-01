import { combineReducers } from 'redux';

import weather from './weather';
import userLocation from './userLocation';
import errors from './errors';

export default combineReducers({ // It's a rootReducer
  ...weather,
  ...userLocation,
  ...errors,
});
