import React from "react";
import CSS from "./SearchForm.module.css";
import { BsSearch } from "react-icons/bs";

export function SearchForm({
  jobQuery,
  locationQuery,
  categoryQuery,
  handleSearch,
}) {
  return (
    <>
      <div className="container">
        <nav>
          <div
            className="nav nav-tabs position-relative start"
            id="nav-tab"
            role="tablist"
          >
            <button
              className={`nav-link ${CSS.tabBtn} tabButton active`}
              id="nav-home-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-home"
              type="button"
              role="tab"
              aria-controls="nav-home"
              aria-selected="true"
            >
              Find A Job
            </button>
            <button
              className="nav-link"
              id="nav-profile-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-profile"
              type="button"
              role="tab"
              aria-controls="nav-profile"
              aria-selected="false"
            >
              Find Resume
            </button>
          </div>
        </nav>
        <div className="tab-content" id="nav-tabContent">
          <div
            className="tab-pane fade show active"
            id="nav-home"
            role="tabpanel"
            aria-labelledby="nav-home-tab"
          >
            <div className={`row ${CSS.jobTabContainer}`}>
              <div className="row p-3 d-flex shadow-sm justify-content-around align-content-center">
                <div className="col-lg-3 border-end ">
                  <label htmlFor="jobInput" className="form-label">
                    Job
                  </label>
                  <input
                    ref={jobQuery}
                    type="email"
                    className="form-control"
                    id="jobInput"
                    aria-describedby="emailHelp"
                    placeholder="job title, Keywords"
                  />
                </div>
                <div className="col-lg-3 mt-lg-0 mt-2 border-end">
                  <label htmlFor="locationInput" className="form-label">
                    Location
                  </label>
                  <input
                    ref={locationQuery}
                    type="email"
                    className="form-control"
                    id="locationInput"
                    aria-describedby="emailHelp"
                    placeholder="City, province or region"
                  />
                </div>
                <div className="col-lg-3 mt-lg-0 mt-2">
                  <label htmlFor="selectCategory" className="form-label">
                    Category
                  </label>
                  <select
                    ref={categoryQuery}
                    className="form-select"
                    aria-label="Default select example"
                    id="selectCategory"
                  >
                    <option value="Select Industry" selected>
                      Select Industry
                    </option>
                    <option value="1">Artificial Intelligence</option>
                    <option value="2">Commerce</option>
                    <option value="3">Education</option>
                  </select>
                </div>
                <div className="col">
                  <button
                    onClick={(e) => handleSearch(e)}
                    type="button"
                    className={`btn ${CSS.searchButton} col-12 h-100 btn-dark`}
                  >
                    <BsSearch />
                    <span className="ml-2">Search</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="nav-profile"
            role="tabpanel"
            aria-labelledby="nav-profile-tab"
          >
            <div class="alert alert-info" role="alert">
              This section is still under development
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
