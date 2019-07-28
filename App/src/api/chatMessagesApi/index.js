export const getMessages = (chatMessagesBaseUrl, id) =>
{
    return fetch(chatMessagesBaseUrl+`get-messages?id=${id}`)
           .then(response =>{return response.json()});
};

export const getAllMessages = (chatMessagesBaseUrl) =>
{
    return fetch(chatMessagesBaseUrl+`get-all-messages`)
           .then(response =>{return response.json()});
};

export const sendMessage = (messagesBaseUrl, id, username, userId, message) =>{
   return fetch(messagesBaseUrl+`send-message?id=${id}&username=${username}&userId=${userId}&message=${message}`).then(response => response.json()).catch(error => {
          console.log(error)
  }); 
   
};