import { combineReducers } from 'redux';

import cities from './cities';
import userLocation from './userLocation';

export default combineReducers({ // It's a rootReducer
  ...cities,
  ...userLocation,
});
