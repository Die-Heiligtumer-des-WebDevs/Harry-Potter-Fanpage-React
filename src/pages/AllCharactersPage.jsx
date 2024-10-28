import { useState, useContext } from "react";
import {AppContext} from "../utils/AppContext.jsx";

import SearchOptions from "../components/SearchOptions.jsx";
import CharacterCard from "../components/CharacterCard.jsx";

import "../styles/main.css";

const AllCharacters = () => {
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
    const filterTeacher = onlyTeachers ? char.hogwartsStaff === true : true;
    const filterStudent = onlyStudents ? char.hogwartsStudent === true : true;
    const filterHuf = onlyHuf ? char.house === "Hufflepuff" : true;
    const filterGry = onlyGry ? char.house === "Gryffindor" : true;
    const filterRav = onlyRav ? char.house === "Ravenclaw" : true;
    const filterSly = onlySly ? char.house === "Slytherin" : true;
    // const filterHouse = filter.house
    //   .toLowerCase()
    //   .includes(filter);
    // && filterHouse;
    return (
      filterTeacher &&
      filterStudent &&
      filterHuf &&
      filterGry &&
      filterRav &&
      filterSly
    );
  });
  const visibleData = filteredData.slice(0, visibleCount);
  return (
    <>
      <div className="allcharacters-container">
        <h1>Find your favourite Hogwart People</h1>
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
          <CharacterCard data={visibleData} />
          <button onClick={() => setVisibleCount(visibleCount + 25)}>
            Load more students...
          </button>
        </div>
        <div>
          <button onClick={() => window.scroll({ top: 0, behavior: "smooth" })}>
            Jump to Top
          </button>
        </div>
      </div>
    </>
  );
};

export default AllCharacters;
