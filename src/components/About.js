import React from "react";
import { Link } from "react-router-dom";

export default function About() {
    return (
        <div className="about" id="about">
            <div className="about-h-section">
                <h1 className="about-h">About Us</h1>
                <div className="about-h-underline"></div>
            </div>
            <div className="about-inner">
                
                <div className="about-text">
                    <p className="about-text-p">Robotics is the intersection of science, engineering and technology that
                     produces machines, called robots, that replicate or substitute for human actions. Pop culture has 
                     always been fascinated with robots — examples include R2-D2, the Terminator and WALL-E. 
                     Some of the most popular are robot vacuum cleaners and kitchen robots, but nowadays we also have 
                     robots which are used to cut the lawn in the garden or clean the bottom of the pool, robots which 
                     clean our windows or which can even iron our clothes, although the latter are still very expensive 
                     and take up a lot of space. We work for students to learn how to code and write commands for robots
                      through play. By programming and controlling robots, students will step into the world of science, 
                      acquiring knowledge and skills that will be useful and applicable beyond the classroom.</p>
                    <Link to="/about" className="about-text-a">View More</Link>
                </div>
            </div>
        </div>
    )
}