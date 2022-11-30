import React from "react";
import "./BreedDetails.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { deleteBreed, getBreedsDetail } from "../../redux/actions/actions";
import { useState } from "react";

export default function BreedDetails() {
  let { id } = useParams();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false); //  loading gift

  // every time the user enter in the route, i obtain the necessary info of the breed
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    dispatch(getBreedsDetail(id));
  }, []);

  const state = useSelector((state) => state.breedDetail);

  const handleClick = () => {
    dispatch(deleteBreed(state.id));
  };

  return (
    <>
      {loading ? (
        <div className="loader-container"></div>
      ) : (
        <div className="container-details">
          <img src={state.image} alt="" />

          <ul className="detail-list">
            <li>
              <span>Breed Name:</span> {state.name}
            </li>

            {state.origin && (
              <li>
                <span>Origin: </span>
                {state.origin}
              </li>
            )}

            <li>
              <span>Weihgt:</span>
              {state.weight &&
                state.weight
                  .split(" - ")
                  .map((e) => `${e} kg`)
                  .join(" - ")}
            </li>
            <li>
              <span>Height:</span>
              {state.height &&
                state.height
                  .split(" - ")
                  .map((e) => `${e} cm`)
                  .join(" - ")}
            </li>

            {state.yearsOfLife && (
              <li>
                <span>Years of Life:</span> {state.yearsOfLife}
              </li>
            )}

            <li>
              <span>Temperament:</span>
              {typeof state.temperaments === "string" && ( // Api temperaments
                <p>{state.temperaments}</p>
              )}
              {Array.isArray(state.temperaments) && // Data Base temperaments
                state.temperaments.map((data) => <p>{data.name}</p>)}
            </li>
          </ul>
          <div className="container-button-delete">
            {Array.isArray(state.temperaments) && (
              <Link to="/home">
                <button className="btn-3" onClick={handleClick}>
                  DELETE BREED
                </button>
              </Link>
            )}
          </div>
        </div>
      )}
    </>
  );
}
