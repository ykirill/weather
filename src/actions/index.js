const REQUEST = 'REQUEST';
const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';

const SAVE = 'SAVE';
const DELETE = 'DELETE';

/**
 * @Params:
 * base: string,
 * types: array
 * @Return:
 * typesList: object
 * */
const createTypes = (base, types) =>
  types.reduce((acc, type) =>
    ({ ...acc, [type]: `${base}_${type}` }), {});

/**
 * @Params:
 * type: string,
 * payload: object,
 * @Return:
 * action: object
 * */
const action = (type, payload = {}) => ({
  type,
  payload,
});

export const API = createTypes('API', [REQUEST, SUCCESS, FAILURE]);
export const LOCATION = createTypes('LOCATION', [REQUEST, SUCCESS, FAILURE]);
export const CITY = createTypes('CITY', [SAVE, DELETE]);

export const api = {
  request: cityName =>
    action(API.REQUEST, { cityName }),
  success: response =>
    action(API.SUCCESS, { response: JSON.parse(response.text) }),
  failure: error =>
    action(API.FAILURE, { error }),
};

export const location = {
  request: () =>
    action(LOCATION.REQUEST),
  success: position =>
    action(LOCATION.SUCCESS, { position: position.coords }),
  failure: error =>
    action(LOCATION.FAILURE, { error }),
};

export const city = {
  save: cityName =>
    action(CITY.SAVE, cityName),
  del: cityName =>
    action(CITY.DELETE, cityName),
};
