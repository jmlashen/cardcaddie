// Author: Jake, Purpose: To give the user the ability to post a new Round
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { GetAllCourses } from "../modules/CoursesDataManager";
import { addRound } from "../modules/RoundDataManager";
import "./Round.css"


export const RoundForm = ({toggle, reloadForm}) => {
    let user = parseInt(sessionStorage.getItem("caddie_user"))


    const [round, setRound] = useState({
        
      roundDate: "",
      userId: user,
      courseId: 0,
      score: "",
      reflection: ""
     

    })

    const [courses, setCourses] = useState([

    ])

    const history = useHistory()

    useEffect(() => {
        GetAllCourses().then(response => setCourses(response))

    }, [])

    const handleControlleInputChange = (event) => {
        event.preventDefault()
        const newRound = { ...round }
        let selectedVal = event.target.value

        if (event.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }
        newRound[event.target.id] = selectedVal 
        newRound.userId = user
        setRound(newRound)
    }

    const handleCancelButton = () => {
        history.push("/")
    }

    const handleClickSaveRound = (event) => {
        event.preventDefault()

        addRound(round)
            .then(toggle) 
            .then(reloadForm)
    }


    return (
        <div className="round-form-container">
            
            <form className="round-form">
                
                <fieldset>
                
                
                    <fieldset>
                    <h1 className="round-h1-create-coursename">New Round</h1>
                    {/* <p>What course? What did you shoot? When did you play? Don't forget to give some details in the reflection.</p> */}
                        <div>
                            <label htmlFor="course"><h6>Select Course</h6></label>
                            <select value={round.courseId} name="courseId" id="courseId" onChange={handleControlleInputChange} className="form-control-course" >
                                <option value="0">Course</option>
                                {courses.map(course => (
                                    <option key={course.id} value={course.id}>
                                        {course.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </fieldset>

                    <div className="">
                        <label htmlFor="score">Score:</label>
                        <input className="form-control-score" type="text" id="score" onChange={handleControlleInputChange} placeholder="Score" value={round.score} />
                    </div>

                    <div>
                        <label htmlFor="round date">Date:</label>
                        <input className="form-control-date" type="date" id="roundDate" onChange={handleControlleInputChange} placeholder="Round Date" value={round.round_date} />
                    </div>



                    <div>
                        <label htmlFor="reflection">Round Reflection:</label>
                        <textarea className="form-control-reflection" type="text" id="reflection" onChange={handleControlleInputChange} placeholder="Reflection" value={round.refelction} />
                    </div>
                    <div className="button_contain">
                        <button className=""
                            onClick={handleClickSaveRound}>
                            Save
                        </button>
                    {/* </div>

                    <div className="button_contain_cancel"> */}

                        <button 
                            onClick={handleCancelButton}>
                            Cancel
                        </button>
                    </div>
                </fieldset>
            </form>
        </div>
    )
}