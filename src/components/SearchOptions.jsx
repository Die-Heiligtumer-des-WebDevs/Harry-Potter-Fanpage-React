function SearchOptions({
  filter,
  setFilter,
  onlyTeachers,
  setOnlyTeachers,
  onlyStudents,
  setOnlyStudents,
}) {
  return (
    <>
      <div className="checkfilter-container">
        <input
          type="checkbox"
          checked={onlyTeachers}
          onChange={(e) => setOnlyTeachers(e.target.checked)}
        />
        <label htmlFor="checkbox">Only show teachers</label>
        <input
          type="checkbox"
          checked={onlyStudents}
          onChange={(e) => setOnlyStudents(e.target.checked)}
        />
        <label htmlFor="checkbox">Only show students</label>
      </div>
      <div className="textfilter-container">
      </div>
      <input
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Filter by house"
      />
    </>
  );
}

export default SearchOptions;
