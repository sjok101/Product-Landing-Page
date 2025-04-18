'use client'

import Navbar from "../components/Navbar";
import Intro from "../components/Intro";
import Why from "../components/Why";
import How from "../components/How";
import Pricing from "../components/Pricing";
import Footer from "../components/Footer";

export default function Home(){

    return(
        <div>
            <div className ="nav-container">
            <Navbar/>
            </div>
        <div id="landing-container">
            <div className ="section-container">
            <Intro/>
            </div>
            <div className ="section-container">
            <Why/>
            </div>
            <div className ="section-container">
            <How/>
            </div>
            <div className ="section-container">
            <Pricing/>
            </div>
            <div className ="section-container">
            <Footer/>
            </div>
        </div>
        </div>
    );
}
