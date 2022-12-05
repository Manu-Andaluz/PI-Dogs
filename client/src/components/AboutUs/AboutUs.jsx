import React from "react";
import "./AboutUs.css";
import github from "./images/github.svg";

export default function AboutUs() {
  return (
    <div className="container-aboutus">
      <div className="card">
        <div className="card-details">
          <p className="text-title">PI Dogs</p>
          <p className="text-body">
            Tech Stack: Node.js, PostgreSQL, Express,
            <br /> React Router, React Redux{" "}
          </p>
        </div>
        <a
          href="https://github.com/Manu-Andaluz/PI-Dogs"
          className="card-button"
          target="_blank"
          rel="noreferrer"
        >
          Repository
        </a>
      </div>
    </div>
  );
}
