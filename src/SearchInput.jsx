import { memo } from "react";
const SearchInput = memo(({ search, handleSearch }) => {
  return (
    <div>
      <input type="text" value={search} onChange={handleSearch} />
    </div>
  );
});
export default SearchInput;
