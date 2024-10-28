/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

import "../styles/main.scss";
import { NavLink } from "react-router-dom";

function MovieCard({ data }) {
  return (
    <>
      {data.map(
        ({ id, title, director, releaseYear, genre, duration, poster }) => (
          <NavLink to={`/single-movie/${id}`}>
            <div key={id} className="single-movie-container">
              <div className="movie-content"></div>
              <h3>{title}</h3>
              <img src={poster} alt={title} />
              <p>Director: {director}</p>
              <p>Release Year: {releaseYear}</p>
              <p>Genre: {genre}</p>
              <p>Duration: {duration} minutes</p>
            </div>
          </NavLink>
        )
      )}
    </>
  );
}

export default MovieCard;
