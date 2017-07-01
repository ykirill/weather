import { API, LOCATION } from '../actions';

/**
 * State contain maximum one last error for each of types.
 * */
const errors = (
  state = {
    apiError: [],
    locationError: [],
  },
  action,
) => {
  switch (action.type) {
    case (API.FAILURE):
      return {
        apiError: [
          action.payload,
        ],
        locationError: [...state.locationError],
      };
    case (LOCATION.FAILURE):
      return {
        apiError: [...state.apiError],
        locationError: [
          action.payload,
        ],
      };
    default:
      return state;
  }
};

export default { errors };
