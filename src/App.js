import React from "react";
import Home from "./Pages/Home";
import Events from "./Pages/Events";
import Autobots from "./Pages/Autobots";
import {BrowserRouter,Routes,Route} from 'react-router-dom'

export default function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                {/* <Route path='/events' element={<Events/>}/> */}
                <Route path='/autobots' element={<Autobots/>}/>
            </Routes>
        </BrowserRouter>
    )
}