import {
  LOCATION,
} from '../actions';

const userLocation = (
  state = {
    latitude: '',
    longitude: '',
  },
  action,
) => {
  switch (action.type) {
    case (LOCATION.SUCCESS):
      return {
        latitude: Math.round(action.payload.position.latitude * 100) / 100,
        longitude: Math.round(action.payload.position.longitude * 100) / 100,
      };
    default:
      return state;
  }
};

export default { userLocation };
