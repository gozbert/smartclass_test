import React from "react";

const Search = ({ setSearchKeyword }) => {
  return (
    <div className="header-container">
      <ul>
        <input type="text" placeholder="Search" onChange={(e) => setSearchKeyword(e.target.value)} />
      </ul>
    </div>
  );
};

export default Search;
