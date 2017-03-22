import Dev from './Root.dev';
import Prod from './Root.prod';

const env = process.env.NODE_ENV;
const Root = env === 'production' ? Prod : Dev;

export default Root;
