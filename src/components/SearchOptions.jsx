import "../styles/main.scss";

function SearchOptions({
  filter,
  setFilter,
  onlyTeachers,
  setOnlyTeachers,
  onlyStudents,
  setOnlyStudents,
  onlyHuf,
  setOnlyHuf,
  onlyGry,
  setOnlyGry,
  onlyRav,
  setOnlyRav,
  onlySly,
  setOnlySly,
}) {
  function Checkbox({ label, only, setonly }) {
    return (
      <>
        <div className="single-checkfilter-container">
          <label htmlFor="checkbox">
            {label} family
            <input
              type="checkbox"
              checked={only}
              onChange={(e) => setonly(e.target.checked)}
            />
          </label>
        </div>
      </>
    );
  }
  return (
    <>
      {/* <Input variant="standard" color="indigo" label="Search by name" placeholder="Search by"/> */}
      <div className="textfilter-container">
        <Checkbox
          label="Teachers"
          only={onlyTeachers}
          setonly={setOnlyTeachers}
        />
        <input
          type="text"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          placeholder="Search by name"
        />
        <Checkbox
          label="Students"
          only={onlyStudents}
          setonly={setOnlyStudents}
        />
      </div>
      <div className="checkfilter-container">
        <Checkbox label="Hufflepuff" only={onlyHuf} setonly={setOnlyHuf} />
        <Checkbox label="Gryffindor" only={onlyGry} setonly={setOnlyGry} />
        <Checkbox label="Ravenclaw" only={onlyRav} setonly={setOnlyRav} />
        <Checkbox label="Slytherin" only={onlySly} setonly={setOnlySly} />
      </div>
    </>
  );
}

export default SearchOptions;
