import React, { useState } from "react"
import { useHistory } from "react-router-dom";

import "./Login.css"

export const Register = ({ setAuthUser }) => {

    const [registerUser, setRegisterUser] = useState({ firstName: "", lastName: "", email: "" })
    const [conflictDialog, setConflictDialog] = useState(false)

    const history = useHistory()

    const handleInputChange = (event) => {
        const newUser = { ...registerUser }
        newUser[event.target.id] = event.target.value
        setRegisterUser(newUser)
    }

    const existingUserCheck = () => {
        return fetch(`http://localhost:8088/users?email=${registerUser.email}`)
            .then(res => res.json())
            .then(user => !!user.length)
    }

    const handleCancel = () => {
        history.push("/login")
    }

    const handleRegister = (e) => {
        e.preventDefault()

        existingUserCheck()
            .then((userExists) => {
                if (!userExists) {
                    fetch("http://localhost:8088/users", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            email: registerUser.email,
                            name: `${registerUser.firstName} ${registerUser.lastName}`
                        })
                    })
                        .then(res => res.json())
                        .then(createdUser => {
                            if (createdUser.hasOwnProperty("id")) {
                                setAuthUser(createdUser)
                                history.push("/")
                            }
                        })
                }
                else {
                    setConflictDialog(true)
                }
            })

    }

    return (
        <main style={{ textAlign: "center" }}>

            <dialog className="dialog dialog--password" open={conflictDialog}>
                <div>Account with that email address already exists</div>
                <button className="button--close" onClick={e => setConflictDialog(false)}>Close</button>
            </dialog>

            <form className="form--login-register" onSubmit={handleRegister}>
                <h1 className="h3 mb-3 font-weight-normal">Create a Card Caddie Account</h1>
                <fieldset className="form-control-register-first">
                    <label htmlFor="firstName"></label>
                    <input type="text" name="firstName" id="firstName" className="form-control-register" placeholder="First name" required autoFocus value={registerUser.firstName} onChange={handleInputChange} />
                </fieldset>
                <fieldset className="form-control-register-second">
                    <label htmlFor="lastName"></label>
                    <input type="text" name="lastName" id="lastName" className="form-control-register" placeholder="Last name" required value={registerUser.lastName} onChange={handleInputChange} />
                </fieldset>
                <fieldset className="form-control-register-third">
                    <label htmlFor="inputEmail"></label>
                    <input type="email" name="email" id="email" className="form-control-register" placeholder="Email address" required value={registerUser.email} onChange={handleInputChange} />
                </fieldset>
                <div className="button-reg">
               
                    
                    <button className="sign-in-button" type="submit"> Sign in </button>
                   
                    
                   
                    <button className="sign-in-button" onClick={handleCancel}> Cancel </button>
                    
                
                </div>

            </form>
        </main>
    )
}
