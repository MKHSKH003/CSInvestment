export const STORE_USER_DEVICE_REQUEST = 'STORE_USER_DEVICE_REQUEST';
export const STORE_USER_DEVICE_SUCCESS = 'STORE_USER_DEVICE_SUCCESS';

export const LOAD_USER_DEVICES_REQUEST = 'LOAD_USER_DEVICES_REQUEST';
export const LOAD_USER_DEVICES_SUCCESS = 'LOAD_USER_DEVICES_SUCCESS';

export const storeUserDeviceRequest = (userId, deviceToken) => ({
      type: STORE_USER_DEVICE_REQUEST,
      userId,
      deviceToken
});

export const storeUserDeviceSuccess = (userId, deviceToken) => ({
      type: STORE_USER_DEVICE_SUCCESS,
      userId,
      deviceToken
});

export const loadUserDevicesRequest = () => ({
      type: LOAD_USER_DEVICES_REQUEST
});

export const loadUserDevicesSuccess = (devices) => ({
      type: LOAD_USER_DEVICES_SUCCESS,
      devices
});