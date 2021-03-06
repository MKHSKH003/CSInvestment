import appsettings from '../../../app.json';
const baseUrl = appsettings.ApiRestWebServer[appsettings.Environment];
export const loginBaseUrl = baseUrl+'/api/authentication/';
export const studentsBaseUrl = baseUrl+'/api/students/';
export const coursesBaseUrl = baseUrl+'/api/courses/';
export const chatRoomsBaseUrl = baseUrl+'/api/chat-rooms/';
export const chatMessagesBaseUrl = baseUrl+'/api/messages/';
export const marketUpdatesBaseUrl = baseUrl+'/api/market-updates/';
export const pushNotificationsBaseUrl = baseUrl+'/api/push-notifications/';
export const systemDataBaseUrl = baseUrl+'/api/system-data/';
