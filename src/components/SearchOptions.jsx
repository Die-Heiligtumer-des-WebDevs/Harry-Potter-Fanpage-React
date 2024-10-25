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
      <div className="textfilter-container">
        <input
          type="text"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          placeholder="Search by name"
        />
      </div>
      <div className="checkfilter-container">
        <Checkbox label="Hufflepuff" only={onlyHuf} setonly={setOnlyHuf} />
        <Checkbox label="Gryffindor" only={onlyGry} setonly={setOnlyGry} />
        <Checkbox label="Ravenclaw" only={onlyRav} setonly={setOnlyRav} />
        <Checkbox label="Slytherin" only={onlySly} setonly={setOnlySly} />
        <Checkbox
          label="Teachers"
          only={onlyTeachers}
          setonly={setOnlyTeachers}
        />
        <Checkbox
          label="Students"
          only={onlyStudents}
          setonly={setOnlyStudents}
        />
      </div>
    </>
  );
}

export default SearchOptions;
