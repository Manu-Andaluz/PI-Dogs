import React from "react";
import "./Breeds.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBreeds } from "../../redux/actions/actions";
import BreedCard from "../BreedCard/BreedCard";
// import { getBreeds } from "../../actions/index";

export default function Breeds() {
  const state = useSelector((state) => state.breed);
  const breeds = state.slice(0, 16);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBreeds());
  });

  return (
    <div className="container">
      <form action="">
        <input type="text" placeholder="Search Breed ..." />
      </form>
      <div className="container-grid">
        {breeds &&
          breeds.map((element) => {
            return (
              <BreedCard
                name={element.name}
                image={element.image}
                id={element.id}
              />
            );
          })}
      </div>
    </div>
  );
}
