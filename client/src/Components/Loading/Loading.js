import React from "react";
import { Link } from "react-router-dom";
import "./loading.css";
const Loading = () => {
  return (
    <div>
      <div>
        <img
          className="spinner"
          src="https://i.pinimg.com/originals/7e/2a/eb/7e2aeb1567e91bfc2404cecca6aceecd.gif"
          alt="loading-spinner"
        />
        <Link className="back-start" to="/">
          <button className="but-back">Back to start</button>
        </Link>
      </div>
    </div>
  );
};

export default Loading;
