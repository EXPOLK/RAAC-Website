import React from "react";
import Events from "../components/Events";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function EventsPage(){
    return(
        <div>
            <Navbar/>
            <Events/>
            <Footer/>
        </div>
    )
}