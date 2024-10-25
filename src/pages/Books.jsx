import booksData from "../data/booksData.json";
import { useState, useEffect } from "react";

import BookCard from "../components/BookCard.jsx";

import "../styles/main.scss";
// import { AppContextCharachters } from "../utils/AppContextCharacters.jsx";
// import { useContext } from "react";

const Books = () => {
  //   const { studentsData = [] } = useContext(AppContextCharachters);

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
