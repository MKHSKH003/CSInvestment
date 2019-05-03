export const getCourses = (coursesBaseUrl) =>
{
    return fetch(coursesBaseUrl+`get-courses`)
           .then(response =>{return response.json()});
};

export const getStudentCourses = (coursesBaseUrl) =>
{
    return fetch(coursesBaseUrl+`get-student-courses`)
           .then(response =>{return response.json()});
};

export const updateSchedule = (coursesBaseUrl, id, date, venue, username) =>
{
    return fetch(coursesBaseUrl+`update-schedule?id=${id}&date=${date}&venue=${venue}&username=${username}`)
           .then(response =>{return response.json()});
}