import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { dbFilter, ratingFilter, nameFilter, genreFilter } from "../../Actions";
import "./NavBar.css";

const NavBar = ({ setPage }) => {
  const dispatch = useDispatch();
  const genre = useSelector((state) => state.genresCopy);

  function handleRatingFilter(e) {
    dispatch(ratingFilter(e.target.value));
    setPage(1);
  }

  function handleNameFilter(e) {
    dispatch(nameFilter(e.target.value));
    setPage(1);
  }

  function handleDbFilter(e) {
    dispatch(dbFilter(e.target.value));
    setPage(1);
  }

  function handleGenreFilter(e) {
    dispatch(genreFilter(e.target.value));
    setPage(1);
  }

  return (
    <div className="navBar-container">
      <Link to="/">
        <img
          src="https://thumbs.dreamstime.com/b/icono-ergon%C3%B3mico-de-la-palanca-mando-estilo-del-esquema-vector-para-el-dise%C3%B1o-web-aislado-en-fondo-blanco-141679160.jpg"
          alt="logo-link"
          className="logo-link"
        ></img>
      </Link>
      <div>
        <Link to="/create">
          <button className="link" type="button">
            Create Videogame
          </button>
        </Link>
      </div>
      <SearchBar setPage={setPage} />
      <div>
        <span>Sort by Genre</span>
        <select className="filter-genre" onChange={(e) => handleGenreFilter(e)}>
          <option value="All">All Genres</option>
          {genre?.map((el) => {
            return (
              <option key={el.id} value={el.name}>
                {el.name}
              </option>
            );
          })}
        </select>
      </div>
      <div>
        <span>Alphabetic Sort: </span>
        <select
          className="filter-alphabetic"
          onChange={(e) => handleNameFilter(e)}
          defaultValue="default"
        >
          <option value="All">All</option>
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>
        </select>
      </div>
      <div>
        <span>Rating Sort: </span>
        <select
          className="filter-rating"
          onChange={(e) => handleRatingFilter(e)}
        >
          <option value="Max">Max</option>
          <option value="Min">Min</option>
        </select>
      </div>
      <div>
        <span>Data Base / Api</span>
        <select
          className="filter-api"
          onChange={(e) => handleDbFilter(e)}
          defaultValue="All"
        >
          <option value="All">All</option>
          <option value="created">Db</option>
          <option value="Api">Api</option>
        </select>
      </div>
    </div>
  );
};

export default NavBar;
