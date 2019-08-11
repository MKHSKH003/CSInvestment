export const getCourses = (coursesBaseUrl) =>
    fetch(coursesBaseUrl+`get-courses`).then(response => response.json());

export const getStudentCourses = (coursesBaseUrl) =>
    fetch(coursesBaseUrl+`get-student-courses`).then(response => response.json());

export const updateSchedule = (coursesBaseUrl, id, date, venue, username) =>
    fetch(coursesBaseUrl+`update-schedule?id=${id}&date=${date}&venue=${venue}&username=${username}`)
           .then(response => response.json());