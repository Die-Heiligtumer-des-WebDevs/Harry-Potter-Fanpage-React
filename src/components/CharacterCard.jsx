function CharacterCard({ data }) {
  return (
    <>
      <div className="students-container">
        {data.map(({ id, name, image, alternate_names }) => (
          <div key={id} className="single-student-container">
            <h3>{name}</h3>
            <img style={{ width: "100px" }} src={image} alt={name} />
            <p>{alternate_names[0]}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default CharacterCard;
