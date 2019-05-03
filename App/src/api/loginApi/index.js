export const login = (loginBaseUrl, username, password) =>
{
    //console.log("login base url",loginBaseUrl+`authentication?username=${username}&password=${password}`)
    return fetch(loginBaseUrl+`authentication?username=${username}&password=${password}`)
           .then(response =>{return response.json()});
};

export const logout = (loginBaseUrl, username) =>
{
    return fetch(loginBaseUrl+`logout?username=${username}`)
           .then(response =>{ return response});
};