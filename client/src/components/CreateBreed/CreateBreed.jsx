import React from "react";
import { useState } from "react";
import validate from "../validate/validate";
import "./CreateBreed.css";
import dogForm from "./images/dogForm.jpg";
import { useDispatch } from "react-redux";
import { createBreed } from "../../redux/actions/actions";

export default function CreateBreed() {
  const dispatch = useDispatch();

  const [input, setInput] = useState({
    name: "",
    minWeight: undefined,
    maxWeight: undefined,
    minHeight: undefined,
    maxHeight: undefined,
    minYearsLife: "",
    maxYearsLife: "",
    temperaments: "",
    origin: "",
    image: "",
  });

  const [error, setError] = useState({});

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });

    setError(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (error.name || error.temperaments) {
      alert("Invalid values");
    } else {
      dispatch(createBreed(input));
      Array.from(document.querySelectorAll("input")).forEach(
        (input) => (input.value = "")
      );
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
          value={input[input.value]}
          onChange={handleChange}
          required
        />
        <p className="danger">{error.name}</p>
        <div className="flex">
          <input
            type="number"
            placeholder="Min Weight ..."
            name="minWeight"
            value={input[input.value]}
            onChange={handleChange}
            required
          />
          <p>-</p>
          <input
            type="number"
            placeholder="Max Weight ..."
            name="maxWeight"
            value={input[input.value]}
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
            value={input[input.value]}
            onChange={handleChange}
            required
          />
          <p>-</p>
          <input
            type="number"
            placeholder="Max Height ..."
            name="maxHeight"
            value={input[input.value]}
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
            value={input[input.value]}
            onChange={handleChange}
          />
          <p>-</p>
          <input
            type="number"
            placeholder="Max Years Of Life ..."
            name="maxYearsLife"
            value={input[input.value]}
            onChange={handleChange}
          />
        </div>

        <input
          type="text"
          placeholder="Temperaments ..."
          name="temperaments"
          value={input[input.value]}
          onChange={handleChange}
          required
        />
        <p className="danger">{error.temperaments}</p>
        <input
          type="text"
          placeholder="Origin ..."
          name="origin"
          value={input[input.value]}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Image ..."
          name="image"
          value={input[input.value]}
          onChange={handleChange}
        />
        <button
          className={error.name || error.temperaments ? "btn-2-error" : "btn-2"}
        >
          Create
        </button>
      </form>
    </div>
  );
}
