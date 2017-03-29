import request from 'superagent';
import {
  API_REQUEST, API_SUCCESS, API_FAILURE,
  LOC_REQUEST, LOC_SUCCESS, LOC_FAILURE,
  SAVE_CITY,
} from './actionTypes';

export const saveCity = city => ({
  type: SAVE_CITY,
  city,
});

const apiRequest = data => ({
  type: API_REQUEST,
  data,
});
const apiSuccess = response => ({
  type: API_SUCCESS,
  res: JSON.parse(response.text),
});
const apiFailure = err => ({
  type: API_FAILURE,
  err,
});

export const getWeatherByCityName = cityName =>
  (dispatch) => {
    dispatch(apiRequest(cityName));
    return request
      .get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=bfb88c0d5bca8ec8523a5b3ad24ca37c`)
      .end((err, res) => {
        if (err) {
          dispatch(apiFailure(err));
        } else {
          dispatch(apiSuccess(res));
        }
      });
  };

export const getWeatherByUserCoords = ({ latitude, longitude }) =>
  (dispatch) => {
    dispatch(apiRequest({ latitude, longitude }));
    return request
      .get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=bfb88c0d5bca8ec8523a5b3ad24ca37c`)
      .end((err, res) => {
        if (err) {
          dispatch(apiFailure(err));
        } else {
          dispatch(apiSuccess(res));
        }
      });
  };

const locRequest = () => ({
  type: LOC_REQUEST,
});
const locSuccess = pos => ({
  type: LOC_SUCCESS,
  position: pos.coords,
});
const locFailure = err => ({
  type: LOC_FAILURE,
  err,
});

export const getUserLocation = () =>
  (dispatch) => {
    dispatch(locRequest());
    return navigator.geolocation.getCurrentPosition(
      (position) => {
        dispatch(locSuccess(position));
      },
      (err) => {
        dispatch(locFailure(err));
      },
      { enableHighAccuracy: true, timeout: 200000, maximumAge: 1000 },
    );
  };
