import React from "react"
import "./Courses.css"


export const CourseCard = ({course}) => (
    <section className="course">
        <h2 className="course__name">{course?.name}</h2>
        <picture><img src={require(`../../Images/${course.image}`).default} alt="Course Image"/></picture>
        <div className="course__description">{course.description}</div>
        <div className="course__url"><a href={course.url} target="_blank">Course Link</a></div>
    </section>
)