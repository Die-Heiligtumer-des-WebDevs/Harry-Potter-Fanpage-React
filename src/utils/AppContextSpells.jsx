import { createContext, useState, useEffect } from "react";
import { fetchData } from "./fetchData.js";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [allSpellsData, setAllSpellsData] = useState([]);


  useEffect(() => {
    fetchData("spells")
      .then((data) => setAllSpellsData(data))
      .catch((e) => console.error(e));
  }, []);

  return (
    <AppContext.Provider value={{ allSpellsData, setAllSpellsData}}>
      {children}
    </AppContext.Provider>
  );
};
