import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { useRef } from "react";

export default function NavBar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <h3>
        <a href="/">Animal Expert</a>
      </h3>
      <nav ref={navRef}>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/createBread">Create Breed</NavLink>
        <NavLink to="/aboutUs">About Us</NavLink>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <i class="fa-solid fa-x"></i>
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <i class="fa-solid fa-bars"></i>
      </button>
    </header>
  );
}
