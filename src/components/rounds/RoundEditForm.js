// import React, { useState, useEffect } from "react"
// import { getRoundById, updateRound } from "../modules/RoundDataManager"
// import { useParams, useHistory } from "react-router"
// import "./Round.css"

// export const RoundEditForm = () => {
//     const [round, setRound] = useState({ round_date: "", course: "", score: "", reflection: "",  })
//     const [isLoading, setIsLoading] = useState(false)

//     const { roundId } = useParams()
//     const history = useHistory()

//     const handleFieldChange = event => {
//         const stateToChange = { ...round }
//         stateToChange[event.target.id] = event.target.value;
//         setRound(stateToChange)
//     }

//     const handleCancel = () => {
//         history.push("/")
//     }

//     const updateExistingArticle = event => {
//         event.preventDefault()
//         setIsLoading(true)

//         const editedRound = {
//             id: roundId,
//             round_date: round.round_date,
//             course: round.course,
//             score: round.score,
//             reflection: round.reflection,
//             courseId: round.courseId,
//             userId: round.userId
//         }

//         updateRound(editedRound)
//             .then(() => history.push("/"))
//     }

//     useEffect(() => {
//         getRoundById(roundId)
//             .then(round => {
//                 setArticle(round)
//                 setIsLoading(false)
//             })
//     }, [])

//     return (
//         <>
//             <section className="">
//                 <section>
//                     <h3 className="">{round.round_date} </h3>
//                     <div>{round.course}</div>
//                     <div>{round.score}</div>
//                     <div>{round.reflection}</div>
//                 </section>


//                 <form >
//                     <fieldset>
//                         <div>
//                             <label htmlFor="title">Round Date:</label>
//                             <input type="text" id="title" onChange={handleFieldChange} placeholder="Round Date" value={round.round_date} />
//                         </div>

//                         <div>
//                             <label htmlFor="course">Course:</label>
//                             <input type="text" id="course" onChange={handleFieldChange} placeholder="Course" value={round.course} />
//                         </div>

//                         <div>
//                             <label htmlFor="score">Score:</label>
//                             <input type="text" id="score" onChange={handleFieldChange} placeholder="score" value={round.score} />
//                         </div>

//                         <div>
//                             <label htmlFor="reflection">Reflection:</label>
//                             <input type="text" id="reflection" onChange={handleFieldChange} placeholder="reflection" value={round.reflection} />
//                         </div>

//                         <div >
//                             <button type="button" disabled={isLoading} onClick={updateExistingArticle}>Update</button>
//                             <button onClick={handleCancel}> Cancel </button>
//                         </div>
//                     </fieldset>
//                 </form>
//             </section>
//         </>
//     )
// }