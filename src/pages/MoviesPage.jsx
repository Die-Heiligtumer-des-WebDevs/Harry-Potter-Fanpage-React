import { useContext } from "react";

import { AppContext } from "../utils/AppContext.jsx";
import { NavLink } from "react-router-dom";

import "../styles/main.scss";

const MoviesPage = () => {
  const { allMoviesData } = useContext(AppContext);

  return (
    <>
      <div className="movies-page-container">
        <h1>Movies</h1>
        <div className="movies-page-small-container">
          {allMoviesData.map((movie) => (
            <NavLink to={`/movies/${movie.id}`} key={movie.id}>
              <div className="movies-page-single-container">
                <h2>{movie.title}</h2>
                <div>
                  <img src={movie.poster} alt={movie.title} />
                </div>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
};

export default MoviesPage;
