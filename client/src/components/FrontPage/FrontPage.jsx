import React from "react";
import "./FrontPage.css";
import { Link } from "react-router-dom";

export default function FrontPage() {
  return (
    <div className="background-image">
      <div className="front-cover">
        <h1>We believe that every dog deserves a forever loving home ❤️</h1>
        <Link to="/home">
          <button className="btn-home">HOME 🏡</button>
        </Link>
      </div>
    </div>
  );
}
