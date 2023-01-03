import React from "react";
import { Link } from "react-router-dom";
import "./BreedCard.css";
export default function BreedCard({ name, image, temperaments, weight, id }) {
  return (
    <Link
      className="container-card"
      to={`/breedDetails/${id}`}
      key={id}
      style={{ textDecoration: "none" }}
    >
      <img src={image} alt="breed dog" />
      <div className="card-content">
        <h4>{name}</h4>

        <div className="card-temperaments">
          {Array.isArray(temperaments) ? ( // Data Base temperaments
            temperaments.map((data, index) => (
              <p key={index}>{data.name}&nbsp;</p>
            ))
          ) : (
            <p>{temperaments}</p> // Api temperaments
          )}
        </div>
        <p>
          {weight
            .split(" - ")
            .map((e) => `${e} kg`)
            .join(" - ")}
        </p>
      </div>
    </Link>
  );
}
