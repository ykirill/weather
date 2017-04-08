import request from 'superagent';

export const noop = () => {};

export const getCurrentWeather = cityName =>
  request(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=bfb88c0d5bca8ec8523a5b3ad24ca37c`);
