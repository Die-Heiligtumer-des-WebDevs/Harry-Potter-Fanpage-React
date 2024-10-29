/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

import "../styles/main.scss";

function BookCard({ data }) {
  return (
    <>
      {data.map(
        ({
          id,
          title,
          author,
          publicationYear,
          sales,
          genre,
          isbn,
          language,
          pages,
          cover,
          shopLink,
          content,
        }) => (
          <div className="single-book-container" key={id}>
            <h2>{title}</h2>
            <div className="book-content">
              <div>
                <img src={cover} alt={title} />
                <div>
                  <p>
                    <strong>Pages:</strong> {pages}
                  </p>
                  <p>
                    <strong>Genre:</strong> {genre}
                  </p>
                  <p>
                    <strong>Language:</strong> {language}
                  </p>
                  <p>
                    <strong>Author:</strong> {author}
                  </p>
                  <p>
                    <strong>Released on:</strong> {publicationYear}
                  </p>
                  <p>
                    <strong>Sold so far:</strong> {sales} times
                  </p>
                  <p>
                    <strong>ISBN:</strong> {isbn}
                  </p>
                  <p>
                    <a href={shopLink} target="_blank">
                      Buy here
                    </a>
                  </p>
                </div>
              </div>
              <div>
                <p>About this book:</p>
                <p>{content}</p>
              </div>
              <div></div>
            </div>
          </div>
        )
      )}
    </>
  );
}

export default BookCard;
