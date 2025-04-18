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
            <Navbar/>
            <Intro/>
            <Why/>
            <How/>
            <Pricing/>
            <Footer/>
        </div>
    );
}
