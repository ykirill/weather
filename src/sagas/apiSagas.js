import { takeEvery, put, call } from 'redux-saga/effects';

import * as weatherApi from '../services/apiServices';
import { API, api } from '../actions';

// TODO optimize sagas for different types of data (city name / user location)
function apiCityRequest(cityName) {
  return weatherApi.getForecastWeather(cityName)
    .then(res => ({ res }))
    .catch(err => ({ err }));
}

function* cityRequest(action) {
  const { cityName } = action.payload;
  const { res, err } = yield call(apiCityRequest, cityName);
  if (res) {
    yield put(api.success(res));
  } else {
    yield put(api.failure(err));
  }
}

export default function* getToApi() {
  yield takeEvery(API.REQUEST, cityRequest);
}
