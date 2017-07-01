import request from 'superagent';

/**
 * @Params:
 * cityName: string
 * */
export const getForecastWeather = cityName =>
  request(`http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&APPID=bfb88c0d5bca8ec8523a5b3ad24ca37c`);

/**
 * @Params:
 * object with properties (coordinates):
 *  lat: string/number
 *  lon: string/number
 * */
export const getForecastWeatherByCoords = ({ lat, lon }) =>
  request(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&APPID=bfb88c0d5bca8ec8523a5b3ad24ca37c`);
