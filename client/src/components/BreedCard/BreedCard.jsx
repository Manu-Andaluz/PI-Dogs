import React from "react";
import { Link } from "react-router-dom";
import "./BreedCard.css";
export default function BreedCard({ name, image, id }) {
  return (
    <Link className="container-card" to={`/breedDetails/${id}`} key={id}>
      <img src={image} alt="breed dog" />
      <div className="details">
        <h4>{name}</h4>
      </div>
    </Link>
  );
}
