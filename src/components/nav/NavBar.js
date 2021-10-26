import React from "react"
import { Link } from "react-router-dom"
import { useHistory } from "react-router"
import "./NavBar.css"
import { GetUser } from "./GetUser"
import logo from "../../Images/logo.png"



export const NavBar = ({ clearUser, isAuthenticated }) => {

  const history = useHistory()

  const handleLogout = () => {
    const retVal = window.confirm("Are you sure you want to Logout?")

    if (retVal == true) {
      history.push('/login');
      clearUser();
    } else {
      return false
    }
  }

  return (
    <>


      <nav className="navbar"> 
      
        <img className="logo_nav" src={logo} alt="card caddie logo"/>
        
          
            {isAuthenticated ?
              <li className="nav-item">
                <Link className="nav-link" to="/">Rounds</Link>
              </li> : null}
          
        
        
          
            {isAuthenticated ?
               <li className="nav-item">
                <Link className="nav-link" to="/courses">Courses</Link>
              </li> : null}
        
          
          
         
            {isAuthenticated ?
              <li className="nav-item">
                <a className="nav-link" onClick={handleLogout} >Logout</a>
              </li> : null}
          
          <div className="get">
          <GetUser />
          </div>

      </nav>
    </>
  )
}