import React from "react";
import "./BreedCard.css";
export default function BreedCard({ name, image, id }) {
  return (
    <a className="container-card" href={`http://localhost:3001/dogs/${id}`}>
      <img src={image} alt="breed dog" />
      <div className="details">
        <h4>{name}</h4>
      </div>
    </a>
  );
}
