// Author: Jake, Purpose: To give the user the ability to post a new Round

import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { GetAllCourses } from "../modules/CoursesDataManager";
import { addRound } from "../modules/RoundDataManager";
import "./Round.css"

export const RoundForm = () => {
    let user = parseInt(sessionStorage.getItem("caddie_user"))


    const [round, setRound] = useState({


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
            .then(() => history.push("/"))
    }

    return (
        <div className="round-form-container">
            <form className="round-form">
                <fieldset  >
                    <h1>Create A Round</h1>
                    <div>
                        <label htmlFor="round date"></label>
                        <input className="form-control-date" size="100" type="date" id="roundDate" onChange={handleControlleInputChange} placeholder="Round Date" value={round.round_date} />
                    </div>

                    <fieldset>
                        <div>
                            <label htmlFor="course"></label>
                            <select value={round.courseId} name="courseId" id="courseId" onChange={handleControlleInputChange} className="form-control-course" >
                                <option value="0"></option>
                                {courses.map(course => (
                                    <option key={course.id} value={course.id}>
                                        {course.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </fieldset>

                    <div className="">
                        <label htmlFor="score"></label>
                        <input className="form-control-score" size="100" type="text" id="score" onChange={handleControlleInputChange} placeholder="Score" value={round.score} />
                    </div>

                    <div>
                        <label htmlFor="reflection"></label>
                        <textarea className="form-control-reflection" size="100" type="text" id="reflection" onChange={handleControlleInputChange} placeholder="Reflection" value={round.refelction} />
                    </div>
                    <div className="">
                        <button className=""
                            onClick={handleClickSaveRound}>
                            Save
                        </button>

                        <button className=""
                            onClick={handleCancelButton}>
                            Cancel
                        </button>
                    </div>
                </fieldset>
            </form>
        </div>
    )
}