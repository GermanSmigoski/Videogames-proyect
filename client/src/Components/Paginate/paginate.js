import React from "react";
import "./paginate.css";

const Pagination = ({
  videogamesPage,
  allVideogames,
  paginate,
  page,
}) => {
  const pages = [];
  for (let i = 1; i <= Math.ceil(allVideogames / videogamesPage); i++) {
    pages.push(i);
  }
  const prevHandler = () => {
    if (page <= 1) return
    paginate(page - 1);
  };
  const nextHandler = () => {
    if (page >= pages.length) return;
    paginate(page + 1);
  };
  return (
    <div className="pagination">
      <button className="prev" type="button" onClick={prevHandler}>
        Prev
      </button>
      <div>
        {pages?.map((num) => (
          <button key={num} onClick={() => paginate(num)} className={num === page ? 'active' : ''}>
            {num}
          </button>
        ))}
      </div>
      <button className="next" type="button" onClick={nextHandler}>
        Next
      </button>
    </div>
  );
};
export default Pagination;
