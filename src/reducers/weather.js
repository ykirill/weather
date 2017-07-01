import { API } from '../actions';

const weather = (
  state = {
    forecast: {},
    forecasts: [],
  },
  action,
) => {
  // TODO save city in array by alphabet order?
  const citiesId = state.forecasts.length ?
    state.forecasts.map(f => f.city.id) : [];
  switch (action.type) {
    case (API.SUCCESS):
      return {
        forecast: action.payload.response,
        forecasts: new Set(citiesId).has(action.payload.response.city.id) ?
          state.forecasts :
          [...state.forecasts, action.payload.response],
      };
    default:
      return state;
  }
};

export default { weather };
