import React from "react";

const Search = ({ searchText, setSearchText }) => {
  return (
    <div className="search">
      <div className="search-box">
        <img src="./search.svg" alt="Search" />
        <input
          type="text"
          placeholder="Search for an anime"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Search;
