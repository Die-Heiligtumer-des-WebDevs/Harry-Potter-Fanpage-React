import { useContext } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../utils/AppContext.jsx";

import missedPicture from "../assets/Bilder/missedPicture.png";

function SingleCharacterCard() {
  const { id } = useParams();
  const { allCharactersData } = useContext(AppContext);
  const searchId = id;

  // Ensure we find the character data
  const singleCharacterData = allCharactersData.find(
    (char) => char.id === searchId
  );

  // Check if singleCharacterData is defined
  if (!singleCharacterData) {
    return <p>Character not found</p>;
  }

  const {
    name,
    alternate_names,
    image,
    species,
    gender,
    house,
    dateOfBirth,
    ancestry,
    eyeColour,
    hairColour,
    wand,
    patronus,
    actor,
    alternate_actors,
  } = singleCharacterData;

  return (
    <div className="single-character-container" key={id}>
      <div className="single-character-content">
        <h1>{name}</h1>
        <img
          src={image ? image : missedPicture}
          style={{
            width: image ? "150px" : "50px",
            height: image ? "auto" : "50px",
          }}
          alt={name}
        />
        <p>
          Alternate Names:
          {alternate_names && alternate_names.length > 0 ? (
            <ul>
              {alternate_names.map((altName, index) => (
                <li key={index}>{altName}</li>
              ))}
            </ul>
          ) : (
            "I've got no alternate names :("
          )}
        </p>
        <p>~{house || "House information not available"}~</p>
        <p>Date of Birth: {dateOfBirth}</p>
        <p>Species: {species}</p>
        <p>Gender: {gender}</p>
        <p>Eye Color: {eyeColour}</p>
        <p>Hair Color: {hairColour}</p>
        <p>Ancestry: {ancestry}</p>
        {/* <p>
          Wand:
          {wand && wand.length > 0 ? (
            <ul>
              {wand.map((wandItem, index) => (
                <li key={index}>{wandItem}</li>
              ))}
            </ul>
          ) : (
            "Got no wand"
          )}
        </p> */}
        <p>Patronus: {patronus}</p>
        <p>Actor: {actor}</p>
        {alternate_actors === "" ? <p>Alternate Actor: {alternate_actors}</p> : ""}
      </div>
    </div>
  );
}

export default SingleCharacterCard;
