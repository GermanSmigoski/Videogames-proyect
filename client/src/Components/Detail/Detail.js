import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getDetail } from "../../Actions";
import Loading from "../Loading/Loading";
import { Link, useParams } from "react-router-dom";
import "./detail.css";

const Detail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getDetail(id));
  }, []);

  const gameSelected = useSelector((state) => state.detail);

  return (
    <div>
      <div className="links-box">
        <Link to="/home">
          <button>Home</button>
        </Link>
        <Link to="/create">
          <button>Create Videogame</button>
        </Link>
      </div>
      {gameSelected ? (
        <div
        className="detail-box"
        style={{ backgroundImage: "url(" + gameSelected?.image + ")" }}
        >
          <div className="info">
          <h1>{gameSelected.name}</h1>
          <p>{gameSelected.description}</p>
          <div>
            <h2>Rating: {gameSelected.rating}</h2>
            <h2>Released: {gameSelected.released}</h2>
            {/* <h2>{gameSelected.genres === "undefined" ? gameSelected.genres.map(el => el + ' ') : gameSelected.genres.map(el=> el.name + ' ')}</h2> */}
            <h2>Genres: {gameSelected.genres?.map(genre => genre.name ? `${genre.name} ` : `${genre} `)}</h2>
            <h2>Platforms: {gameSelected.platforms?.map((el) => el + " ")}</h2>
          </div>

          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Detail;
