import { API_SUCCESS } from '../actions/actionTypes';

const cityName = (
  state = {
    currentCity: {},
    cities: [],
  },
  action,
) => {
  switch (action.type) {
    case (API_SUCCESS):
      return {
        currentCity: action.res,
        cities: [...state.cities, action.res],
      };
    default:
      return state;
  }
};

export default { cityName };
