import { API_SUCCESS, SAVE_CITY } from '../actions/actionTypes';

const cities = (
  state = {
    current: {},
    cities: {},
    saved: {},
  },
  action,
) => {
  const newCity = action.res ?
    action.res : {};
  switch (action.type) {
    case (API_SUCCESS):
      return new Set(Object.keys(state.cities)).has(newCity.id) ?
        state : Object.assign({}, state, {
          current: newCity,
          cities: {
            ...state.cities,
            [newCity.id]: newCity,
          },
        });
    case (SAVE_CITY):
      return new Set(Object.keys(state.saved)).has(state.current.id) ?
        state : Object.assign({}, state, {
          saved: {
            ...state.saved,
            [state.current.id]: state.current,
          },
        });
    default:
      return state;
  }
};

export default { cities };
