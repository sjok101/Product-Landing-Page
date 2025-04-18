'use client'

import Navbar from "../components/Navbar";
import Intro from "../components/Intro";
import Why from "../components/Why";
import How from "../components/How";
import Pricing from "../components/Pricing";
import Footer from "../components/Footer";
import { useEffect, useState} from 'react';

function dynamicScale() {
    const containers = document.querySelectorAll('.section-container');
    const scale = window.innerHeight/1000;
    console.log(scale)
    
    if (scale<1.0&&scale>0.5){
    containers.forEach( container => {
        container.style.height = `${750/scale}px`;

    })
    }
}

export default function Home(){
    useEffect(() => {
        dynamicScale();

        function handleResize() {
            dynamicScale(); // Scale on window resize
          }

          window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
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
