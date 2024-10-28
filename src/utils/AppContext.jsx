import { createContext, useState, useEffect } from "react";

import fetchData from "./fetchData.js";
import booksData from "./data/booksData.json";
import moviesData from "./data/moviesData.json";
export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [allSpellsData, setAllSpellsData] = useState([]);
  const [allCharactersData, setAllCharactersData] = useState([]);
  const [allBooksData, setAllBooksData] = useState([]);
  const [allMoviesData, setAllMoviesData] = useState([]);
  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const spellsData = await fetchData("spells");
        const charactersData = await fetchData("characters");
        setAllSpellsData(spellsData);
        setAllCharactersData(charactersData);
        setAllBooksData(booksData);
        setAllMoviesData(moviesData);
      } catch (e) {
        console.error(e);
      }
    };
    fetchDataAsync();
  }, []);

  return (
    <AppContext.Provider
      value={{
        allCharactersData,
        setAllCharactersData,
        allSpellsData,
        setAllSpellsData,
        allBooksData,
        setAllBooksData,
        allMoviesData,
        setAllMoviesData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
