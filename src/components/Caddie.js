//Author: Jake, Purpose: If a user is logged in, then they can access the features

import React, { useState } from "react"
import { ApplicationViews } from "./ApplicationViews"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Route } from "react-router"



import "./Caddie.css"
import { Footer } from "./Footer/Footer"

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
      <ApplicationViews setAuthUser={setAuthUser} isAuthenticated={isAuthenticated} clearUser={clearUser}  />
      
      <Route path="/">
        {isAuthenticated ? <Footer clearUser={clearUser} isAuthenticated={isAuthenticated}/> : null}
      </Route>
    </>
  )

}

