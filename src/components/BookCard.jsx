import "../styles/main.css";

function BookCard({ data }) {
  return (
    <>
      {data.map(
        ({ id, title, author, publicationYear, genre, pages, cover }) => (
          <div key={id} className="single-book-container">
            
            <div className="book-content">
              <h3>{title}</h3>
              <img src={cover} alt={title} />
              <p>Author: {author}</p>
              <p>Publication Year: {publicationYear}</p>
              <p>Genre: {genre}</p>
              <p>Pages: {pages}</p>
            </div>
          </div>
        )
      )}
    </>
  );
}

export default BookCard;
