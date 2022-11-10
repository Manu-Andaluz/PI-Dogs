import React from "react";
import { useState } from "react";
//import validate from "../validate/validate";
import "./CreateBreed.css";
import dogForm from "./images/dogForm.jpg";
import { useDispatch } from "react-redux";
import { createBreed } from "../../redux/actions/actions";

export default function CreateBreed() {
  const dispatch = useDispatch();

  const [input, setInput] = useState({
    name: "",
    minWeight: Number,
    maxWeight: Number,
    minHeight: Number,
    maxHeight: Number,
    minYearsLife: "",
    maxYearsLife: "",
    temperament: "",
    origin: "",
    image: "",
  });

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createBreed(input));
    Array.from(document.querySelectorAll("input")).forEach(
      (input) => (input.value = "")
    );
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
        <div className="flex">
          <input
            type="text"
            placeholder="Min Weight ..."
            name="minWeight"
            value={input[input.value]}
            onChange={handleChange}
            required
          />
          <p>-</p>
          <input
            type="text"
            placeholder="Max Weight ..."
            name="maxWeight"
            value={input[input.value]}
            onChange={handleChange}
            required
          />
        </div>

        <div className="flex">
          <input
            type="text"
            placeholder="Min Height ..."
            name="minHeight"
            value={input[input.value]}
            onChange={handleChange}
            required
          />
          <p>-</p>
          <input
            type="text"
            placeholder="Max Height ..."
            name="maxHeight"
            value={input[input.value]}
            onChange={handleChange}
            required
          />
        </div>

        <div className="flex">
          <input
            type="text"
            placeholder="Min Years Of Life ..."
            name="minYearsLife"
            value={input[input.value]}
            onChange={handleChange}
          />
          <p>-</p>
          <input
            type="text"
            placeholder="Max Years Of Life ..."
            name="maxYearsLife"
            value={input[input.value]}
            onChange={handleChange}
          />
        </div>

        <input
          type="text"
          placeholder="Temperament ..."
          name="temperament"
          value={input[input.value]}
          onChange={handleChange}
          required
        />
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
        <button className="btn-2">Create</button>
      </form>
    </div>
  );
}
