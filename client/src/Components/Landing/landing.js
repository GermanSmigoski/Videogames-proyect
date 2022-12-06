import React from "react";
import { Link } from "react-router-dom";
import "./landing.css";

const Landing = () => {
  return (
    <div className="landing">
      <div className="redes">
        <p>Mis Redes     </p>
        <a href="https://ww w.linkedin.com/in/german-smigoski-84323a252/" target='blank'>
        <img src="https://img.icons8.com/color/48/000000/linkedin.png" />
        </a>
        <a href="https://github.com/GermanSmigoski" target='blank'>
        <img src="https://img.icons8.com/nolan/64/github.png" />
        </a>
      </div>
      <div className="welcome">
      <h1>Welcome to my Videogame Individual Proyect: </h1>
      </div>
      <div className="intro">
        <Link to="/home">
          <button className="startBut">Start</button>
        </Link>
        <img src='https://cdn.discordapp.com/attachments/770844054102736927/1035456113832894504/JUJU.png'/>
      </div>
    </div>
  );
};

export default Landing;
