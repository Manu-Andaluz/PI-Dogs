import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  searchBreed,
  getFilter,
  getByTemperament,
  getTemperaments,
} from "../../redux/actions/actions";
import "./SearchForm.css";

export default function SearchForm() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTemperaments());
  }, []);

  const state = useSelector((state) => state.temperaments);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    dispatch(searchBreed(e.target.value)); // send it in to the get request
  };

  const handleFilter = (e) => {
    dispatch(getFilter(e.target.value));
  };

  const hanldeTemperaments = (e) => {
    dispatch(getByTemperament(e.target.value));
  };

  return (
    <form className="search-breed" onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        placeholder="Search Breed ..."
        onChange={(e) => handleChange(e)}
      />
      <select name="filters" onChange={handleFilter}>
        <option value="alfabetic-A-Z">Alfabetic (A-Z)</option>
        <option value="alfabetic-Z-A">Alfabetic (Z-A)</option>
        <option value="breedsApi">Api Breeds</option>
        <option value="breedsDB">Data Base Breeds</option>
        <option value="lessWeight">Less Weight</option>
        <option value="moreWeight">More Weight</option>
      </select>

      <select name="temperaments" onChange={hanldeTemperaments}>
        <option value="">Sort by Temperament</option>
        {state.map((e) => (
          <option value={e.name}>{e.name}</option>
        ))}
      </select>

      {/* <input
        type="text"
        placeholder="Sort by Temperaments ..."
        onChange={hanldeTemperaments}
      /> */}
    </form>
  );
}
