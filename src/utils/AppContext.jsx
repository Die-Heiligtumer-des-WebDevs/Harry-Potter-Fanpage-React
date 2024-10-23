import { createContext, useState, useEffect } from "react";

import  fetchData  from "./fetchData.js";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [allSpellsData, setAllSpellsData] = useState([]);
  const [allCharactersData, setAllCharactersData] = useState([]);

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const spellsData = await fetchData("spells");
        const charactersData = await fetchData("characters");
        setAllSpellsData(spellsData);
        setAllCharactersData(charactersData);
      } catch (e) {
        console.error(e);
      }
    };
    fetchDataAsync();
  }, []);

  return (
    <AppContext.Provider value={{ allCharactersData, setAllCharactersData, allSpellsData, setAllSpellsData}}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;