import { useState, useEffect, useContext } from "react";

import MovieCard from "../components/MovieCard.jsx";
import "../styles/main.scss";
import { AppContext } from "../utils/AppContext.jsx";


const Movies = () => {
 const { allMoviesData } = useContext(AppContext);

  return (
    <>
    <h1>Harry Potters Movies</h1>
      <div className="movies-container">
        <MovieCard key={allMoviesData.id} data={allMoviesData} />
      </div>
    </>
  );
};

export default Movies;
