export const login = (loginBaseUrl, username, password) =>
    fetch(loginBaseUrl+`authenticate-user?username=${username}&password=${password}`)
           .then(response => response.json());

export const logout = (loginBaseUrl, username) =>
    fetch(loginBaseUrl+`logout?username=${username}`).then(response =>  response);