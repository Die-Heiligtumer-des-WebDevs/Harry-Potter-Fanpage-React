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
      <div>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/watch?v=VyHV0BRtdxo"
          frameborder="0"
          allow="autoplay"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

export default SingleMovieCard;
