import JobCard from "../JobCard/JobCard";
import CSS from "./JobResults.module.css";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import moment from "moment";
import { increaseJobs } from "../../store/jobSlice";

const JobResults = ({
  isLoading,
  jobs,
  isError,
  numberOfJobsToShow,
  dispatch,
}) => {
  const jobComponents = jobs.slice(0, numberOfJobsToShow).map((j) => {
    return (
      <JobCard
        key={j.id}
        img={`https://picsum.photos/id/${j.id}/200/300`}
        jobTitle={j.jobtitle}
        companyName={j.companyName}
        companySlogan="THINK"
        location={j.location}
        time={moment(j.createdAt).fromNow()}
        jobType={
          ["Temporary", "Fulltime", "Internship", "Parttime", "Freelance"][
            Math.floor(Math.random() * 5)
          ]
        }
      />
    );
  });

  return (
    <>
      <div className="row justify-content-between">
        <div className="col-6">
          <span>
            We have <span className={CSS.jobCount}>{jobs.length}</span> jobs for
            you
          </span>
        </div>

        <div className="col-6">
          <div className={`${CSS.sortFilter}`}>
            <span className="mr-2">Sort by: </span>
            <select className="form-select w-25">
              <option selected value="Newest">
                Newest
              </option>
            </select>
          </div>
        </div>
      </div>

      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="All-Jobs-Tab"
            data-bs-toggle="tab"
            data-bs-target="#All-Jobs"
            type="button"
            role="tab"
            aria-controls="home"
            aria-selected="true"
          >
            All Jobs
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="Full-Time-Tab"
            data-bs-toggle="tab"
            data-bs-target="#fulltime"
            type="button"
            role="tab"
            aria-controls="profile"
            aria-selected="false"
          >
            Full Time
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="Temporary-Tab"
            data-bs-toggle="tab"
            data-bs-target="#temporary"
            type="button"
            role="tab"
            aria-controls="contact"
            aria-selected="false"
          >
            Temporary
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="Internship-Tab"
            data-bs-toggle="tab"
            data-bs-target="#intern"
            type="button"
            role="tab"
            aria-controls="contact"
            aria-selected="false"
          >
            Internship
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="Part-Time-Tab"
            data-bs-toggle="tab"
            data-bs-target="#part-time"
            type="button"
            role="tab"
            aria-controls="contact"
            aria-selected="false"
          >
            Part Time
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="Freelance-Tab"
            data-bs-toggle="tab"
            data-bs-target="#freelance"
            type="button"
            role="tab"
            aria-controls="contact"
            aria-selected="false"
          >
            Freelance
          </button>
        </li>
      </ul>
      <div className="tab-content" id="myTabContent">
        <div
          className={`mb-3 tab-pane fade show active`}
          id="All-Jobs"
          role="tabpanel"
          aria-labelledby="All-Jobs-Tab"
        >
          {isLoading ? (
            <Spinner
              animation="border"
              className="mt-3 ms-3"
              role="status"
            ></Spinner>
          ) : (
            <div className={`${CSS.jobCards} container-fluid-lg`}>
              {jobComponents}
            </div>
          )}
          {jobComponents.length < jobs.length && (
            <div className="row m-auto mt-3">
              <button
                onClick={() => dispatch(increaseJobs(12))}
                className="btn btn-secondary m-auto w-75 btn-lg btn-block"
              >
                Load More Listings
              </button>
            </div>
          )}
        </div>
        <div
          className="tab-pane fade"
          id="fulltime"
          role="tabpanel"
          aria-labelledby="Full-Time-Tab"
        >
          <div className={`${CSS.jobCards} container-fluid-lg`}>
            {jobComponents.filter((j) => j.props.jobType === "Fulltime")}
          </div>

          {jobComponents.length < jobs.length && (
            <div className="row m-auto mt-3">
              <button
                onClick={() => dispatch(increaseJobs(12))}
                className="btn btn-secondary m-auto w-75 btn-lg btn-block"
              >
                Load More Listings
              </button>
            </div>
          )}
        </div>
        <div
          className="tab-pane fade"
          id="temporary"
          role="tabpanel"
          aria-labelledby="Temporary-Tab"
        >
          <div className={`${CSS.jobCards} container-fluid-lg`}>
            {jobComponents.filter((j) => j.props.jobType === "Temporary")}
          </div>

          {jobComponents.length < jobs.length && (
            <div className="row m-auto mt-3">
              <button
                onClick={() => dispatch(increaseJobs(12))}
                className="btn btn-secondary m-auto w-75 btn-lg btn-block"
              >
                Load More Listings
              </button>
            </div>
          )}
        </div>
        <div
          className="tab-pane fade"
          id="intern"
          role="tabpanel"
          aria-labelledby="Internship-Tab"
        >
          <div className={`${CSS.jobCards} container-fluid-lg`}>
            {jobComponents.filter((j) => j.props.jobType === "Internship")}
          </div>

          {jobComponents.length < jobs.length && (
            <div className="row m-auto mt-3">
              <button
                onClick={() => dispatch(increaseJobs(12))}
                className="btn btn-secondary m-auto w-75 btn-lg btn-block"
              >
                Load More Listings
              </button>
            </div>
          )}
        </div>
        <div
          className="tab-pane fade"
          id="part-time"
          role="tabpanel"
          aria-labelledby="Part-Time-Tab"
        >
          <div className={`${CSS.jobCards} container-fluid-lg`}>
            {jobComponents.filter((j) => j.props.jobType === "Parttime")}
          </div>

          {jobComponents.length < jobs.length && (
            <div className="row m-auto mt-3">
              <button
                onClick={() => dispatch(increaseJobs(12))}
                className="btn btn-secondary m-auto w-75 btn-lg btn-block"
              >
                Load More Listings
              </button>
            </div>
          )}
        </div>
        <div
          className="tab-pane fade"
          id="freelance"
          role="tabpanel"
          aria-labelledby="Freelance-Tab"
        >
          <div className={`${CSS.jobCards} container-fluid-lg`}>
            {jobComponents.filter((j) => j.props.jobType === "Freelance")}
          </div>

          {jobComponents.length < jobs.length && (
            <div className="row m-auto mt-3">
              <button
                onClick={() => dispatch(increaseJobs(12))}
                className="btn btn-secondary m-auto w-75 btn-lg btn-block"
              >
                Load More Listings
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default JobResults;
