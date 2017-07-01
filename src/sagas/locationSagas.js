import { takeEvery, put, call } from 'redux-saga/effects';

import { getUserLocation } from '../services/loacationServices';
import { LOCATION, location } from '../actions';

function getLocationRequest() {
  return getUserLocation()
    .then(res => ({ res }))
    .catch(err => ({ err }));
}

function* locationRequest() {
  const { res, err } = yield call(getLocationRequest);
  if (res) {
    yield put(location.success(res));
  } else {
    yield put(location.failure(err));
  }
}

export default function* fetchUserLocation() {
  yield takeEvery(LOCATION.REQUEST, locationRequest);
}
