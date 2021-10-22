//Author: Jake, Purpose: To not allow access to user if they are not logged in and Route parameters allowing the user to navagate the application

import React, { useState } from "react"
import { Route } from "react-router-dom"
import { Redirect } from "react-router"
import { RoundList } from "./rounds/RoundList"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import { RoundForm } from "./rounds/RoundForm"
import { CourseList } from "./courses/CourseList"
import { NavBar } from "./nav/NavBar"
import { RoundEditForm } from "./rounds/RoundEditForm"





export const ApplicationViews = ({ isAuthenticated, setAuthUser, clearUser }) => {
  const [show, setShow] = useState(false)
  return (
    <>
      <Route path="/">
        {isAuthenticated ? <NavBar clearUser={clearUser} isAuthenticated={isAuthenticated}/> : null}
      </Route>

      <Route exact path="/:roundId(\d+)/edit">
        <RoundEditForm />
      </Route>

      <Route exact path="/courses">
        <CourseList />
      </Route>

      <Route path="/create">
        <RoundForm />
      </Route>

      <Route exact path="/">
        {isAuthenticated ? <RoundList /> : <Redirect to="/login" />}
      </Route>

      <Route exact path="/login">
        <Login setAuthUser={setAuthUser} />
      </Route>

      <Route path="/register">
        <Register setAuthUser={setAuthUser} />
      </Route>


    </>
  )
}

