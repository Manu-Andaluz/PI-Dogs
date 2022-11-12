import React from "react";
import { useState } from "react";
import validate from "../validate/validate";
import "./CreateBreed.css";
import dogForm from "./images/dogForm.jpg";
import { useDispatch } from "react-redux";
import { createBreed } from "../../redux/actions/actions";

export default function CreateBreed() {
  const dispatch = useDispatch();

  const [input, setInput] = useState({});

  const [error, setError] = useState({});

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
      dispatch(createBreed(input)); // breed created
      Array.from(document.querySelectorAll("input")).forEach(
        (input) => (input.value = "")
      ); // clean the inputs
    }
  };

  return (
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

        <input
          type="text"
          placeholder="Temperaments ..."
          name="temperaments"
          value={input.value}
          onChange={handleChange}
          required
        />
        <p className="danger">{error.temperaments}</p>
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
  );
}
