import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideogames, getGenres, clearDetail} from "../../Actions";
import Card from "../Card/Card";
import Loading from "../Loading/Loading";
import NavBar from "../NavBar/NavBar";
import Paginate from "../Paginate/paginate";
import "./Home.css";

const Home = () => {
  const dispatch = useDispatch();
  const allVideogames = useSelector((state) => state.videogamesRender);

  //paginado//
  const [page, setPage] = useState(1);
  const [videogamesPage, setVideogamesPage] = useState(15);
  const lastGame = page * videogamesPage;
  const firstGame = lastGame - videogamesPage;
  const currentGames = allVideogames?.slice(firstGame, lastGame);
  const paginate = (pages) => {
    setPage(pages);
  };

  //
  useEffect(() => {
    dispatch(getVideogames());
    dispatch(getGenres());
    dispatch(clearDetail())

  }, []);

  function handleRefresh(e) {
    e.preventDefault();
    dispatch(getVideogames());
    setPage(1);
  }

  return (
    <div className="home-container">
      <NavBar setPage={setPage} />
      <button onClick={(e) => handleRefresh(e)} className="refresh">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAFN0lEQVR4nO3bXYxcYxzH8c9uR7VL64KKt8b7KkXvXCCIXijVEBciaBQhiLYSESGRSEWoCBEXEkEqtEiQkLiReEkaF029lAtv23rrFiVuum11vey6+M8x58ye2Z2ZPTNna32TJzlnZs7z/M9/nvfn9+/RPXpxHE7FoZiDg6vf7cFu/IKv8R3+6qJtY+jHN9iGk9vMYzYuwqP4EHsx2mQaxhY8jmWY26YNbXNvyph7WniuB4uxAb9r/oUnSr/jFSxFZVJvVkejzGamrg9sIp8DcAPuwonj/O4HfImfMSSqPRwkmsN8Ufvm1z03C1dW0/d4BM9hXxO2tcX9at6/f5zf9WKFaC71/9rf2IwHcb5o880yRzSfh/FRTt6j+BE3ilpXOM044BRszDFsEGtwbIH2nCacsTOnvA9wZoFlYXwH9OBOYzu1b3EdZhRtTIo+rML2urKHq58XVhsaOaAPL9cVvgt3yPYbnWY2HhB9QNqW17XW1BqS54Bj8HFdge/j+CIKbJN+bKqz6SMcPtmM6x1wNAZSn43gPtEJls1MMV8YUbNvQEy62ibtgKfweep+H66ZTOYdYjn+ULNzK45oN7O0A9JpN86drKUd5FLZzvlDbfYJeQ4YxsWFmNlZluJPNbvfNM7o0Mq0MhlvxxtzR/CGWNCUxVu4Gc+KF1+G2/FkK5k0agLNpK0FvEQRPCHbb53RysPL7f8OmCmm4oldG+U0hUZtoxdX4/QWC90jJkoDLT7XKRbgU7VJ2vVYV5455fCg7AJqVrnmdJ8+sUBLnHBLueaUw2rZRVuhmyr7A32yS+lLki86uXSdSvyJeTinet+L18ozpxwWqtWAvQpaNu9vbFFzwlKmxnK2m7ydur6wNCtKZIlaDfi4ZFtKYa7axsk+02cQyLBDrRacMN36AOJgJuGU6eiAwdT1vIoYCZI9vvWijfyXGUpdz63gWjyf+vCF7trTdXalruf0ii3vhFO7bEwZfJG63l6RrRLTYXq4XowAsKGidkRNTbHxX2YELyY3vfg19WX9ufy04GS1icH2km0phYo49EjO/KZDP/AvvUKNlfSMPTi7PHO6TzITfC/12QVlGFI2y/y/TMzI2k4r15zukayHh8Wh58Lq/RDeKcWiElmqVgN2iq3kaUVFaHQTJ6wq15xyuE12UjS7XHO6z4GyW0ZryjWn8+Qdj9+IZ6rXSedYpuIjTT8u0/p2/o9a2OzpEXKYpBZs0l0R5Hhs075wY3lehnmeHMWtQnIGZ2FtUW9QIrkq9kbHxJ8J6fsT1fvVQmlRtrpiCa4S8vqJfreoiAJfU6tCf+GKIjLtMJfLyuTyNM9NM1dWr79XrBumKherLe0LcQAcJg4T0jXhpsla2gFukJXKfoWnFeAAQnj8dSqzEdE/TIXRoSJCaNL/9pc4SvORL01xuNDepgvaLKRoZbHAWLn8ZhxZ/b5QBxDbZa/WFTgspGjdXDzNFtFs9VErL8pO3wt3QMJKY6M1BsVw2UlHHCD6n7TsbVQINFfm/L5jDiC0t3lBUzvFxGlh40db5iQ8hJ9yyntX41C9jjqAmDavMPYfSdIW0UEt0Vr05yFCwrIWn8hGgyRpQBzqjhcoNaEDJisYHBWzw5eEDvdu2VCVRdV0V/V+hxieBmUDJ+cIBx0hzifT55X1DAinrlNyfHEeFSFCfElrscITpd3iBPs8rYXGtRsCXAgHixCWx8ROc32nOdELbxJNYLHmwnfz6Bfy/a0aBIF3JOy0ATNE8+gXqs10+PyQOLf/TRzSfC8c0XH+ARV0BoFpJUd9AAAAAElFTkSuQmCC" />
      </button>
      <div className="box-1">
        {allVideogames?.length ? (
          allVideogames[0].msg === "Videogame not found" ? (
            <h1>Videogames not found</h1>
          ) : (
            currentGames &&
            currentGames.map((game) => (
              <div
                className="card-container"
                key={game.id}
                style={{ background: `${game.image}` }}
              >
                <Card
                  image={game.image}
                  id={game.id}
                  name={game.name}
                  genres={game.genres}
                  rating={game.rating}
                ></Card>
              </div>
            ))
          )
        ) : (
          <Loading />
        )}
      </div>
      <div>
        <Paginate
          videogamesPage={videogamesPage}
          allVideogames={allVideogames?.length}
          paginate={paginate}
          page={page}
        />
      </div>
    </div>
  );
};

export default Home;
