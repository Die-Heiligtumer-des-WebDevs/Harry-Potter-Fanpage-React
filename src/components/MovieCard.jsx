// function MovieCard({ data }) {
//     return (
//       <>
//         {data.map(({title, director, releaseYear, boxOffice, duration, genre, rating, poster }) => (
//           <div key={boxOffice} className="single-movie-container">
//             <h3>{title}</h3>
//             <img src={poster} alt={title} />
//             <p>Director: {director}</p>
//             <p>Publication Year: {releaseYear}</p>
//             <p>Genre: {genre}</p>
//             <p>Duration: {duration} minutes</p>
//             <p>Rating: {rating}</p>
//           </div>
//         ))}
//       </>
//     );
//   }
  
//   export default MovieCard;
  

function MovieCard({ data }) {
  return (
    <>
      {data.map(({ id, title, director, releaseYear, genre, duration, poster }) => (
        <div key={id} className="single-movie-container">
          <div className="movie-content"></div>
          <h3>{title}</h3>
          <img src={poster} alt={title} />
          <p>Director: {director}</p>
          <p>Release Year: {releaseYear}</p>
          <p>Genre: {genre}</p>
          <p>Duration: {duration} minutes</p>
        </div>
      ))}
    </>
  );
}

export default MovieCard;