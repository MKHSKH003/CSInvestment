
export const getUserDevices = (pushNotificationsBaseUrl) =>
{
    return fetch(pushNotificationsBaseUrl+`device-tokens`)
           .then(response =>{return response.json()});
};

export const addUserDevice = (pushNotificationsBaseUrl, userId, deviceToken) =>
{
    return fetch(pushNotificationsBaseUrl+`store-user-device?userId=${userId}&deviceToken=${deviceToken}`)
           .then(response =>{return response.json()});
};

export const sendPushNotifications = (notifications) =>
{
    return fetch(`https://exp.host/--/api/v2/push/send`,
    {
        method: 'POST',
        body:  JSON.stringify(notifications),
        headers:{
            'Content-Type': 'application/json',
            'accept-encoding': 'gzip, deflate',
            'host': 'exp.host',
            'accept': 'application/json'
        }
    }).then((response) => console.log(response.json()))
       .catch(error => { console.log(error)});
};