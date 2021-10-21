import React, { useState } from "react"
import { Link, useHistory } from "react-router-dom";
import "./Login.css"
import logo from "../../Images/logo.png"


export const Login = ({ setAuthUser }) => {
    const [loginUser, setLoginUser] = useState({ email: "" })
    const [existDialog, setExistDialog] = useState(false)

    const history = useHistory()

    const handleInputChange = (event) => {
        const newUser = { ...loginUser }
        newUser[event.target.id] = event.target.value
        setLoginUser(newUser)
    }


    const existingUserCheck = () => {

        return fetch(`http://localhost:8088/users?email=${loginUser.email}`)
            .then(res => res.json())
            .then(user => user.length ? user[0] : false)
    }

    const handleLogin = (e) => {
        e.preventDefault()

        existingUserCheck()
            .then(exists => {
                if (exists) {
                    setAuthUser(exists)
                    history.push("/")
                } else {
                    setExistDialog(true)
                }
            })
    }

    return (

        <main className="container--login">

            <dialog className="dialog dialog--auth" open={existDialog}>
                <div>
                    User does not exist
                </div>
                <button className="button--close" onClick={e => setExistDialog(false)}>
                    Close
                </button>
            </dialog>

            <section className="login">
                <form className="form--login" onSubmit={handleLogin}>
                    <div className="login_logo">
                        <div>< img className="logo_image" src={logo} alt="card caddie logo" /></div>
                    </div>

                    <fieldset>
                        <label htmlFor="inputEmail"></label>
                        <input type="email"
                            id="email"
                            className="form-control"
                            placeholder="Email address"
                            required autoFocus
                            value={loginUser.email}
                            onChange={handleInputChange} />

                    </fieldset>
                    <div className="login_button_contatiner">
                        <button className="sign-in-button" type="submit">
                            Sign in
                        </button>
                    </div>

                    <section className="link--register">

                        <div className="register">
                            <div className="not-signed-in"><h6>not signed up?</h6></div>
                            <div>
                                <Link to="/register"><h6>Register for an account</h6></Link>
                            </div>
                        </div>
                    </section>
                </form>
            </section>


        </main>
    )
}
