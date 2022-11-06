import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav>
      <div className="logo">
        <p>Breed Dogs</p>
      </div>

      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/breeds">Breeds</Link>
        </li>
        <li>
          <Link to="/createBread">Create Breed</Link>
        </li>
        <li>
          <Link to="/aboutUs">About us</Link>
        </li>
      </ul>
    </nav>
  );
}
