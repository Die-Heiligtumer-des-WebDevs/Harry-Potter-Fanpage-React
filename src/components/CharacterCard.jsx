function CharacterCard({ data }) {
  return (
    <>
      <div className="students-container">
        {data.map(({ id, name, image, alternate_names }) => (
          <div key={id} className="single-student-container">
            <h3>{name}</h3>
            <img src={image} alt={name} />
            <p>
              {alternate_names && alternate_names.length > 0
                ? alternate_names[0]
                : "I've got not alternate names :("}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default CharacterCard;
