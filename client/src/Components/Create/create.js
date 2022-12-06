import React from "react";
import { Link, useHistory } from "react-router-dom";
import { getGenres, getVideogames } from "../../Actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { createVideogame } from "../../Actions";
import "./create.css";

const Create = () => {
  const dispatch = useDispatch();
  const genres = useSelector((state) => state.genres);
  const history = useHistory();
  const [errors, setErrors] = useState({});

  useEffect(() => {
    dispatch(getGenres());
    dispatch(getVideogames());
  }, []);

  const consoles = [
    "Linux",
    "PS Vita",
    "Android",
    "Xbox One",
    "Nintendo Switch",
    "iOS",
    "PC",
    "macOS",
    "Xbox 360",
    "PlayStation 3",
    "PlayStation 4",
    "Web",
    "Xbox Series S/X",
    "PlayStation 5",
    "Wii U",
    "Nintendo 3DS",
  ];

  const [input, setInput] = useState({
    name: "",
    description: "",
    released: "",
    rating: 2.5,
    image: "",
    consoles: [],
    genres: [],
  });

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validation({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleConsoleSelect = (e) => {
    setInput({
      ...input,
      consoles: [...new Set([...input.consoles, e.target.value])],
    });
  };

  const handleSelect = (e) => {
    setInput({
      ...input,
      genres: [...new Set([...input.genres, e.target.value])],
    });
  };

  const handleDelete = (genre) => {
    setInput({
      ...input,
      genres: input.genres.filter((genreDel) => genreDel !== genre),
    });
  };

  const handleDeleteConsole = (console) => {
    setInput({
      ...input,
      consoles: input.consoles.filter((consoleDel) => consoleDel !== console),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.name) {
      alert("You must enter a name");
    } else if (!errors) {
      alert("You should complete de form fields");
    } else {
      dispatch(createVideogame(input));
      alert("Videogame created succesfully");
      setInput({
        name: "",
        description: "",
        released: "",
        rating: "",
        image: "",
        consoles: [],
        genres: [],
      });
      history.push("/home");
    }
  };

  function validation(input) {
    let errors = {};
    if (!input.name) {
      errors.name = "Name is required";
    }
    if (!input.description) {
      errors.description = "Description is required";
    }
    if (!input.released) {
      errors.released = "Released date is required";
    }
    if (!input.image) {
      errors.image = "Image cannot be empty";
    }
    if (!input.console) {
      errors.console = "Console is required";
    }
    if (!input.genres) {
      errors.genres = "Genres cannot be empty";
    }
    return errors;
  }

  return (
    <div className="create-container">
      <div className="links">
        <Link to="/home">
          <button>Home</button>
        </Link>
        <Link to="/">
          <button>To Start</button>
        </Link>
      </div>
      <div className="box-create">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div>
            <label>Name: </label>
            <input
              type="text"
              name="name"
              value={input.name}
              autoComplete="off"
              onChange={(e) => handleChange(e)}
            ></input>
            {errors.name && <p className="error">{errors.name}</p>}
          </div>
          <div>
            <label>Description: </label>
            <input
              type="text"
              name="description"
              autoComplete="off"
              value={input.description}
              onChange={(e) => handleChange(e)}
            />
            {errors.description && (
              <p className="error">{errors.description}</p>
            )}
          </div>
          <div>
            <label>Released: </label>
            <input
              type="text"
              name="released"
              autoComplete="off"
              value={input.released}
              onChange={(e) => handleChange(e)}
            />
            {errors.released && <p className="error">{errors.released}</p>}
          </div>
          <div>
            <label>Rating: {input.rating}</label>
            <input
              className="rating"
              type="range"
              min="0"
              max="5"
              name="rating"
              step="0.5"
              autoComplete="off"
              value={input.rating}
              onChange={(e) => handleChange(e)}
            />
            {errors.rating && <p className="error">{errors.rating}</p>}
          </div>
          <div>
            <label>Image: </label>
            <input
              className="image"
              type="text"
              name="image"
              value={input.image}
              onChange={(e) => handleChange(e)}
            />
            <img className="espejo" src={input.image} alt='preview'/>
            {errors.image ? <p className="error">{errors.image}</p> : null}
          </div>
          <div>
            <select onChange={handleSelect}>
              {genres?.map((el) => (
                <option key={el.id} value={el.name} name="genres">
                  {el.name}
                </option>
              ))}
            </select>
            {errors.genres ?<p className="error">{errors.genres}</p> : null}
          </div>
          {input.genres?.map((genre) => (
            <div className="genre-view" key={genre}>
              <p>{genre}</p>
              <button
                className="trash"
                onClick={() => handleDelete(genre)}
                type="button"
              >
                <img src="https://img.icons8.com/sf-regular/48/undefined/delete.png" alt="delete-icon" />
              </button>
            </div>
          ))}
          <div>
            <select onChange={handleConsoleSelect}>
              {consoles?.map((console) => (
                <option key={console} value={console} name="consoles">
                  {console}
                </option>
              ))}
            </select>
          </div>
          {input.consoles.map((console) => (
            <div className="console-view" key={console}>
              <p>{console}</p>
              <button
                onClick={() => handleDeleteConsole(console)}
                type="button"
                className="trash"
              >
                <img src="https://img.icons8.com/sf-regular/48/undefined/delete.png" alt="delete-icon" />
              </button>
            </div>
          ))}
          <button type="submit">Create Videogame</button>
        </form>
        <img src="https://cdn.discordapp.com/attachments/770844054102736927/1034323155734499348/-mario.png" alt="mario" />
      </div>
    </div>
  );
};

export default Create;
