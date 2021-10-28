import React, { useState } from "react";
import { addCourse } from "../modules/CoursesDataManager";
import "./Courses.css"



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


                    <div className="">
                        <label htmlFor="score"></label>
                        <input className="form-control-score" type="text" id="name" onChange={handleControlledInputChange} placeholder="name" value={courses.name} />
                    </div>

                    <div>
                        <label htmlFor="course date"></label>
                        <input className="form-control-date" type="file" id="image" onChange={(event) => {uploadImage(event)}} placeholder="image" />
                    </div>



                    <div>
                        <label htmlFor="reflection"></label>
                        <textarea className="form-control-reflection" type="text" id="url" onChange={handleControlledInputChange} placeholder="link" value={courses.url} />
                    </div>

                    <div>
                        <label htmlFor="reflection"></label>
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

                            </>)}
                    </div>

                </fieldset>
            </form>
        </div>
    )
}

