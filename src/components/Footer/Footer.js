
import React from "react"
import { Link } from "react-router-dom"
import "./Footer.css"
import footerimg from "../../Images/jake.jpeg"



export const Footer = () => {
    return (
        <>

            <footer>
            </footer>
                <div className="footer-container">
                
                <div >
                <p className="footer-header">&copy;Card Caddie 2021</p>

                </div>

               

                <div>    
                    <p className="footer-info-jake">developed by: Jake Lashenik | Nashville Software School | Cohort 51</p>
                </div>

                <div className="jakemove">
                
                <Link to="/">
                    <img className="jake" src={footerimg} alt="footer image" />
                </Link>
           
            </div>
                </div>
        
                




           

        </>
    )
}