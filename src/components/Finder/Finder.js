import CSS from "./Finder.module.css";
import { BsSearch } from "react-icons/bs";

const Finder = () => {
  return (
    <>
      <nav>
        <div className="nav nav-tabs" id="nav-tab" role="tablist">
          <button
            className="nav-link tabButton active"
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
          <div className="findAJobContainer">
            <div className="row p-3 d-flex shadow-sm align-content-center">
              <div className="col-3 border-end justify-content-around">
                <label for="exampleInputEmail1" className="form-label">
                  Job
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="job title, Keywords"
                />
              </div>
              <div className="col-3 border-end justify-content-around">
                <label for="exampleInputEmail1" className="form-label">
                  Location
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="City, province or region"
                />
              </div>
              <div className="col-3">
                <p>Category</p>
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option selected>Select Industry</option>
                  <option value="1">Artificial Intelligence</option>
                  <option value="2">Commerce</option>
                  <option value="3">Education</option>
                </select>
              </div>
              <button type="button" className="col btn btn-dark">
                <BsSearch />
                <span className="ml-2">Search</span>
              </button>
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="nav-profile"
          role="tabpanel"
          aria-labelledby="nav-profile-tab"
        ></div>
      </div>
    </>
  );
};

export default Finder;
