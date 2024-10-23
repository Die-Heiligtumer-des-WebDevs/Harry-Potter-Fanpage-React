import fetchData from "../utils/fetchData.js";
import { useState, useEffect } from "react";
// import { AppContextCharachters } from "../utils/AppContextCharacters.jsx";
// import { useContext } from "react";

const Teachers = () => {
  //   const { studentsData = [] } = useContext(AppContextCharachters);

  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData("characters")
      .then((data) => setData(data))
      .catch((e) => setError(JSON.stringify(e)));
  });
  const teachersOnly = data.filter(
    (teacher) => teacher.hogwartsStudent === false
  );
  
  return (
    <>
      <div className="students-container">
        {teachersOnly.map((teacher) => (
          <div key={teacher.id} className="single-student-container">
            <h3>{teacher.name}</h3>
            <img
              style={{ width: "100px" }}
              src={teacher.image}
              alt={teacher.name}
            />
            <p>{teacher.alternate_names[0]}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Teachers;
