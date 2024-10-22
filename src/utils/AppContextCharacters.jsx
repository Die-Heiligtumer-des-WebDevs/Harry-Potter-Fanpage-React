import { createContext, useState, useEffect } from "react";
import { fetchData } from "./fetchData.js";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [allCharactersData, setAllCharactersData] = useState([]);


  useEffect(() => {
    fetchData("characters")
      .then((data) => setAllCharactersData(data))
      .catch((e) => console.error(e));
  }, []);

  return (
    <AppContext.Provider value={{ allCharactersData, setAllCharactersData}}>
      {children}
    </AppContext.Provider>
  );
};
