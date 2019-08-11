export const getGroups = (chatRoomsBaseUrl) =>
    fetch(chatRoomsBaseUrl+`get-chat-rooms`)
           .then(response => response.json());