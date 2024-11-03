import { useState, useEffect, useContext } from "react";
import { AppContext } from "../utils/AppContext";
import { NavLink } from "react-router-dom";
import "../styles/main.scss";

const Games = () => {
  return (
    <div className="allgames">
      <div className="quiz-container1">
        <div className="quiz"></div>
        <NavLink
  to={`/games/quiz-game`}
  style={{
    color: "white",
    fontWeight: "bold",
    fontSize: "1.2em", 
    textDecoration: "none",
  }}
  activeStyle={{ color: "white" }} 
>
  Teste dein Hogwartswissen
</NavLink>

      </div>

      <div className="sortinghat-container">
        <div className="sortinghat"></div>
        <p>
        <NavLink
  to={`/games/hogwarts-quiz`}
  style={{
    color: "white",
    fontWeight: "bold",
    fontSize: "1.2em", 
    textDecoration: "none",
  }}
  activeStyle={{ color: "white" }} 
>
Finde dein Haus</NavLink>

        </p>
      </div>
    </div>
  );
};
export default Games;
