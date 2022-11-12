import React from "react";
import "./BreedDetails.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { deleteBreed, getBreedsDetail } from "../../redux/actions/actions";

export default function BreedDetails() {
  let { id } = useParams();
  const dispatch = useDispatch();

  // every time the user enter in the route, i obtain the necessary info of the breed
  useEffect(() => {
    dispatch(getBreedsDetail(id));
  }, []);

  const state = useSelector((state) => state.breedDetail);

  const handleClick = () => {
    dispatch(deleteBreed(state.id));
  };

  return (
    <div className="container-details">
      <img src={state.image} alt="" />

      <ul className="detail-list">
        <li>
          <span>Breed Name:&nbsp;</span> {state.name}
        </li>

        {state.origin && (
          <li>
            <span>Origin: &nbsp;</span>
            {state.origin}
          </li>
        )}

        <li>
          <span>Weihgt:&nbsp;</span> {state.weight}
        </li>
        <li>
          <span>Height:&nbsp;</span> {state.height}
        </li>

        {state.yearsOfLife && (
          <li>
            <span>Years of Life:&nbsp;</span> {state.yearsOfLife}
          </li>
        )}

        <li>
          <span>Temperament:&nbsp;</span>
          {typeof state.temperaments === "string" && ( // Api temperaments
            <p>{state.temperaments}</p>
          )}
          {Array.isArray(state.temperaments) && // Data Base temperaments
            state.temperaments.map((data) => <p>{data.name}&nbsp;</p>)}
        </li>
        <li>
          <button className="btn-3" onClick={handleClick}>
            DELETE BREED
          </button>
        </li>
      </ul>
    </div>
  );
}
