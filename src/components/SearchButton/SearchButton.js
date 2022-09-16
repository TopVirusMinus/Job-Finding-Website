import React from "react";
import { BsSearch } from "react-icons/bs";

export function SearchButton({ e, handleSearch }) {
  return (
    <button
      onClick={(e) => handleSearch(e)}
      type="button"
      className={`btn ${CSS.searchButton} w-100 h-100 btn-dark`}
    >
      <BsSearch />
      <span className="fw-bold ms-2 ml-2">Search</span>
    </button>
  );
}
