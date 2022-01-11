import React from "react";

function Searchbar({ setQuery }) {
  return (
    <div>
      <input
        className="searchBar"
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search for a hiking trip"
      />
    </div>
  );
}

export default Searchbar;
