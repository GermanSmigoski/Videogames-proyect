import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchName } from "../../Actions";
import "./SearchBar.css";

const SearchBar = ({ setPage }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleInputChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
    console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchName(name));
    setPage(1);
  };
  return (
    <div>
      <div className="searchBar">
        <input
          className="search"
          onChange={(e) => handleInputChange(e)}
          type="text"
          placeholder="Search videogame..."
        ></input>
        <button onClick={(e) => handleSubmit(e)} type="submit" value="search">
          <img src="https://img.icons8.com/metro/26/000000/search.png" alt="icon-search" />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
