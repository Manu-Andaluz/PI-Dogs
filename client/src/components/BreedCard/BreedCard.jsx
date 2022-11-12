import React from "react";
import { Link } from "react-router-dom";
import "./BreedCard.css";
export default function BreedCard({ name, image, temperaments, weight, id }) {
  return (
    <Link className="container-card" to={`/breedDetails/${id}`} key={id}>
      <img src={image} alt="breed dog" />
      <div className="card-content">
        <h4>{name}</h4>

        <div className="card-temperaments">
          {Array.isArray(temperaments) ? (
            temperaments.map((data, index) => (
              <p key={index}>{data.name}&nbsp;</p>
            ))
          ) : (
            <p>{temperaments}</p>
          )}
        </div>
        <p>
          <span>Weight: </span>
          {weight}
        </p>
      </div>
    </Link>
  );
}
