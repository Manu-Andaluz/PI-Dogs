import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  let activeStyle = {
    borderBottom: "1px solid black",
    paddingBottom: "5px",
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
        <a href="http://localhost:3000/">Breed Dogs</a>
      </div>

      <ul className={toggle.containerLinks}>
        <li className="nav-links">
          <NavLink
            to="/home"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Home
          </NavLink>
        </li>
        <li className="nav-links">
          <NavLink
            to="/createBread"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Create Breed
          </NavLink>
        </li>
        <li className="nav-links">
          <NavLink
            to="/quiz"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Play Quiz
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
