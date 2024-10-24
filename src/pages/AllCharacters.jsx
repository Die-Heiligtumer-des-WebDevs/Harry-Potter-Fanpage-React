import fetchData from "../utils/fetchData.js";
import { useState, useEffect } from "react";

import SearchOptions from "../components/SearchOptions.jsx";
import CharacterCard from "../components/CharacterCard.jsx";

import "../styles/main.scss";

// import { AppContextCharachters } from "../utils/AppContextCharacters.jsx";
// import { useContext } from "react";

const AllCharacters = () => {
  //   const { studentsData = [] } = useContext(AppContextCharachters);

  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState("");
  const [visibleCount, setVisibleCount] = useState(25);
  const [onlyTeachers, setOnlyTeachers] = useState(false);
  const [onlyStudents, setOnlyStudents] = useState(false); //boolean bc of checkbox
  const [onlyGry, setOnlyGry] = useState(false);
  const [onlySly, setOnlySly] = useState(false);
  const [onlyRav, setOnlyRav] = useState(false);
  const [onlyHuf, setOnlyHuf] = useState(false);

  useEffect(() => {
    fetchData("characters")
      .then((data) => setData(data))
      .catch((e) => setError(JSON.stringify(e)));
  }, []);

  const filteredData = data.filter((filter) => {
    const filterTeacher = onlyTeachers ? filter.hogwartsStaff === true : true;
    const filterStudent = onlyStudents ? filter.hogwartsStudent === true : true;
    const filterHuf = onlyHuf ? filter.house === "Hufflepuff" : true;
    const filterGry = onlyGry ? filter.house === "Gryffindor" : true;
    const filterRav = onlyRav ? filter.house === "Ravenclaw" : true;
    const filterSly = onlySly ? filter.house === "Slytherin" : true;
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
      {error && <p>{error}</p>}
      <div className="">
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
          <button onClick={() => setVisibleCount(visibleCount + 25)}>Load more students...</button>
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
