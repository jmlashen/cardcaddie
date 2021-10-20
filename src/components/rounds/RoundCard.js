import React from "react";
import { useHistory } from "react-router";
import "./Round.css"

export const RoundCard = ({ round, handleDeleteRound }) => {
    const history = useHistory()



    return (
        <>
        <div>
        <section className="round-cards">
            <div className="round-card-width">
                    <h5>{round.roundDate}</h5>
                    <h5>Score: {round.score}</h5>
                    <h5>Round Reflection: {round.reflection}</h5>
                    <button className="" type="button"
                        onClick={() => history.push(`/${round.id}/edit`)}>
                        Edit
                    </button>
                    <button className="" onClick={() => handleDeleteRound(round.id)}>Delete</button>
                    
            </div>
        </section>
        </div>
        </>
    )
}