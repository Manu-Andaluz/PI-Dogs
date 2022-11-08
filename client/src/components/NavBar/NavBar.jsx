import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  let activeStyle = {
    borderBottom: "1px solid black",
    paddingBottom: "5px",
  };
  return (
    <nav>
      <div className="logo">
        <p>Breed Dogs</p>
      </div>

      <ul>
        <li>
          <NavLink
            to="/home"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/breeds"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Breeds
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/createBread"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Create Breed
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/aboutUs"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Your Breed
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
