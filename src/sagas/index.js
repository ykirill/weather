import { takeEvery, put, call } from 'redux-saga/effects';

import * as weatherApi from '../services/apiServices';
import { API, api } from '../actions';

function apiCityRequest(cityName) {
  return weatherApi.getCurrentWeather(cityName)
    .then(res => ({ res }))
    .catch(err => ({ err }));
}

function* cityRequest(action) {
  const { res, err } = yield call(apiCityRequest, action.payload.cityName);
  if (res) {
    yield put(api.success(res));
  } else {
    yield put(api.failure(err));
  }
}

function* getToApi() {
  yield takeEvery(API.REQUEST, cityRequest);
}

export default function* root() {
  yield [
    getToApi(),
  ];
}
