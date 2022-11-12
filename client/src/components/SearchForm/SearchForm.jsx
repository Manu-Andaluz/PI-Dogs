import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchBreed } from "../../redux/actions/actions";
import "./SearchForm.css";

export default function SearchForm() {
  const [breedName, setBreedName] = useState(); // i created the object to then send it in the get breed
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    setBreedName(e.target.value); // i assign the value
    dispatch(searchBreed(breedName)); // send it in to the get request
  };

  return (
    <form className="search-breed" onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        placeholder="Search Breed ..."
        onChange={(e) => handleChange(e)}
        value={breedName}
      />
      <select name="filters">
        <option value="">Filters By</option>
        <option value="temperaments">Temperaments</option>
        <option value="breedsApi">Api Breeds</option>
        <option value="breedsDB">Data Base Breeds</option>
        <option value="alfabetic">Alfabetic orden</option>
        <option value="weight">Weight</option>
      </select>
    </form>
  );
}
