// Author: Jake, Purpose: To portray the Course cards in a list on the DOM

import { CourseCard } from "./CoursesCard";
import React, { useEffect, useState } from "react";
import { GetAllCourses, deleteCourse } from "../modules/CoursesDataManager";
import { Modal, ModalBody, } from "reactstrap";
import { CourseForm } from "./CourseForm";



export const CourseList = () => {

    const [courses, setCourses] = useState([]);
    const GetCourses = () => {
        return GetAllCourses().then(coursesFromAPI => {

            console.log(coursesFromAPI);
            setCourses(coursesFromAPI)

        });
    };

    const [modal, setModal] = useState(false)

    const reloadCourseList = () => {
        GetCourses()
    }

    const toggle = () => {
        setModal(!modal)
    }

    const handleDeleteCourse = id => {
        deleteCourse(id)
            .then(() => GetAllCourses().then(setCourses))
    }

    useEffect(() => {
        GetCourses();
    }, []);



    return (
        <>
            <div className="course-header">
                <h1>Courses</h1>
            </div>

            <div>
                <div className="new-course-button-container">
                    <button className="new-course-button" type="button"
                        onClick={toggle}>
                        + add Course
                    </button>
                </div>
            </div>

            <div className="container-cards">
                {courses.map(course =><CourseCard reloadCourseList={reloadCourseList} key={course.id} course={course} handleDeleteCourse={handleDeleteCourse} />)}
            </div>
        
            <Modal isOpen={modal} toggle={toggle} >
                {/* <ModalHeader  toggle={toggle}></ModalHeader> */}
                <ModalBody>
                    <CourseForm reloadCourseList={reloadCourseList} toggle={toggle} />
                </ModalBody>
            </Modal>

        </>
    );
}

