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
  const [onlyTeachers, setOnlyTeachers] = useState(false);
  const [onlyStudents, setOnlyStudents] = useState(false); //boolean bc of checkbox

  useEffect(() => {
    fetchData("characters")
      .then((data) => setData(data))
      .catch((e) => setError(JSON.stringify(e)));
  }, []);

  const filteredData = data.filter((filter) => {
    const filterTeacher = onlyTeachers ? filter.hogwartsStaff === true : true;
    const filterStudent = onlyStudents ? filter.hogwartsStudent === true : true;
// const filterHouse = filter.house
  //   .toLowerCase()
  //   .includes(filter);
  // && filterHouse;
    return filterTeacher && filterStudent;
  });
  
  return (
    <>
    {error && <p>{error}</p> }
    <div className="">

    
      <h1>Find your favourite Hogwart People</h1>
      <div className="filter-container">
        <SearchOptions
          filter={filter}
          setFilter={setFilter}
          onlyTeachers={onlyTeachers}
          setOnlyTeachers={setOnlyTeachers}
          onlyStudents={onlyStudents}
          setOnlyStudents={setOnlyStudents}
        />
      </div>
      <div className="cards-container">
        <CharacterCard data={filteredData} />
      </div></div>
    </>
  );
};

export default AllCharacters;
