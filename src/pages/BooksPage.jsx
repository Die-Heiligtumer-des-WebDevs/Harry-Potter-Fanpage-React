/* eslint-disable react/jsx-key */
import { useContext } from "react";
import { AppContext } from "../utils/AppContext.jsx";
import { NavLink } from "react-router-dom";

import "../styles/main.scss";

const Books = () => {
  const { allBooksData } = useContext(AppContext);

  return (
    <>
      <div className="books-page-container">
        <h1>Harry Potters Books</h1>
        <div className="books-page-small-container">
          {allBooksData.map((book) => (
            <NavLink to={`/books/${book.id}`}>
              <div className="books-page-single-container">
                <h2>{book.title}</h2>

                <img src={book.cover} alt={book.title} />
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
};

export default Books;
