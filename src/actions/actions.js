import request from 'superagent';
import {
  GET_CITY_NAME,
  API_REQUEST, API_SUCCESS, API_FAILURE,
} from './actionTypes';

export const getCityName = text => ({
  type: GET_CITY_NAME,
  text,
});

const apiRequest = () => ({
  type: API_REQUEST,
});
const apiSuccess = response => ({
  type: API_SUCCESS,
  res: JSON.parse(response.text),
});
const apiFailure = err => ({
  type: API_FAILURE,
  err,
});

export const getWeather = cityName =>
  (dispatch) => {
    dispatch(apiRequest());
    console.log(`http://www.api.openweathermap.org/data/2.5/weather?q=${cityName}`);
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
