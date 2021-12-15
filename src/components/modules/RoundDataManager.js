// Author: Jake, Purpose: To fetch data from the database


const remoteURL = "https://card-caddie-api.herokuapp.com/"

export const getAllRounds = () => {
    return fetch(`${remoteURL}/rounds?_sort=roundDate&_order=desc&_expand=course`)
        .then(res => res.json())
}
export const getRoundById = (RoundId) => {
    return fetch(`${remoteURL}/rounds/${RoundId}`)
        .then(response => response.json())
}

export const addRound = (newRound) => {
    return fetch(`${remoteURL}/rounds`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newRound)
    }).then(response => response.json())
}

export const deleteRound = (id) => {
    return fetch(`${remoteURL}/rounds/${id}`, {
        method: "DELETE"
    }).then(result => result.json())

}

export const updateRound = (roundObj) => {
    return fetch(`${remoteURL}/rounds/${roundObj.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(roundObj)
    }).then(data => data.json());
}