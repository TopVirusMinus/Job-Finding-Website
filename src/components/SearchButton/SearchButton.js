import React from "react";
import { BsSearch } from "react-icons/bs";

export function SearchButton({ e, handleSearch, className = "" }) {
  return (
    <button
      onClick={(e) => handleSearch(e)}
      type="button"
      className={`btn text-uppercase ${CSS.searchButton} ${className} w-100 h-100 btn-dark`}
    >
      <BsSearch />
      <span className="fw-bold ms-2 ml-2">Search</span>
    </button>
  );
}
