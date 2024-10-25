import moviesData from "../data/moviesData.json";
import { useState, useEffect } from "react";

import MovieCard from "../components/MovieCard.jsx";
import "../styles/main.scss";
// import { AppContextCharachters } from "../utils/AppContextCharacters.jsx";
// import { useContext } from "react";

const Movies = () => {
  //   const { studentsData = [] } = useContext(AppContextCharachters);

  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      setData(moviesData.movies);
    } catch (e) {
      console.error(e);
      setError("failed");
    }
  }, []);

  return (
    <>
    <h1>Harry Potters Movies</h1>
      <div className="movies-container">
        {error && <p>{error}</p>}
        <MovieCard data={data} />
      </div>
    </>
  );
};

export default Movies;
