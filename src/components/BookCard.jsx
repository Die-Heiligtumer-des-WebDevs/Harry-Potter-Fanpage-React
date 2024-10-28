/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import "../styles/main.css";
import { NavLink } from "react-router-dom";

function BookCard({ data }) {
  return (
    <>
      {data.map(
        ({ id, title, author, publicationYear, genre, pages, cover }) => (
          <NavLink to={`/books/${id}`}>
            <div key={id} className="single-book-container">
              <div className="book-content">
                <h3>{title}</h3>
                <img src={cover} alt={title} />
                <p>Author: {author}</p>
                <p>Publication Year: {publicationYear}</p>
                <p>Genre: {genre}</p>
                <p>Pages: {pages}</p>
              </div>
            </div>
          </NavLink>
        )
      )}
    </>
  );
}

export default BookCard;
