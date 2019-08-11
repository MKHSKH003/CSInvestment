export const addStudent = (studentsBaseUrl, name, cell, email, location, isAdmin, createdBy) =>
    fetch(studentsBaseUrl + 
        `add-student?name=${name}&cell=${cell}&email=${email}&location=${location}&isAdmin=${isAdmin}&createdBy=${createdBy}`)
        .then(response => response.json())

export const getStudents = (studentsBaseUrl) => 
    fetch(studentsBaseUrl + `get-students`).then(response => response.json());

export const getStudentCourses = (studentsBaseUrl) =>
    fetch(studentsBaseUrl + `get-students-courses`).then(response => response.json());

export const updateStudentImage = (studentsBaseUrl, id, image, username) =>
    fetch(studentsBaseUrl + `update-student-image?id=${id}&username=${username}`,
        {
            method: 'POST',
            body: JSON.stringify(image),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json());

export const updatePaymentStatus = (studentsBaseUrl, id, username) =>
    fetch(studentsBaseUrl + `update-payment-status?id=${id}&username=${username}`)
        .then(response => response.json())

export const updatePassword = (studentsBaseUrl, id, password) =>
    fetch(studentsBaseUrl + `update-password?id=${id}&password=${password}`).then(response => response.json())

export const deleteStudent = (studentsBaseUrl, id, username) =>
    fetch(studentsBaseUrl + `delete-student?id=${id}&username=${username}`).then(response => response.json())

export const addCourses = (studentsBaseUrl, id, courses, username) =>
    fetch(studentsBaseUrl + `add-courses?id=${id}&username=${username}`,
        {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(courses),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })