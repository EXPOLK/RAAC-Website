import React from "react";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Footer from "../components/Footer";
import MiniGallery from "../components/MiniGallery";
import Banner from "../components/Banner";
import Board from '../components/Board'

export default function Home(){
    return (
        <div>
            <Navbar/>
            <Banner
                title="Wanna like to see details about"
                link="#about"
                buttonText="About Us"
                isHome={true}
            />
            <Board/>
            <About/>
            <Footer/>
        </div>
    )
}