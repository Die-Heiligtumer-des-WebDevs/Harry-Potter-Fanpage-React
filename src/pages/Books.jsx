import fetchData from "../utils/fetchData.js";
import { useState, useEffect } from "react";
// import { AppContextCharachters } from "../utils/AppContextCharacters.jsx";
// import { useContext } from "react";

const Books = () => {
  //   const { studentsData = [] } = useContext(AppContextCharachters);

  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData("characters")
      .then((data) => setData(data))
      .catch((e) => setError(JSON.stringify(e)));
  });
//   const booksOnly = data.filter()
//   );
  
  return (
    <>
      <div className="students-container">
        {data.map((book) => (
          <div key={book.id} className="single-student-container">
            <h3>{book.name}</h3>
            <img
              style={{ width: "100px" }}
              src={book.image}
              alt={book.name}
            />
            <p>{book.alternate_names[0]}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Books;
