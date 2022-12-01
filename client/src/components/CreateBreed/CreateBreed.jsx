import React from "react";
import { useState } from "react";
import validate from "../validate/validate";
import "./CreateBreed.css";
import dogForm from "./images/vertical-dog.jpg";
import { useDispatch, useSelector } from "react-redux";
import { createBreed, getTemperaments } from "../../redux/actions/actions";
import { useEffect } from "react";

export default function CreateBreed() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTemperaments());
  }, []);

  const [input, setInput] = useState({});
  const [error, setError] = useState({});

  const state = useSelector((state) => state.temperaments);
  const [temperaments, setTemperaments] = useState([]);

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value, // key: input name - value: input value
    });

    setError(
      validate({
        ...input,
        [e.target.name]: e.target.value, // key: input name - value: input value
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (error.name || error.temperaments || error.weigh || error.height) {
      // validate inputs
      alert("Invalid values");
    } else {
      input.temperaments = temperaments.join(" ");
      dispatch(createBreed(input)); // breed created
      alert("Breed Created !!");
      Array.from(document.querySelectorAll("input")).forEach(
        (input) => (input.value = "")
      ); // clean the inputs
      setTemperaments([]);
    }
  };

  const hanldeTemperaments = (e) => {
    e.preventDefault();
    setTemperaments([...temperaments, e.target.value]);
  };

  const removeTemperament = (e) => {
    e.preventDefault();
    setTemperaments(temperaments.filter((value) => value !== e.target.value));
  };

  return (
    <div className="container">
      <div className="create-breed-container">
        <img src={dogForm} className="dog-img " alt="nose" />
        <form className="create-breed-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name ..."
            name="name"
            value={input.value} // input.name = input.value
            onChange={handleChange}
            required
          />
          <p className="danger">{error.name}</p>
          <div className="flex">
            <input
              type="number"
              placeholder="Min Weight ..."
              name="minWeight"
              value={input.value}
              onChange={handleChange}
              required
            />
            <p>-</p>
            <input
              type="number"
              placeholder="Max Weight ..."
              name="maxWeight"
              value={input.value}
              onChange={handleChange}
              required
            />
          </div>
          <p className="danger">{error.weight}</p>
          <div className="flex">
            <input
              type="number"
              placeholder="Min Height ..."
              name="minHeight"
              value={input.value}
              onChange={handleChange}
              required
            />
            <p>-</p>
            <input
              type="number"
              placeholder="Max Height ..."
              name="maxHeight"
              value={input.value}
              onChange={handleChange}
              required
            />
          </div>
          <p className="danger">{error.height && error.height}</p>

          <div className="flex">
            <input
              type="number"
              placeholder="Min Years Of Life ..."
              name="minYearsLife"
              value={input.value}
              onChange={handleChange}
            />
            <p>-</p>
            <input
              type="number"
              placeholder="Max Years Of Life ..."
              name="maxYearsLife"
              value={input.value}
              onChange={handleChange}
            />
          </div>

          <div className="temperaments-container">
            <select onChange={hanldeTemperaments}>
              <option>Temperaments</option>
              {state.map((e, i) => (
                <option value={e.name} key={i}>
                  {e.name}
                </option>
              ))}
            </select>

            {temperaments.length > 0 &&
              temperaments.map((e, i) => (
                <option
                  className="temperaments-values"
                  value={e}
                  onClick={removeTemperament}
                  key={i}
                >
                  {e} x
                </option>
              ))}
          </div>

          <input
            type="text"
            placeholder="Origin ..."
            name="origin"
            value={input.value}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Image ..."
            name="image"
            value={input.value}
            onChange={handleChange}
          />
          <button
            className={
              error.name || error.temperaments || error.weigh || error.height
                ? "btn-2-error"
                : "btn-2"
            } // if inputs values are wrongs the button is red otherwise is orange
          >
            Create
          </button>
        </form>
      </div>
    </div>
  );
}
