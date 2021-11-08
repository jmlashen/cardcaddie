// Author: Jake, Purpose: To portray the Round cards in a list on the DOM

import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { RoundCard } from "./RoundCard";
import { getAllRounds, deleteRound } from "../modules/RoundDataManager";
import "./Round.css"
import { RoundForm } from "./RoundForm";
import { Modal, ModalBody,ModalHeader } from "reactstrap";




export const RoundList = () => {
    const [rounds, setRounds] = useState([])
    let user = parseInt(sessionStorage.getItem("caddie_user"))

    const history = useHistory()

    const getRounds = () => {
        debugger
        return getAllRounds().then(response => {
            setRounds(response)        
        })
    }

    const reloadForm = () => {
        getRounds()
    }

    const [modal,setModal] =useState(false)

    const toggle = () => {
        setModal(!modal)
    }

    const handleDeleteRound = id => {
        deleteRound(id)
            .then(() => getAllRounds().then(setRounds))
    }

    useEffect(() => {
        getRounds()
    }, [])


    return (
        // when this first loads its loading an empty Array. It runs the return before the fetch call completes. The state varible is updated and then it rerenders. Two seperate renderings.
        <>
        
            <div className="round-h1">
                <h1>My Rounds</h1>
            </div>
            <section className="">

                <div>
                    <div className="new-round-button-container">
                        <button className="new-round-button" type="button"
                            onClick={toggle}>
                            +round
                        </button>
                    </div>
                </div>

                <section className="">
                    <div className="round-cards-container">
                    {rounds.filter(round => round.userId === user).map(round => <RoundCard reloadForm={reloadForm} round={round} key={round.id} handleDeleteRound={handleDeleteRound} />)}
                    </div>
                </section>
            

            <Modal isOpen={modal} toggle={toggle} >
                {/* <ModalHeader  toggle={toggle}></ModalHeader> */}
                <ModalBody>
                    <RoundForm reloadForm={reloadForm} toggle={toggle}/>
                </ModalBody>
            </Modal>
            </section>
        </>
    )

}

