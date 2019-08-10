export const getMarketUpdates = (marketUpdatesBaseUrl) =>
    fetch(marketUpdatesBaseUrl + `get-market-updates`)
        .then(response => response.json());

export const deleteMarketUpdate = (marketUpdatesBaseUrl, id) =>
    fetch(marketUpdatesBaseUrl + `delete-market-update?id=${id}`)
        .then(response => response.json())


export const postMarketUpdates = (marketUpdatesBaseUrl, avatar, caption) =>
    fetch(marketUpdatesBaseUrl + `post-market-update?caption=${caption}`,
        {
            method: 'POST',
            body: JSON.stringify(avatar),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => response.json())





















// const config = {
//         headers: {'content-type': 'multipart/form-data' }
//     }  
//    return post(marketUpdatesBaseUrl+`post-market-update?caption=${caption}`, avatar, config)
//   .then((response) => response.data)