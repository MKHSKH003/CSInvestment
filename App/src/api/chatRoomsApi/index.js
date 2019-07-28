export const getGroups = (chatRoomsBaseUrl) =>
{
    return fetch(chatRoomsBaseUrl+`get-chat-rooms`)
           .then(response =>{return response.json()});
};