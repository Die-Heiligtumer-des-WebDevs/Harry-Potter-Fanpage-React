import { useState, useEffect, useContext } from "react";
import AppContext from "./utils/AppContext.jsx";
import BookCard from "../components/BookCard.jsx";

import "../styles/main.scss";

const Books = () => {
const { allBooksData } = useContext(AppContext);

  return (
    <>
      <h1>Harry Potters books</h1>
      <div className="books-container">
        <BookCard data={allBooksData} />
      </div>
    </>
  );
};

export default Books;
