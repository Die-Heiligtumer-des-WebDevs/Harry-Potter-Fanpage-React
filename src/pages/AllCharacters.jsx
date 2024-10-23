import fetchData from "../utils/fetchData.js";
import { useState, useEffect } from "react";
import SearchOptions from "../components/SearchOptions.jsx";
import CharacterCard from "../components/CharacterCard.jsx";
// import { AppContextCharachters } from "../utils/AppContextCharacters.jsx";
// import { useContext } from "react";

const AllCharacters = () => {
  //   const { studentsData = [] } = useContext(AppContextCharachters);

  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState("");
  const [onlyTeachers, setOnlyTeachers] = useState(false);
  const [onlyStudents, setOnlyStudents] = useState(false);
  //boolean bc of checkbox

  useEffect(() => {
    fetchData("characters")
      .then((data) => setData(data))
      .catch((e) => setError(JSON.stringify(e)));
  }, []);

  const filteredData = data.filter((filter) => {
    const filterTeacher = onlyTeachers ? filter.hogwartsStaff === true : false;
    const filterStudent = onlyStudents
      ? filter.hogwartsStudent === true
      : false;
    // const filterHouse = filter.house
    //   .toLowerCase()
    //   .includes(filter);
    return filterTeacher && filterStudent;
    // && filterHouse;
  });
  return (
    <>
      <div className="filter-options">
        <h1>Find your favourite Hogwart People</h1>
        <SearchOptions
          filter={filter}
          setFilter={setFilter}
          onlyTeachers={onlyTeachers}
          setOnlyTeachers={setOnlyTeachers}
          onlyStudents={onlyStudents}
          setOnlyStudents={setOnlyStudents}
        />
      </div>
      <CharacterCard data={filteredData} />
    </>
  );
};

export default AllCharacters;
