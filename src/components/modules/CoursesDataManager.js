// Author: Jake, Purpose: To fetch data from the database

const remoteURL = "http://localhost:8088"

export const getCourseById = (courseId) => {
  return fetch(`${remoteURL}/courses/${courseId}`)
    .then(res => res.json())
}

export const GetAllCourses = () => {
  return fetch(`${remoteURL}/courses`)
    .then(res => res.json())
}

export const addCourse = (newCourse) => {
  return fetch(`${remoteURL}/courses`, {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(newCourse)
  }).then(response => response.json())
}

export const updateCourse = (courseObj) => {
  return fetch(`${remoteURL}/courses/${courseObj.id}`, {
      method: "PUT",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(courseObj)
  }).then(data => data.json());
}

export const deleteCourse = (id) => {
  return fetch(`${remoteURL}/courses/${id}`, {
      method: "DELETE"
  }).then(result => result.json())

}