import missedPicture from "../assets/Bilder/missedPicture.png";
import { NavLink } from "react-router-dom";

function CharacterCard({ data }) {
  const { id, name, house, alternate_names, image } = data;
  return (
    <>
      <NavLink to={`/characters/${id}`}>
        <div key={id} className="single-character-card-container">
          <figure>
            <img
              src={image ? image : missedPicture}
              alt={name}
              style={{
                width: image ? "150px" : "50px",
                height: image ? "" : "50px",
              }}
              // image ? image : require("..assets/missedPicture.png")
            />
            <figcaption>
              {alternate_names && alternate_names.length > 0
                ? '" ' + String(alternate_names[0]) + ' "'
                : ""}
            </figcaption>
          </figure>

          <div className="names">
            <h2>{name}</h2>
            <p> ~ {house} ~ </p>
          </div>
        </div>
      </NavLink>
    </>
  );
}

export default CharacterCard;
