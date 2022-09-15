import React from "react";
export function LoadMoreListings({ handleShow }) {
  return (
    <div className="row m-auto mt-3">
      <button
        onClick={() => handleShow()}
        className="btn btn-secondary m-auto w-75 btn-lg btn-block"
      >
        Load More Listings
      </button>
    </div>
  );
}
