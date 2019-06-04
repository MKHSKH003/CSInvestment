export const STORE_USER_DEVICE = 'STORE_USER_DEVICE';

export const LOAD_USER_DEVICES = 'LOAD_USER_DEVICES';
export const LOAD_USER_DEVICES_SUCCESS = 'LOAD_USER_DEVICES_SUCCESS';

export const storeUserDevice = (id, username, deviceToken) => ({
      type: STORE_USER_DEVICE,
      id,
      username,
      deviceToken
});

export const loadUserDevicesSuccess = (devices) => ({
      type: LOAD_USER_DEVICES_SUCCESS,
      devices
});