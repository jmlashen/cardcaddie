
import React from "react"
import { Link } from "react-router-dom"
import "./Footer.css"
import footerimg from "../../Images/footerimg.jpg"



export const Footer = () => {
    return (
        <>

            <div className="">

                <picture>
                    <Link to="/">
                        <img className="footerimg" src={footerimg} alt="footer image" />
                    </Link>
                </picture>

                <div className="footer-header">
                    <h6>Contact the Developer</h6>
                    <p>Jake Lashenik</p>
                    
                    
                </div>

            </div>

        </>
    )
}