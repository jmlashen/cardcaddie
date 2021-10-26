import React from "react"
import "./NavBar.css"


export const GetUser = () => {
    let user = sessionStorage.getItem("caddie_username")

    if (user) {
        return (
            <div className="get_user">
                <p>Welcome, {user}!</p>
            </div>
        )
    } else {
        return (
            null
        )
    }

}