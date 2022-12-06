import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

const Card = ({ image, name, genres, rating, id }) => {
  return (
    <div
      className="cardContainer"
      style={{ backgroundImage: "url(" + image + ")" }}
    >
      <div className="description">
        <div className="rating">
          <p>Rating: {rating}</p>
        </div>
        <div className="genres">
          <span className="genres-card">
            Genres: {genres?.map((el) => el + " ")}
          </span>
        </div>
      </div>
      <div className="title">
        <Link to={"/videogame/" + id}>
          <h2>{name}</h2>
        </Link>
      </div>
    </div>
  );
};

export default Card;
