import React from "react";
import { useState } from "react";
import validate from "../validate/validate";
import "./CreateBreed.css";
import dogForm from "./images/dogForm.jpg";
// /public/sleepy-dog.jpg
export default function CreateBreed() {
  const [input, setInput] = useState({
    name: "",
    weight: "",
    height: "",
    yearsOfLife: "",
    temperament: "",
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

  return (
    <div className="create-breed-container">
      <img src={dogForm} className="dog-img " alt="nose" />
      <form className="create-breed-form" action="">
        <h3>Create a New Breed !!</h3>
        <input
          type="text"
          placeholder="Name ..."
          value={input[input.name]}
          onChange={handleChange}
          className={error[`${input.name}`] && "danger"}
          required
        />
        <p className="danger">{error.name}</p>
        <div className="flex">
          <input
            type="text"
            placeholder="Weight ..."
            value={input[input.weight]}
            onChange={handleChange}
            className={error.weight && "danger"}
            required
          />
          <p className="danger">{error.weight}</p>
          <input
            type="text"
            placeholder="Height ..."
            value={input[input.height]}
            onChange={handleChange}
            className={error.height && "danger"}
            required
          />
          <p className="danger">{error.height}</p>
          <input
            type="text"
            placeholder="Years Of Life ..."
            value={input[input.yearsOfLife]}
            onChange={handleChange}
            className={error.yearsOfLife && "danger"}
          />
          <p className="danger">{error.yearsOfLife}</p>
        </div>
        <input
          type="text"
          placeholder="Temperament ..."
          value={input[input.temperament]}
          onChange={handleChange}
          className={error.temperament && "danger"}
          required
        />
        <p className="danger">{error.temperament}</p>
        <input
          type="text"
          placeholder="Image ..."
          value={input[input.image]}
          onChange={handleChange}
          className={error.image && "danger"}
        />
        <p className="danger">{error.image}</p>
        <button className="btn-2">Create</button>
      </form>
    </div>
  );
}
