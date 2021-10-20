import React from "react"
import { Link } from "react-router-dom"
import { useHistory } from "react-router"
import "./NavBar.css"
import { GetUser } from "./GetUser"



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
      <section className="nav_links">
        
  
        <div>
          <ul>
          {isAuthenticated ?
        
            <li className="nav-item">
              <Link className="nav-link" to="/">Rounds</Link>
            </li>
            : null}
          
        </ul>
    
        <ul>
          {isAuthenticated ?
        
            <li className="nav-item">
              <Link className="nav-link" to="/courses">Courses</Link>
            </li>
            : null}
          
        </ul>
        
   
        
 
        <ul>
          {isAuthenticated ?
            <li className="nav-item" >
              <a className="nav-link" onClick={handleLogout} >Logout</a>
            </li>
            : null}
          <GetUser />
        </ul>
    
      
      </div>
      </section>
      </nav>
    </>
  )
}