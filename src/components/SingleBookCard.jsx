import { AppContext } from "../utils/AppContext.jsx";
import { useContext } from "react";
import { useParams } from "react-router-dom";

function SingleBookCard() {
  const { id } = useParams();
  const { allBooksData } = useContext(AppContext);

  const searchId = id;
  const singleBook = allBooksData.find((book) => String(book.id) === searchId);

  return (
    <div key={id}>
      {singleBook ? (
        <>
          <h2>{singleBook.title}</h2>
          <img src={singleBook.cover} alt={singleBook.title} />
          <p>{singleBook.content}</p>
          <p>{singleBook.pages}</p>
          <p>{singleBook.language}</p>
          <div className="single-book-card-footer">
            <p>{singleBook.author}</p>
            <p>{singleBook.publicationYear} </p>
            <p>{singleBook.sales}</p>
            <a href={singleBook.shopLink} target="_blank">Buy here</a>
          </div>
        </>
      ) : (
        <p>Book not found</p>
      )}
    </div>
  );
}

export default SingleBookCard;
