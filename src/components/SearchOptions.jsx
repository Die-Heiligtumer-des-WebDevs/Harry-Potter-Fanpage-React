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
      <input
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Filter by house"
      />
      <label htmlFor="checkbox">Only show teachers</label>
      <input
        type="checkbox"
        checked={onlyTeachers}
        onChange={(e) => setOnlyTeachers(e.target.checked)}
      />
       <label htmlFor="checkbox">Only show students</label>
      <input
        type="checkbox"
        checked={onlyStudents}
        onChange={(e) => setOnlyStudents(e.target.checked)}
      /> 
    </>
  );
}

export default SearchOptions;
