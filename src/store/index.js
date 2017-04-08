import Dev from './store.dev';
import Prod from './store.prod';

const isProd = process.env.NODE_ENV === 'production';
const store = isProd ?
  Prod :
  Dev;

export default store;
