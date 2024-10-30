import { useState, useEffect, useContext } from "react";
import { AppContext } from "../utils/AppContext";
import { NavLink } from "react-router-dom";
// import "../styles/components/Games.css"
import "../styles/main.scss";

const Games = () => {
  return (
    <div className="allgames">

      <div className="quiz">
      </div>
 <NavLink to={`/games/quiz-game`}>   Quiz Game   </NavLink>


      <div className="sortinghat">
      
      </div>
      <p><NavLink to=":hogwarts-quiz">Hogwarts Quiz</NavLink></p>

    </div>
  );
};
export default Games;
