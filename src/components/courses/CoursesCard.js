// Author: Jake, Purpose: To format the way each Course will show on the DOM

import React, {useState} from "react";
import "./Courses.css"
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import { CourseEditForm } from "./CourseEditForm";




export const CourseCard = ({ course, handleDeleteCourse, reloadCourseList }) => {
    let user = parseInt(sessionStorage.getItem("caddie_user"))


    const [editModal, setEditModal] = useState(false)

    const toggleEdit = () => {
        setEditModal(!editModal)
    }
    return (
        <>
            

            <Modal isOpen={editModal} toggle={toggleEdit}>
                <ModalHeader toggle={toggleEdit}></ModalHeader>
                <ModalBody>
                    <CourseEditForm key={course.id} course={course} reloadCourseList={reloadCourseList} toggleEdit={toggleEdit} />
                </ModalBody>
            </Modal>


            <section className="course">
                <div>
                    <h4 className="course__name">{course.name}</h4>
                    <div><img className="courseimages" src={course.image} alt="" /></div>
                    <h6 className="course__description">{course.description}</h6>
                    <h6 className="course__url" ><a className="course_link" href={course.url} target="_blank">Course Website</a></h6>
                    {course.userId === user ? <div className="round-buttons">
               
               <div className="editroundcontainer">
                <button className="round_edit" type="button"
                    onClick={toggleEdit}>
                    Edit
                </button>
                <button className="course_delete" onClick={() => handleDeleteCourse(course.id)}>Delete</button>
                </div>
            </div> : null}
                </div>
            </section>
        </>
    )
}


