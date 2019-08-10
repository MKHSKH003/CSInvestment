
export const getUserDevices = (pushNotificationsBaseUrl) =>
    fetch(pushNotificationsBaseUrl + `device-tokens`)
        .then(response => { return response.json() });

export const addUserDevice = (pushNotificationsBaseUrl, userId, deviceToken) =>
    fetch(pushNotificationsBaseUrl + `store-user-device?userId=${userId}&deviceToken=${deviceToken}`)
        .then(response => { return response.json() });

export const sendPushNotifications = (notifications) =>
    fetch(`https://exp.host/--/api/v2/push/send`,
        {
            method: 'POST',
            body: JSON.stringify(notifications),
            headers: {
                'Content-Type': 'application/json',
                'accept-encoding': 'gzip, deflate',
                'host': 'exp.host',
                'accept': 'application/json'
            }
        }).then((response) => response.json())