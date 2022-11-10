import React from "react";
import "./BreedDetails.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { deleteBreed, getBreedsDetail } from "../../redux/actions/actions";

export default function BreedDetails() {
  let { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBreedsDetail(id));
  }, []);

  const state = useSelector((state) => state.breedDetail);

  const handleClick = () => {
    dispatch(deleteBreed(state.id));
  };

  return (
    <div className="container-details">
      <ul className="detail-list">
        <li>
          <span>Breed Name:</span> {state.name}
        </li>
        <li>
          <span>Origin:</span> {state.origin}
        </li>
        <li>
          <span>Weihgt:</span> {state.weight}
        </li>
        <li>
          <span>Height:</span> {state.height}
        </li>
        <li>
          <span>Years of Life:</span> {state.yearsOfLife}
        </li>
        <li>
          <span>Temperament: </span>{" "}
          {typeof state.temperaments === "string" && state.temperaments}
          {Array.isArray(state.temperaments) &&
            state.temperaments.map((data) => <p>{data.name}&nbsp;</p>)}
        </li>
        <li>
          <button className="btn-3" onClick={handleClick}>
            DELETE BREED
          </button>
        </li>
      </ul>
      <img src={state.image} alt="" />
    </div>
  );
}

// {/* dogs api */}
// {
//   typeof details.temperaments === 'string' && details.temperaments.length
//   ? (details.temperaments.length ? <div><p className="temp">{details.temperaments}</p></div> : null)
//   : null
// }
// {/* dogs creados en la db */}
// {
//   Array.isArray(details.temperaments) && details.temperaments.length
//   ? <div><p className="temp">{details.temperaments.map(t => Object.values(t)).join(', ')}.</p></div>
//   : null
// }
