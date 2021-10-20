
import React, { useState } from "react"
import { ApplicationViews } from "./ApplicationViews"
import { NavBar } from "./nav/NavBar"

import "./Caddie.css"

export const Caddie = () => {

  const [isAuthenticated, setIsAuthenticated] = useState(sessionStorage.getItem("caddie_user") !== null)

  const setAuthUser = (user) => {
    sessionStorage.setItem("caddie_user", user.id)
    sessionStorage.setItem("caddie_username", user.name)
    setIsAuthenticated(sessionStorage.getItem("caddie_user") !== null)
  }

  const clearUser = () => {
    sessionStorage.clear();
    setIsAuthenticated(sessionStorage.getItem("caddie_user") !== null)
  }

  return (
    <>
      <NavBar clearUser={clearUser} isAuthenticated={isAuthenticated} />
      <ApplicationViews setAuthUser={setAuthUser} isAuthenticated={isAuthenticated} />
    </>
  )

}

