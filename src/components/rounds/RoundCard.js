// Author: Jake, Purpose: To format the way each Round will show on the DOM

import React, {useState} from "react";
import { useHistory } from "react-router";
import "./Round.css"
import { Accordion, Button } from "react-bootstrap";
import { RoundEditForm } from "./RoundEditForm";
import { Modal, ModalHeader, ModalBody } from "reactstrap";





export const RoundCard = ({ round, handleDeleteRound, reloadForm }) => {
    const history = useHistory()

    const readableDate = new Date(round.roundDate).toLocaleDateString();
    
  
    const [editModal,setEditModal] =useState(false)

    const toggleEdit = () => {
        setEditModal(!editModal)
    }


    return (
     
        <>
            <div>
                
                <section className="round-cards">
                    <div className="round-card-width">
                        <h6>Date:</h6><p>{readableDate}</p>
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
                            onClick={toggleEdit}>
                            Edit
                        </Button>
                        <Button className="round_delete" onClick={() => handleDeleteRound(round.id)}>Delete</Button>
                        </div>

                    </div>
                </section>
            </div>
            <Modal isOpen={editModal} toggle={toggleEdit}>
                <ModalHeader toggle={toggleEdit}></ModalHeader>
                <ModalBody>
                    <RoundEditForm key={round.id} round={round} reloadForm={reloadForm} toggleEdit={toggleEdit}/>
                </ModalBody>
            </Modal>
        </>
    )
}