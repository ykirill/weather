import {
  LOCATION,
} from '../actions';
// TODO rework
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
        latitude: action.position.latitude,
        longitude: action.position.longitude,
      };
    default:
      return state;
  }
};

export default { userLocation };
