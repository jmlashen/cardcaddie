//Author: Jake, Purpose: To allow the user to edit an Article
import React, { useState, useEffect } from "react"
import { getRoundById, updateRound } from "../modules/RoundDataManager"
import { useParams, useHistory } from "react-router"
import "./Round.css"
import { GetAllCourses } from "../modules/CoursesDataManager"

export const RoundEditForm = () => {
    const [round, setRound] = useState({ rounDate: "", score: "", reflection: "", courseId: 0 })
    const [isLoading, setIsLoading] = useState(false)

    const { roundId } = useParams()
    const history = useHistory()
    const [courses, setCourses] = useState([])

    const handleFieldChange = event => {
        const stateToChange = { ...round }
        stateToChange[event.target.id] = event.target.value;
        setRound(stateToChange)
    }

    const handleCancel = () => {
        history.push("/")
    }

    const updateExistingRound = event => {
        event.preventDefault()
        setIsLoading(true)

        const editedRound = {
            id: roundId,
            courseId: round.courseId,
            roundDate: round.roundDate,
            score: round.score,
            reflection: round.reflection,
            userId: round.userId
        }

        updateRound(editedRound)
            .then(() => history.push("/"))
    }

    useEffect(() => {
        getRoundById(roundId)
            .then(round => {
                setRound(round)
                setIsLoading(false)
            })
    }, [])

    useEffect(() => {
        GetAllCourses()
            .then(courses => {
                setCourses(courses)
            })
    }, [])

    return (
        <>
            <section>
                <section>
                    <div>{round.roundDate} </div>
                    <div>{round.score}</div>
                    <div>{round.reflection}</div>
                    <div>{round.course}</div>

                </section>


                <form >
                    <fieldset>
                        <div>
                            <label htmlFor="roundDate"></label>
                            <input type="date" id="roundDate" onChange={handleFieldChange} placeholder="Round Date" value={round.roundDate} />
                        </div>

                        <fieldset>
                            <div>
                                <label htmlFor="course"></label>
                                <select value={round.courseId} name="courseId" id="courseId" onChange={handleFieldChange} className="form-control-course" >
                                    <option value="0"></option>
                                    {courses.map(course => (
                                        <option key={course.id} value={course.id}>
                                            {course.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </fieldset>

                        <div>
                            <label htmlFor="score"></label>
                            <input type="text" id="score" onChange={handleFieldChange} placeholder="Score" value={round.score} />
                        </div>

                        <div>
                            <label htmlFor="reflection"></label>
                            <input type="text" id="reflection" onChange={handleFieldChange} placeholder="Reflection" value={round.reflection} />
                        </div>

                        <div >
                            <button type="button" disabled={isLoading} onClick={updateExistingRound}>Update</button>
                            <button onClick={handleCancel}> Cancel </button>
                        </div>
                    </fieldset>
                </form>
            </section>
        </>
    )
}