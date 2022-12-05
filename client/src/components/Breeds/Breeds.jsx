import React from "react";
import "./Breeds.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBreeds } from "../../redux/actions/actions";
import BreedCard from "../BreedCard/BreedCard";
import { useState } from "react";
import SearchForm from "../SearchForm/SearchForm";
import Paginated from "../Paginated/Paginated";

export default function Breeds() {
  // every time the user enter in the route, i obtain all the breeds
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false); //  loading gift

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    dispatch(getBreeds());
  }, []);

  const allBreeds = useSelector((state) => state.breed);

  const [currentPage, setCurrentPage] = useState(1);
  const [numberBreeds, setNumberBreeds] = useState(15);

  const indexOfLastBreed = numberBreeds * currentPage; // 1 * 8 = 8
  const indexOfFirstBreed = indexOfLastBreed - numberBreeds; //  8 - 8 = 0

  const breeds =
    allBreeds.length > 8
      ? allBreeds.slice(indexOfFirstBreed, indexOfLastBreed)
      : allBreeds;

  const handlePage = (page) => {
    setCurrentPage(page);
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <>
      {loading ? (
        <div className="loader-container"></div>
      ) : (
        <div className="container">
          <SearchForm />

          <div className="flex-nav-paginated">
            {currentPage !== 1 && (
              <button className="paginated-btn" onClick={handlePrevPage}>
                ←
              </button>
            )}
            <Paginated
              breeds={allBreeds.length}
              breedsPerPage={numberBreeds}
              paginated={handlePage}
              currentPage={currentPage}
            />
            {currentPage !== 12 && breeds.length >= 15 && (
              <button className="paginated-btn" onClick={handleNextPage}>
                →
              </button>
            )}
          </div>

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

          <div className="flex-nav-paginated">
            {currentPage !== 1 && (
              <button className="paginated-btn" onClick={handlePrevPage}>
                ←
              </button>
            )}
            <Paginated
              breeds={allBreeds.length}
              breedsPerPage={numberBreeds}
              paginated={handlePage}
              currentPage={currentPage}
            />
            {currentPage !== 12 && breeds.length >= 15 && (
              <button className="paginated-btn" onClick={handleNextPage}>
                →
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
}
