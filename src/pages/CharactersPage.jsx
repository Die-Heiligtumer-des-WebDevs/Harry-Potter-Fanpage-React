import { useState, useContext } from "react";
import { AppContext } from "../utils/AppContext.jsx";

import SearchOptions from "../components/SearchOptions.jsx";
import CharacterCard from "../components/CharacterCard.jsx";

import "../styles/main.css";

const Characters = () => {
  const [filter, setFilter] = useState("");
  const [visibleCount, setVisibleCount] = useState(25);
  const [onlyTeachers, setOnlyTeachers] = useState(false);
  const [onlyStudents, setOnlyStudents] = useState(false); //boolean bc of checkbox
  const [onlyGry, setOnlyGry] = useState(false);
  const [onlySly, setOnlySly] = useState(false);
  const [onlyRav, setOnlyRav] = useState(false);
  const [onlyHuf, setOnlyHuf] = useState(false);

  const { allCharactersData } = useContext(AppContext);

  const filteredData = allCharactersData.filter((char) => {
    const filterRole =
      (!onlyTeachers && !onlyStudents) ||
      (onlyTeachers && char.hogwartsStaff) ||
      (onlyStudents && char.hogwartsStudent);

    const filterHouse =
      (!onlyHuf && !onlyGry && !onlyRav && !onlySly) || // Show all if no house filter is selected
      (onlyHuf && char.house === "Hufflepuff") ||
      (onlyGry && char.house === "Gryffindor") ||
      (onlyRav && char.house === "Ravenclaw") ||
      (onlySly && char.house === "Slytherin");

    const filterNames = char.name.toLowerCase().includes(filter.toLowerCase());

    return filterRole && filterHouse && filterNames;
  });
  const visibleData = filteredData.slice(0, visibleCount);
  return (
    <>
      <div className="allcharacters-container">
        <h1>Find People of Hogwarts Family</h1>
        {/* <div>
          <button onClick={() => window.scroll({ bottom: -1 })}>
            Jump to Bottom
          </button>
        </div> */}
        <div className="filter-container">
          <SearchOptions
            filter={filter}
            setFilter={setFilter}
            onlyTeachers={onlyTeachers}
            setOnlyTeachers={setOnlyTeachers}
            onlyStudents={onlyStudents}
            setOnlyStudents={setOnlyStudents}
            onlyHuf={onlyHuf}
            setOnlyHuf={setOnlyHuf}
            onlyGry={onlyGry}
            setOnlyGry={setOnlyGry}
            onlyRav={onlyRav}
            setOnlyRav={setOnlyRav}
            onlySly={onlySly}
            setOnlySly={setOnlySly}
          />
        </div>
        <div className="cards-container">
          {visibleData.map((character) => (
            <CharacterCard key={character.id} data={character} />
          ))}{" "}
          <div className="button-container">
            <button
              onClick={() => window.scroll({ top: 0, behavior: "smooth" })}
            >
              Jump to Top
            </button>
            <button onClick={() => setVisibleCount(visibleCount + 25)}>
              Load more students...
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Characters;
