import getToApi from './apiSagas';
import fetchUserLocation from './locationSagas';

export default function* root() {
  yield [
    getToApi(),
    fetchUserLocation(),
  ];
}
