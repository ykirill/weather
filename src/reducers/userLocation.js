import {
  LOC_SUCCESS,
} from '../actions/actionTypes';

const userLocation = (
  state = {
    latitude: '',
    longitude: '',
  },
  action,
) => {
  switch (action.type) {
    case (LOC_SUCCESS):
      return {
        latitude: action.position.latitude,
        longitude: action.position.longitude,
      };
    default:
      return state;
  }
};

export default { userLocation };
