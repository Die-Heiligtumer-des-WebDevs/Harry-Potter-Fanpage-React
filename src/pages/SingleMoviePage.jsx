import { AppContext } from "../utils/AppContext.jsx";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import MovieCard from "../components/MovieCard.jsx";
import "../styles/main.scss";

function SingleMovieCard() {
  const { id } = useParams();
  const { allMoviesData } = useContext(AppContext);

  const singleMovieData = allMoviesData.find((movie) => movie.id === id);

  return (
    <div key={id} className="single-movie-container">
      {singleMovieData ? (
        <>
          <MovieCard key={singleMovieData.id} data={[singleMovieData]} />
        </>
      ) : (
        <p>Movie not found</p>
      )}
    </div>
  );
}

export default SingleMovieCard;
