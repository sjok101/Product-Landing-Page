
import React, { useState, useEffect, useRef } from 'react';

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const navbarRef = useRef(null);
  const navbarOffsetTopRef = useRef(0);

  useEffect(() => {
    const landingContainer = document.getElementById("landing-container");

    // Store the initial offsetTop value of the navbar relative to landingContainer
    if (navbarRef.current) {
      navbarOffsetTopRef.current = navbarRef.current.offsetTop;
    }

    const handleScroll = () => {
      if (landingContainer.scrollTop > navbarOffsetTopRef.current) {
        // console.log("true")
        // console.log(landingContainer.scrollTop)
        // console.log(navbarOffsetTopRef.current)
        setIsSticky(true);
      } else {
        // console.log("false")
        // console.log(landingContainer.scrollTop)
        // console.log(navbarOffsetTopRef.current)
        setIsSticky(false);
      }
    };

    // Add scroll event listener to landingContainer instead of window
    landingContainer.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      landingContainer.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div id={isSticky ? "sticky-gap" : ""}></div>
      <div
        ref={navbarRef}
        className="navbar-container"
        id={isSticky ? "fixed-navbar" : ""}
      >
        <h1>Navbar</h1>
        <div id="nav-links">
        <div id="nav-links-left">
            <a href="/">Link 1</a>
            <a href="/">Link 2</a>
            <a href="/">Link 3</a>
        </div>
        <div id="nav-links-right">
            <a href="/">Login</a>
            <a href="/">Sign-up</a>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
