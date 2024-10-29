/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

import "../styles/main.scss";

function MovieCard({ data }) {
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
        }) => (
          <div className="single-movie-container" key={id}>
            <div className="movie-content">
              <h2>{title}</h2>
              <img src={poster} alt={title} />
              <p>{genre}</p>
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
          </div>
        )
      )}
    </>
  );
}

export default MovieCard;
