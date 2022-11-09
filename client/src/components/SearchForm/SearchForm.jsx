import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchBreed } from "../../redux/actions/actions";
import "./SearchForm.css";

export default function SearchForm() {
  const [breedName, setBreedName] = useState();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    setBreedName(e.target.value);
    dispatch(searchBreed(breedName));
  };

  return (
    <form className="search-breed" onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        placeholder="Search Breed ..."
        onChange={(e) => handleChange(e)}
        value={breedName}
      />
    </form>
  );
}
