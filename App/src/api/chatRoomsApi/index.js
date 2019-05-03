export const getGroups = (chatRoomsBaseUrl) =>
{
    return fetch(chatRoomsBaseUrl+`get-groups`)
           .then(response =>{return response.json()});
};