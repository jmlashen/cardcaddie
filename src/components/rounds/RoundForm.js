import React, { useState } from "react";
import { useHistory } from "react-router";
import { addRound } from "../modules/RoundDataManager";

export const RoundForm = () => {
    let user = parseInt(sessionStorage.getItem("caddie_user"))


    const [round, setRound] = useState({

      
    })

    const history = useHistory()

    const handleControlleInputChange = (event) => {
        event.preventDefault()
        const newRound = { ...round }
        let selectedVal = event.target.value

        if (event.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }
        newRound[event.target.id] = selectedVal
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

                {/* <div className="form-group">
                <label htmlFor="course">Course: </label>
                <select value={round.courseId} name="courseId" id="courseId" onChange={handleControlleInputChange} className="form-control" >
                    <option value="0">Select a Course</option>
                    {round.map(course => (
                        <option key={course.id} value={course.id}>
                            {course.name}
                        </option>
                    ))}
                </select>
            </div> */}

                {/* <div className="">
                    <label htmlFor="course">Course:</label>
                    <input size="100" type="text" id="course" onChange={handleControlleInputChange} placeholder="Course" value={round.course} />
                </div> */}

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