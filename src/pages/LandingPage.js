import Intro from "../components/Intro";
import Why from "../components/Why";
import How from "../components/How";
import Pricing from "../components/Pricing";
import Footer from "../components/Footer";

function LandingPage(){
    return(
        <div>
            Landing page
            <Intro/>
            Introduction
            <Why/>
            Why use it
            <How/>
            How to use it
            <Pricing/>
            Pricing
            Download Free Trial or Purchase
            <Footer/>
            Footer
        </div>
    );
}

export default LandingPage;