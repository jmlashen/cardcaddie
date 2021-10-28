//Author: Jake, Purpose: To allow the user to edit an Article
import React, { useState, useEffect } from "react"
import { getCourseById, updateCourse } from "../modules/CoursesDataManager"
import "./Courses.css"




export const CourseEditForm = ({ reloadCourseList, toggleEdit, course }) => {

    const [image, setImage] = useState("")
    const [courses, setCourses] = useState({

        // name: "",
        // image: "",
        // url: "",
        // description: "",
        


    })

    const [isLoading, setIsLoading] = useState(false)
    // const [courses, setCourses] = useState([])

    const courseId = course.id
    // const [courses, setCourses] = useState([])
    // USESTATE: useState is a Hook that allows you to have state variables in 
    // functional components. You pass the initial state to the
    // function and it returns a variable with the current state value 
    // (not necessarily the initial state) and another function 
    // to update this value.

    const handleFieldChange = event => {
        const stateToChange = { ...courses }
        stateToChange[event.target.id] = event.target.value;
        setCourses(stateToChange)
    }


    const updateExistingCourse = event => {
        event.preventDefault()
        setIsLoading(true)
       debugger
        const editedCourse = {
            id: courses.id,
            name: courses.name,
            image: image ? image : courses.image,
            url: courses.url,
            description: courses.description,
            userId: courses.userId
            

        }

        updateCourse(editedCourse)
            .then(toggleEdit)
            .then(reloadCourseList)
    }

    const uploadImage = async (e) => {
        const files = e.target.files;
        const data = new FormData();
        data.append("file", files[0]);
        data.append("upload_preset", "goy8iswj");
        setIsLoading(true);
        const res = await fetch(
            "https://api.cloudinary.com/v1_1/djnk0ey5p/image/upload",
            {
                method: "POST",
                body: data,
            }
        );
        const file = await res.json();
        setImage(file.secure_url);
        setIsLoading(false);
    };

    useEffect(() => {
        getCourseById(courseId)
            .then(course => {
                setCourses(course)
                setIsLoading(false)
                setImage(course.image)
            })
    }, [])

    // useEffect(() => {
    //     GetAllCourses()
    //         .then(courses => {
    //             setCourses(courses)
    //         })
    // }, [])

    

    return (
        <>


            <form className="editform">

                <fieldset>
                    <h1 className="course-h1-create">Edit Course</h1>
                    <div>
                        <label htmlFor="courseName"></label>
                        <input type="text" id="name" onChange={handleFieldChange} className="form-control-course-name" placeholder="name" value={courses.name} />
                    </div>

                    <div>
                        <label htmlFor="course image"></label>
                        <input className="" type="file" id="image" onChange={(event) => { uploadImage(event) }} placeholder="image" />
                    </div>

                    <div>
                        <label htmlFor="url"></label>
                        <textarea className="form-control-reflection" type="text" id="url" onChange={handleFieldChange} placeholder="link" value={courses.url} />
                    </div>

                    <div>
                        <label htmlFor="description"></label>
                        <textarea className="form-control-reflection" type="text" id="description" onChange={handleFieldChange} placeholder="description" value={courses.description} />
                    </div>

                    <div className="profileImageEdit">
                        {isLoading ? (
                            <h4 style={{ marginTop: 20 }}>Loading...</h4>
                        ) : (
                            <>
                                <img className="mainImage" src={image} />


                                <button className=""
                                    disabled={isLoading}
                                    onClick={updateExistingCourse}>
                                    Edit
                                </button>

                            </>)}
                    </div>

                </fieldset>
                <div className="edittext-background">
                    <section className="edittext">
                        <div>{courses.name} </div>
                        <div>{image ? image : courses.image}</div>
                        <div>{courses.url} </div>
                        <div>{courses.description}</div>
                    </section>
                </div>


            </form>

        </>
    )
}