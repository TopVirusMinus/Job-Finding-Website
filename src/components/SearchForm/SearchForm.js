import { SearchButton } from "../SearchButton/SearchButton";
import { InputComponent } from "../InputComponent/InputComponent";
import { CategorySelect } from "../CategorySelect/CategorySelect";
import React from "react";
import CSS from "./SearchForm.module.css";

export const SearchForm = ({ handleSearch, setJobQuery, setLocationQuery }) => {
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
              className={`nav-link ${CSS.tabBtn} tabButton active fw-bold`}
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
              className="nav-link fw-bold"
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
                  <InputComponent
                    label={"Job"}
                    handleChange={setJobQuery}
                    type="text"
                    id={"jobInput"}
                    placeholder={"job title, Keywords"}
                  />
                </div>
                <div className="col-lg-3 mt-lg-0 mt-2 border-end">
                  <InputComponent
                    label={"Location"}
                    handleChange={setLocationQuery}
                    type="text"
                    id={"locationInput"}
                    placeholder={"City, province or region"}
                  />
                </div>
                <div className="col-lg-3 mt-lg-0 mt-2">
                  <CategorySelect />
                </div>
                <div className="col">
                  <SearchButton handleSearch={handleSearch} />
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
            <div className="alert alert-info" role="alert">
              This section is still under development
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
