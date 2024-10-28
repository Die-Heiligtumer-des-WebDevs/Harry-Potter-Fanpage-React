import { useContext } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../utils/AppContext.jsx";

import missedPicture from "../assets/missedPicture.png";

function SingleCharacterCard({ data }) {
//   const { id } = useParams();
//   const { allCharactersData } = useContext(AppContext);

//   const singleCharacterData = allCharactersData.find((char) => char.id === id);
  return (
    <>
    <h1 style={{margin:"100px"}}>help</h1>
      <div className="characters-container">
        {/* {singleCharacterData.map(({ id, name, house, alternate_names, image }) => (
          <div key={id} className="single-character-container">
            <h3>{name}</h3>
            <img
              src={image ? image : missedPicture}
              style={{
                width: image ? "150px" : "50px",
                height: image ? "" : "50px",
              }}
              // image ? image : require("..assets/missedPicture.png")
              alt={name}
            />
            <p>
              {alternate_names && alternate_names.length > 0
                ? alternate_names[0]
                : "I've got not alternate names :("}
            </p>
            <p>{house}</p>
          </div>
        ))} */}
      </div>
    </>
  );
}

export default SingleCharacterCard;
