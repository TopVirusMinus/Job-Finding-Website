import React from "react";
export function CategorySelect({ className }) {
  return (
    <div className={className}>
      <label htmlFor="selectCategory" className="form-label fw-bold">
        Category
      </label>
      <select
        className="form-select"
        aria-label="Default select example"
        id="selectCategory"
      >
        <option value="Select Industry">Select Industry</option>
        <option value="1">Artificial Intelligence</option>
        <option value="2">Commerce</option>
        <option value="3">Education</option>
      </select>
    </div>
  );
}
