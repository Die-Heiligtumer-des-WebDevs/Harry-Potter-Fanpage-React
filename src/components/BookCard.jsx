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
            <div className="book-content">
              <h2>{title}</h2>
              <img src={cover} alt={title} />
              <p>{content}</p>
              <p>{pages}</p>
              <p>{genre}</p>
              <p>{language}</p>
              <div className="single-book-card-footer">
                <p>{author}</p>
                <p>{publicationYear} </p>
                <p>{sales}</p>
                <p>{isbn}</p>
                <a href={shopLink} target="_blank">
                  Buy here
                </a>
              </div>
            </div>
          </div>
        )
      )}
    </>
  );
}

export default BookCard;
