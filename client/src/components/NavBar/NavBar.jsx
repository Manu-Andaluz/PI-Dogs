import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  let activeStyle = {
    borderBottom: "1px solid #3a3aac",
    paddingBottom: "5px",
    color: "#3a3aac",
  };

  const [toggle, setToggle] = useState({
    burger: "burger",
    containerLinks: "container-links",
  });

  const hanldeClick = () => {
    if (toggle.containerLinks === "container-links") {
      setToggle({
        ...toggle,
        burger: "burger toggle",
        containerLinks: "nav-active",
      });
    } else {
      setToggle({
        ...toggle,
        burger: "burger",
        containerLinks: "container-links",
      });
    }
  };

  return (
    <nav className="nav-bar">
      <div className="logo">
        <a href="/">Breed Dogs</a>
      </div>

      <ul className={toggle.containerLinks}>
        <li className="nav-links">
          <NavLink
            to="/home"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={hanldeClick}
          >
            Home
          </NavLink>
        </li>
        <li className="nav-links">
          <NavLink
            to="/createBread"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={hanldeClick}
          >
            Create Breed
          </NavLink>
        </li>
        <li className="nav-links">
          <NavLink
            to="/aboutUs"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={hanldeClick}
          >
            About Us
          </NavLink>
        </li>
      </ul>

      <div className={toggle.burger} id="burger" onClick={hanldeClick}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}
