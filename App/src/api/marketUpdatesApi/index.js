export const getMarketUpdates = (marketUpdatesBaseUrl) =>
    fetch(marketUpdatesBaseUrl + `get-market-updates`).then(response => response.json());

export const deleteMarketUpdate = (marketUpdatesBaseUrl, id) =>
    fetch(marketUpdatesBaseUrl + `delete-market-update?id=${id}`)

export const postLike = (marketUpdatesBaseUrl, id, userId) =>
    fetch(marketUpdatesBaseUrl + `add-post-like?id=${id}&userId=${userId}`)

export const postMarketUpdates = (marketUpdatesBaseUrl, avatar, caption, userId) =>
    fetch(marketUpdatesBaseUrl + `post-market-update?caption=${caption}&userId=${userId}`,
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