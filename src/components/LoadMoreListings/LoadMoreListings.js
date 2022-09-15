import React from "react";
export function LoadMoreListings({ handleShow }) {
  return (
    <div className="row m-auto mt-3">
      <button
        onClick={() => handleShow()}
        className={`fw-bold btn btn-secondary  border border-none m-auto w-75 btn-lg btn-block`}
        style={{
          backgroundColor: "#f1f2f4",
          color: "#1e1f21",
        }}
      >
        Load More Listings
      </button>
    </div>
  );
}
