import "../styles/NavbarStyles.css"
import React, {useState, useEffect, useRef} from 'react';

const Navbar = () => {
    const [isSticky, setIsSticky] = useState(false);
    const navbarRef = useRef(null);
    const navbarOffsetTopRef = useRef(0); // Define navbarOffsetTopRef using useRef
  
    useEffect(() => {
      // Store the initial offsetTop value of the navbar
      if (navbarRef.current) {
        navbarOffsetTopRef.current = navbarRef.current.offsetTop;
      }
  
      const handleScroll = () => {
        if (window.scrollY >= navbarOffsetTopRef.current) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      };
  
      window.addEventListener("scroll", handleScroll);
  
      // Cleanup the event listener on component unmount
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []); // Empty dependency array to only set up once
  
    return (
      <div
        ref={navbarRef}
        className="navbar-container" // Use a className so that id will take precedence
        id={isSticky ? "fixed-navbar" : ""} 
      >
        <h1>Navbar</h1>
      </div>
    );
  };
  
  export default Navbar;