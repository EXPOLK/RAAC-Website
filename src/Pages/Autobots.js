import React from "react";
import Navbar from "../components/Navbar";
import AutobotsComp from '../components/Autobots'
import Footer from "../components/Footer";

export default function Autobots(){
    return(
        <div>
            <Navbar/>
            <AutobotsComp/>
            <Footer/>
        </div>
    )
}