import React from "react";
import { useHistory } from "react-router";
import "./Round.css"

export const RoundCard = ({ round, handleDeleteRound }) => {
    const history = useHistory()



    return (
        <>

            <div className="">
                <section className="">
                    <h4>{round.roundDate}</h4>
                    <h3>Score: {round.score}</h3>
                    <h3>Round Reflection: {round.reflection}</h3>
                    <button className="" onClick={() => handleDeleteRound(round.id)}>Delete</button>
                    <button className="" type="button"
                        onClick={() => history.push(`/${round.id}/edit`)}>
                        Edit
                    </button>
                </section>
                <hr></hr>
            </div>
        </>
    )
}