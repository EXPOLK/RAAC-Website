import React from "react";
import { Link } from "react-router-dom";

export default function Autobots(){
    return(
        <div className="autobots">
            <div className="autobots-text">
                <h1 className="autobots-text-h">CYBERNETICS EXPO`23</h1>
                <p className="autobots-text-p">"An automated machine that does just one thing is not a robot. It is simply automation. A robot should have the capability of handling a range of jobs at a factory."

- Joseph Engelberger (Father of Robotics) <br/>

Stay connected stay safe.

A Project Organized by Robotics Association of Ananda College.</p>
            </div>
            <div className="autobots-image">
                <img src="/img/autobots.jpg" className="autobots-image-img"/>
            </div>
            <div>
                <h2 className="autobots-sec2-h2">Comming soon</h2>
                <Link to="/register" className="autobots-btn">Register</Link>
            </div>
        </div>
    )
}