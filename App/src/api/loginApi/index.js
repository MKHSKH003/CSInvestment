export const login = (loginBaseUrl, username, password) =>
{
    return fetch(loginBaseUrl+`authenticate-user?username=${username}&password=${password}`)
           .then(response =>{return response.json()});
};

export const logout = (loginBaseUrl, username) =>
{
    return fetch(loginBaseUrl+`logout?username=${username}`)
           .then(response =>  response);
};