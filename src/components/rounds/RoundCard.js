// Author: Jake, Purpose: To format the way each Round will show on the DOM

import React from "react";
import { useHistory } from "react-router";
import "./Round.css"
import { Accordion, Button } from "react-bootstrap";



export const RoundCard = ({ round, handleDeleteRound }) => {
    const history = useHistory()



    return (
     
        <>
            <div>
                <section className="round-cards">
                    <div className="round-card-width">
                        <h6>Date</h6><p>{round.roundDate}</p>
                        <h6>Course:</h6> <p>{round.course?.name}</p>
                        <h6>Score:</h6> <p>{round.score}</p>

                        <Accordion className="accordion">
                            <Accordion.Header> Round Reflection: </Accordion.Header>
                            <Accordion.Body>
                            {round.reflection}
                            </Accordion.Body>
                        </Accordion>
                        
                        <div className="round-buttons">
                        <Button className="round_edit" type="button"
                            onClick={() => history.push(`/${round.id}/edit`)}>
                            Edit
                        </Button>
                        <Button className="round_delete" onClick={() => handleDeleteRound(round.id)}>Delete</Button>
                        </div>

                    </div>
                </section>
            </div>
        </>
    )
}