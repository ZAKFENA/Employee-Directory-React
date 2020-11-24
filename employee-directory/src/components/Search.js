import React from "react";
import "../styles/Search.css";

function SearchBox() {
  return (
    <div className="searchbox">
      <form className="form-inline">
        <input
          className="form-control"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
      </form>
    </div>
  );
}
export default SearchBox;