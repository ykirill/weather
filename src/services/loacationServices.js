export const noop = () => {};

export const getUserLocation = () => new Promise((resolve, reject) =>
  navigator.geolocation.getCurrentPosition(
    (position) => {
      resolve(position);
    },
    (err) => {
      reject(err);
    },
    { enableHighAccuracy: true, timeout: 200000, maximumAge: 1000 },
  ),
);

export const isLocationValid = location =>
  !!location.latitude;
