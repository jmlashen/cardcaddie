const remoteURL = "http://localhost:8088"

export const getAllRounds = () => {
    return fetch(`${remoteURL}/rounds?_sort=timestamp&_order=desc`)
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