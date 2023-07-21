import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(){
    return(
        <header>
            <nav>
                <input type="checkbox" id="check"/>
                <label for="check" className="checkbtn">
                    <i className="fas fa-bars"></i>
                </label>
                <label className="logo"><Link to="/"><img src="/img/heading.png" className="logo-img"/></Link></label>
                <ul>
                    <li><Link className="active" to="/">Home</Link></li>
                    {/* <li><Link to="/events">Events</Link></li> */}
                    <li><Link to="/autobots">Autobots</Link></li>
                    <li><Link to="/gallery">Register</Link></li>
                </ul>
            </nav>
        </header>
    )
}