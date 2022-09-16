import React from "react";
import CSS from "./LoadMoreListings.module.css";

export function LoadMoreListings({ handleShow }) {
  return (
    <div className={`${CSS.container} row m-auto pe-3 border-end border-bottom`}>
      <button
        onClick={() => handleShow()}
        className={`fw-bold btn btn-secondary w-100 border border-none m-auto w-75 btn-lg btn-block`}
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
