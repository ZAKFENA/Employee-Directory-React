import React from "react";
import "../styles/Search.css";

function SearchBox({handleSearch}) {
  return (
   
          <form className="form-inline">
            <input
              className="form-control"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={(e) => handleSearch(e)}
            />
          </form>
        
  );
}
export default SearchBox;
