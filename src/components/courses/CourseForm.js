import React, { useState } from "react";
import { addCourse } from "../modules/CoursesDataManager";
import "./Courses.css"
import { useHistory } from "react-router";





export const CourseForm = ({ toggle, reloadCourseList }) => {
    let user = parseInt(sessionStorage.getItem("caddie_user"))

    const [isLoading, setIsLoading] = useState(false)
    const [image, setImage] = useState("")
    const [courses, setCourses] = useState({


        name: "",
        image: "",
        url: "",
        description: "",
        userId: user

    })

    const history = useHistory()

    const handleControlledInputChange = (event) => {
        event.preventDefault()
        const newCourse = { ...courses }
        let selectedVal = event.target.value

        if (event.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }
        newCourse[event.target.id] = selectedVal
        setCourses(newCourse)
    }

    const handleCancelButton = () => {
        history.push("/courses")
    }

    const handleClickSaveCourse = (event) => {
        event.preventDefault()

        const newCourse =  {
            name: courses.name,
            image: image,
            url: courses.url,
            description: courses.description,
            userId: user
        }

        addCourse(newCourse)
            .then(toggle)
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

    return (
        <div className="course-form-container">

            <form className="course-form">

                <fieldset>
                <h1 className="">New Course</h1>


                    <div className="">
                        <label htmlFor="score">Course Name:</label>
                        <input className="form-control-coursename" type="text" id="name" onChange={handleControlledInputChange} placeholder="name" value={courses.name} />
                    </div>

                    <div>
                        <label htmlFor="course date">Upload Course Image:</label>
                        <input className="" type="file" id="image" onChange={(event) => {uploadImage(event)}} placeholder="image" />
                    </div>



                    <div>
                        <label htmlFor="reflection">Course Link:</label>
                        <textarea className="form-control-reflection" type="text" id="url" onChange={handleControlledInputChange} placeholder="link" value={courses.url} />
                    </div>

                    <div>
                        <label htmlFor="reflection">Course Description:</label>
                        <textarea className="form-control-reflection" type="text" id="description" onChange={handleControlledInputChange} placeholder="description" value={courses.description} />
                    </div>

                    <div className="profileImageEdit">
                        {isLoading ? (
                            <h4 style={{ marginTop: 20 }}>Loading...</h4>
                        ) : (
                            <>
                                <img className="mainImage" src={image}/>


                                <button className=""
                                    disabled={isLoading}
                                    onClick={handleClickSaveCourse}>
                                    Save
                                </button>

                                <button 
                            onClick={handleCancelButton}>
                            Cancel
                        </button>

                            </>)}
                    </div>

                </fieldset>
            </form>
        </div>
    )
}

