// Author: Jake, Purpose: To format the way each Course will show on the DOM

import React from "react"
import "./Courses.css"

export const CourseCard = ({ course }) => (
    <section className="course">
        <div>
            <h4 className="course__name">{course.name}</h4>
            <div><img src={course.image} alt="" /></div>
            <h6 className="course__description">{course.description}</h6>
            <h6 className="course__url" ><a className="course_link" href={course.url} target="_blank">Course Website</a></h6>
        </div>
    </section>
)


{/* <picture><img src={require(`../../Images/${course.image}`).default} alt="" /></picture> */}