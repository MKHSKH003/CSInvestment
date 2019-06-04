export const getSystemData = (systemDataBaseUrl) =>
{
    return fetch(systemDataBaseUrl+`get-system-data`)
           .then(response =>{return response.json()});
};