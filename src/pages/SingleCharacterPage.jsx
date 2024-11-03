import { useContext } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../utils/AppContext.jsx";

import missedPicture from "../assets/Bilder/missedPicture.png";

function SingleCharacterCard({ data }) {
  const { id } = useParams();
  const { allCharactersData } = useContext(AppContext);
  const searchId = id;
  const singleCharacterData = allCharactersData.find(
    (char) => char.id === searchId
  );
  const { name, house, alternate_names, image } = singleCharacterData;
  return (
    <>
      <div className="single-character-container">
        <div key={id} className="single-character-container">
          <h3>{name}</h3>
          <img
            src={image ? image : missedPicture}
            style={{
              width: image ? "150px" : "50px",
              height: image ? "auto" : "50px",
            }}
            alt={name}
          />
          <p>
            {alternate_names && alternate_names.length > 0
              ? alternate_names[0]
              : "I've got no alternate names :("}
          </p>
          <p>{house || "House information not available"}</p>
       
        </div>
      </div>
    </>
  );
}
export default SingleCharacterCard;
