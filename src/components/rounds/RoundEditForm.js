//Author: Jake, Purpose: To allow the user to edit an Article
import React, { useState, useEffect } from "react"
import { getRoundById, updateRound } from "../modules/RoundDataManager"
import "./Round.css"
import { GetAllCourses } from "../modules/CoursesDataManager"



export const RoundEditForm = ({reloadForm, toggleEdit, round}) => {
   

    const [rounds, setRounds] = useState({ 
        
        roundDate: "", 
        score: "", 
        reflection: "", 
        courseId: 0,
      

    })

    const [isLoading, setIsLoading] = useState(false)

    const roundId = round.id
    const [courses, setCourses] = useState([])
    // USESTATE: useState is a Hook that allows you to have state variables in 
    // functional components. You pass the initial state to the
    // function and it returns a variable with the current state value 
    // (not necessarily the initial state) and another function 
    // to update this value.

    const handleFieldChange = event => {
        const stateToChange = { ...rounds }
        stateToChange[event.target.id] = event.target.value;
        setRounds(stateToChange)
    }


    const updateExistingRound = event => {
        event.preventDefault()
        setIsLoading(true)

        const editedRound = {
            id: roundId,
            courseId: rounds.courseId,
            roundDate: rounds.roundDate,
            score: rounds.score,
            reflection: rounds.reflection,
            userId: rounds.userId
            // image: image ? image : courses.image
        }

        updateRound(editedRound)
            .then(toggleEdit)
            .then(reloadForm)
    }

    useEffect(() => {
        getRoundById(roundId)
            .then(round => {
                setRounds(round)
                setIsLoading(false)
            })
    }, [])

    useEffect(() => {
        GetAllCourses()
            .then(courses => {
                setCourses(courses)
            })
    }, [])

    const readableDate = new Date(rounds.roundDate).toLocaleDateString();

    return (
        <>
        
           
                <form className="editform">
               
                    <fieldset>
                    <h1 className="round-h1-create">Edit Round</h1>
                        <div>
                            <label htmlFor="roundDate"><h6>Round Date:</h6></label>
                            <input type="date" id="roundDate" onChange={handleFieldChange} className="form-control-date" placeholder="Round Date" value={rounds.roundDate} />
                        </div>

                        <fieldset>
                            <div>
                                <label htmlFor="course"><h6>Course:</h6></label>
                                <select value={rounds.courseId} name="courseId" id="courseId" onChange={handleFieldChange} className="form-control-course" >
                                    <option value="0"></option>
                                    {courses.map(c => (
                                        <option key={c.id} value={c.id}>
                                            {c.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </fieldset>

                        <div>
                            <label htmlFor="score"><h6>Score:</h6></label>
                            <input type="text" id="score" onChange={handleFieldChange} className="form-control-score" placeholder="Score" value={rounds.score} />
                        </div>

                        <div>
                            <label htmlFor="reflection"><h6>Round Reflection:</h6></label>
                            <textarea type="text" id="reflection" onChange={handleFieldChange} className="form-control-reflection-edit" placeholder="Reflection" value={rounds.reflection} />
                        </div>

                        <div >
                            <button type="button" disabled={isLoading} onClick={updateExistingRound}>Update</button>
                            
                        </div>
                    </fieldset>
                    {/* <div className="edittext-background">
                <section className="edittext">
                    <div>{readableDate} </div>
                    <div>{rounds.score}</div>
                    <div>{rounds.reflection}</div>
                    <div>{rounds.course}</div>
                </section>
                </div> */}

                    
                </form>
                
               
            
            
            
            
            
        </>
    )
}