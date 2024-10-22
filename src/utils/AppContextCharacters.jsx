import { createContext, useState, useEffect } from "react";

import  fetchData  from "./fetchData.js";

export const AppContextCharachters = createContext();

const AppProviderCharacters = ({ children }) => {
  const [allCharactersData, setAllCharactersData] = useState([]);


  useEffect(() => {
    fetchData("characters")
      .then((data) => setAllCharactersData(data))
      .catch((e) => console.error(e));
  }, []);

  return (
    <AppContextCharachters.Provider value={{ allCharactersData, setAllCharactersData}}>
      {children}
    </AppContextCharachters.Provider>
  );
};

export default AppProviderCharacters;