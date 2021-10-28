// Author: Jake, Purpose: To fetch data from the database

const remoteURL = "http://localhost:8088"

export const getCourseById = (courseId) => {
  //be sure your animals have good data and related to a location and customer
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