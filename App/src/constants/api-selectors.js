import appsettings from '../../app.json';
const baseUrl = appsettings.ApiRestWebServer[appsettings.Environment];
export const loginBaseUrl = baseUrl+'/api/user-login/';
export const studentsBaseUrl = baseUrl+'/api/students/';
export const coursesBaseUrl = baseUrl+'/api/courses/';
export const chatRoomsBaseUrl = baseUrl+'/api/chat-rooms/';
export const chatMessagesBaseUrl = baseUrl+'/api/chatMessages/';
export const marketUpdatesBaseUrl = baseUrl+'/api/market-updates/';
export const pushNotificationsBaseUrl = baseUrl+'/api/push-notifications/';