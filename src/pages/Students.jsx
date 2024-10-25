// import fetchData from "../utils/fetchData.js";
// import { useState, useEffect } from "react";
// // import { AppContextCharachters } from "../utils/AppContextCharacters.jsx";
// // import { useContext } from "react";

// const Students = () => {
//   //   const { studentsData = [] } = useContext(AppContextCharachters);

//   const [data, setData] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetchData("characters")
//       .then((data) => setData(data))
//       .catch((e) => setError(JSON.stringify(e)));
//   });

//   const studentsOnly = data.filter(
//     (student) => student.hogwartsStudent === true
//   );
//   return (
//     <>
//       {error && <p>Error..</p> }
//       <div className="students-container">
//         {studentsOnly.map((student) => (
//           <div key={student.id} className="single-student-container">
//             <h3>{student.name}</h3>
//             <img
//               style={{ width: "100px" }}
//               src={student.image}
//               alt={student.name}
//             />
//             <p>{student.alternate_names[0]}</p>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default Students;
