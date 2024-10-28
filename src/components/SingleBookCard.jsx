import { AppContext } from "../utils/AppContext.jsx";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import BookCard from "./BookCard.jsx";

function SingleBookCard() {
  const { id } = useParams();
  const { allBooksData } = useContext(AppContext);

  const searchId = id;
  const singleBookData = allBooksData.find(
    (book) => String(book.id) === searchId
  );

  return (
    <div key={id}>
      {singleBookData ? (
        <>
          <BookCard key={singleBookData.id} data={[singleBookData]} />
        </>
      ) : (
        <p>Book not found</p>
      )}
    </div>
  );
}

export default SingleBookCard;
