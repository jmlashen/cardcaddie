// Author: Jake, Purpose: To portray the Course cards in a list on the DOM

import { CourseCard } from "./CoursesCard";
import React, { useEffect, useState } from "react";
import { GetAllCourses } from "../modules/CoursesDataManager";



export const CourseList = () => {

    const [courses, setCourses] = useState([]);
    const GetCourses = () => {
        return GetAllCourses().then(coursesFromAPI => {

            console.log(coursesFromAPI);
            setCourses(coursesFromAPI)

        });
    };


    useEffect(() => {
        GetCourses();
    }, []);


    return (
        <>
            <div className="course-header">
                <h1>Courses</h1>
            </div>

            <div className="container-cards">
                {courses.map(course =>
                    <CourseCard
                        key={course.id}
                        course={course}
                    />)}
            </div>
        </>
    );
}

