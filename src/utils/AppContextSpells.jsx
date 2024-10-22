import { createContext, useState, useEffect } from "react";

import  fetchData  from "./fetchData.js";

export const AppContextSpells = createContext();

const AppProviderSpells = ({ children }) => {
  const [allSpellsData, setAllSpellsData] = useState([]);


  useEffect(() => {
    fetchData("spells")
      .then((data) => setAllSpellsData(data))
      .catch((e) => console.error(e));
  }, []);

  return (
    <AppContextSpells.Provider value={{ allSpellsData, setAllSpellsData}}>
      {children}
    </AppContextSpells.Provider>
  );
};

export default AppProviderSpells;