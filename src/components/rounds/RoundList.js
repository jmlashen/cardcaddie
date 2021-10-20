import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { RoundCard } from "./RoundCard";
import { getAllRounds, deleteRound } from "../modules/RoundDataManager";
import "./Round.css"

export const RoundList = () => {
    const [rounds, setRounds] = useState([])
    let user = sessionStorage.getItem("caddie_user")

    const history = useHistory()

    const getRounds = () => {
        return getAllRounds().then(response => {
            setRounds(response)

        })
    }

    const handleDeleteRound = id => {
        deleteRound(id)
            .then(() => getAllRounds().then(setRounds))
    }

    useEffect(() => {
        getRounds()
    }, [])




    return (
        <>
            <section className="">

                <div className="">
                    <h1>Rounds</h1>
                    <div className="new-round-button-container">
                        <button className="new-round-button" type="button"
                            onClick={() => { history.push("/create") }}>
                            Add New Round
                        </button>
                    </div>
                </div>

                <section className="">
                    <div className="">
                        {rounds.map(round => <RoundCard round={round} key={round.id} handleDeleteRound={handleDeleteRound} />)}
                    </div>
                </section>
            </section>

        </>
    )

}