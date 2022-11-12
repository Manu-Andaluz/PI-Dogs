import React from "react";
import "./Breeds.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBreeds } from "../../redux/actions/actions";
import BreedCard from "../BreedCard/BreedCard";
import { useState } from "react";
import SearchForm from "../SearchForm/SearchForm";

export default function Breeds() {
  const state = useSelector((state) => state.breed);
  const [numberBreeds, setNumberBreeds] = useState(8);
  let breeds = state.length > 8 ? state.slice(0, numberBreeds) : state;
  const dispatch = useDispatch();

  // every time the user enter in the route, i obtain all the breeds
  useEffect(() => {
    dispatch(getBreeds());
  }, []);

  const handleNextPage = () => {
    setNumberBreeds(numberBreeds + 8);
  };

  return (
    <div className="container">
      <SearchForm />
      <div className="container-grid">
        {breeds &&
          breeds.map((element) => {
            return (
              <BreedCard
                name={element.name}
                image={element.image}
                temperaments={element.temperaments}
                weight={element.weight}
                id={element.id}
                key={element.id}
              />
            );
          })}
      </div>

      <button className="btn-1" onClick={handleNextPage}>
        Next Page
      </button>
    </div>
  );
}
