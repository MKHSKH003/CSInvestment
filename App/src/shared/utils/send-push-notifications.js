import { pushNotificationsApi } from '../../api'

export default sendPushNotifications = (deviceTokens, message) => {
    var notifications = [];
    deviceTokens.map((device) => {
         notifications.push({"to": device.UserDeviceToken,"title":"CSInvestment","body": message,"sound":"default"});
     });
    pushNotificationsApi.sendPushNotifications(notifications);
}