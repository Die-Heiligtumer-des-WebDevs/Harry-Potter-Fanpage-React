import booksData from "../data/booksData.json";
import { useState, useEffect, useContext } from "react";
// import AppContext from "./utils/AppContext.jsx";
import BookCard from "../components/BookCard.jsx";

import "../styles/main.scss";

const Books = () => {
  // const { data } = useContext(AppContext);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      setData(booksData.books);
    } catch (e) {
      console.error(e);
      setError("failed");
    }
  }, []);

  return (
    <>
      <h1>Harry Potters books</h1>
      <div className="books-container">
        {error && <p>{error}</p>}
        <BookCard data={data} />
      </div>
    </>
  );
};

export default Books;
