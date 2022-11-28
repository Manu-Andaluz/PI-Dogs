import React from "react";
import "./AboutUs.css";

export default function AboutUs() {
  return (
    <div className="about-us-container">
      <h4>Project By Manuel Perez Andaluz</h4>
      <h4>Tech Stack: </h4>
      <ul className="tech-stack">
        <li>React Router</li>
        <li>React Redux</li>
        <li>Node.js</li>
        <li>PostgreSQL</li>
        <li>JavaScript</li>
        <li>CSS</li>
        <li>HTML</li>
      </ul>
      <p className="project-summary">
        <span>Project Summary:</span>
        <br />
        In this project you can see all the dog breeds brought from an api,
        create your own dog breed or delete it. The form to create a breed has
        different validations to prevent the user from entering invalid
        information
        <br />
        Also you can see all the races in /home, if you click on one, you will
        see the details of that race and you can delete it
      </p>
      <p>© 2022 copyright all right reserved</p>
    </div>
  );
}
