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
  const [numberBreeds, setNumberBreeds] = useState(16);
  let breeds = state.length > 16 ? state.slice(0, numberBreeds) : state;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBreeds());
  }, []);

  const handleNextPage = () => {
    setNumberBreeds(numberBreeds + 16);
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
                id={element.id}
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
