import React from "react"
import "./Courses.css"


export const CourseCard = ({course}) => (
    <section className="course">
        <div>
            <h3 className="course__name">{course?.name}</h3>
            <picture><img src={require(`../../Images/${course.image}`).default} alt=""/></picture>
            <h6 className="course__description">{course.description}</h6>
            <h6 className="course__url" ><a href={course.url} target="_blank">Course Website</a></h6>
        </div>
    </section>
)