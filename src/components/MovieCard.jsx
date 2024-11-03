/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

import "../styles/main.scss";
import { useNavigate } from "react-router-dom";

function MovieCard({ data }) {
  const navigate = useNavigate();
  const handleBackToMovies = (e) => {
    e.preventDefault();
    navigate("/movies");
  };
  return (
    <>
      {data.map(
        ({
          id,
          title,
          director,
          releaseYear,
          genre,
          duration,
          poster,
          language,
          boxOffice,
          shopLink,
          src
        }) => (
          <div className="single-movie-container" key={id}>
            <button onClick={handleBackToMovies}>Go back</button>
            <h1>{title}</h1>
            <div className="movie-content">
              <div>
                <img src={poster} alt={title} />
                <p>Genre: {genre}</p>
                <p>Duration: {duration} min</p>
                <p>Language: {language}</p>
                <div className="single-book-card-footer">
                  <p>Director: {director}</p>
                  <p>Release Year: {releaseYear}</p>
                  <p>Box Office: {boxOffice}</p>
                  <a href={shopLink} target="_blank" rel="noopener noreferrer">
                    Buy here
                  </a>
                </div>
              </div>
              <div className="trailer">
                <iframe
                  width="560"
                  height="315"
                  src={src}
                  loading="eager"
                  // allow="autoplay"
                  // allowfullscreen
                ></iframe>
              </div>{" "}
            </div>
          </div>
        )
      )}
    </>
  );
}

export default MovieCard;
