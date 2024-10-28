import { AppContext } from "../utils/AppContext.jsx";
import { useContext } from "react";
import { useParams } from "react-router-dom";

function SingleMovieCard() {
  const { id } = useParams();
  const { allMoviesData } = useContext(AppContext);

  const singleMovie = allMoviesData;
//   .find(
    // (movie) => movie.id === id
//   );

  return (
    <div key={id}>
      {singleMovie ? (
        <>
          <h2>{singleMovie.title}</h2>
          <img src={singleMovie.poster} alt={singleMovie.title} />
          <p>{singleMovie.content}</p>
          <p>{singleMovie.duration}</p>
          <p>{singleMovie.language}</p>
          <div className="single-book-card-footer">
            <p>{singleMovie.director}</p>
            <p>{singleMovie.releaseYear} </p>
            <p>{singleMovie.boxOffice}</p>
            <a href={singleMovie.shopLink}>Buy here</a>
          </div>
        </>
      ) : (
        <p>Movie not found</p>
      )}
    </div>
  );
}

export default SingleMovieCard