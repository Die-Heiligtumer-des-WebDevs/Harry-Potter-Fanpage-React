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