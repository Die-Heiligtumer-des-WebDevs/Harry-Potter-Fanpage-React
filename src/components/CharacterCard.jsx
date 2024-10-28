import missedPicture from "../assets/missedPicture.png";
import { NavLink } from "react-router-dom";

function CharacterCard({ data }) {
  const { id, name, house, alternate_names, image } = data
  return (
    <>
      <NavLink to={`/characters/${id}`}>
        <div className="characters-container">
            <div key={id} className="single-character-container">
              <h3>{name}</h3>
              <img
                src={image || missedPicture}
                alt={name}
                style={{
                  width: image ? "150px" : "50px",
                  height: image ? "" : "50px",
                }}
                // image ? image : require("..assets/missedPicture.png")
              />
              <p>
                {alternate_names && alternate_names.length > 0
                  ? alternate_names[0]
                  : "I've got not alternate names :("}
              </p>
              <p>{house}</p>
            </div>
          ))}
        </div>
      </NavLink>
    </>
  );
}

export default CharacterCard;
