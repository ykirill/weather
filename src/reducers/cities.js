import { API } from '../actions';

  // TODO rework
const cities = (
  state = {
    current: {},
    cities: [],
  },
  action,
) => {
  // TODO save city in array by alphabet order?
  switch (action.type) {
    case (API.SUCCESS):
      return new Set(state.cities).has(action.payload.response) ?
        state : {
          current: action.payload.response,
          cities: [
            ...state.cities, action.payload.response,
          ],
        };
    default:
      return state;
  }
};

export default { cities };
