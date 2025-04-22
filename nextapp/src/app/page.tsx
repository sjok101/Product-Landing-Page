'use client'

import Navbar from "../components/Navbar";
import Intro from "../components/Intro";
import Why from "../components/Why";
import How from "../components/How";
import Footer from "../components/Footer";

export default function Home(){

    return(
        <div className="flex flex-col">
            <Navbar/>
            <Intro/>
            <Why/>
            <How/>
            <Footer/>
        </div>
    );
}
