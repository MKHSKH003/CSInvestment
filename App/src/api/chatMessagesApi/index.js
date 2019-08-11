export const getMessages = (chatMessagesBaseUrl, id) =>
       fetch(chatMessagesBaseUrl+`get-messages?id=${id}`)
           .then(response => response.json());

export const getAllMessages = (chatMessagesBaseUrl) =>
       fetch(chatMessagesBaseUrl+`get-all-messages`)
           .then(response => response.json());

export const sendMessage = (messagesBaseUrl, id, username, userId, message) =>
       fetch(messagesBaseUrl+`send-message?id=${id}&username=${username}&userId=${userId}&message=${message}`)
       .then(response => response.json());