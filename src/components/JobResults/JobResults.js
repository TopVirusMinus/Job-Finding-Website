import JobCard from "../JobCard/JobCard";
import CSS from "./JobResults.module.css";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import moment from "moment";
import { increaseJobs } from "../../store/jobSlice";
import { setState } from "../../store/searchQuerySlice";
import { useSelector } from "react-redux";

const JobResults = ({
  isLoading,
  jobs,
  isError,
  numberOfJobsToShow,
  dispatch,
}) => {
  //MAKE IMAGES, JOBTYPE AFFECT THE API NOT ON LOAD
  const searchQueryState = useSelector((state) => state.searchQuerySlice);
  const images = [
    "https://cdn.bolnews.com/wp-content/uploads/2021/11/Coca-Cola.png",
    "https://seeklogo.com/images/M/mcdonald-s-logo-255A7B5646-seeklogo.com.png",
    "https://blog.hubspot.com/hubfs/image8-2.jpg",
    "data:image/png;base64,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",
    "data:image/png;base64,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",
    "data:image/png;base64,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",
    "https://play-lh.googleusercontent.com/k_5q6JeKBQyIke-kw7ydvYHvPh_XwCT3rBDrq4f0_on7pITQfi9yy7ad9k8QbVRJYis",
    "https://pbs.twimg.com/profile_images/1454912483248930822/_hO4WPRC_400x400.png",
    "https://avatars.githubusercontent.com/u/10639145?s=280&v=4",
    "data:image/png;base64,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",
    "http://store-images.s-microsoft.com/image/apps.20966.13599037783181022.b05b7adf-6b7a-44ae-9a70-9dc9370ea7e6.4cd88c60-6ff1-4b0f-aed6-8e2efa5629c1",
  ];

  let jobComponents =
    jobs && (searchQueryState.job || searchQueryState.location)
      ? jobs
          .filter((j) => {
            if (!searchQueryState.job && !searchQueryState.location) {
              return true;
            }
            if (searchQueryState.job && searchQueryState.location) {
              return (
                j.jobtitle
                  .toLowerCase()
                  .includes(searchQueryState.job.toLowerCase()) &&
                j.location
                  .toLowerCase()
                  .includes(searchQueryState.location.toLowerCase())
              );
            } else if (searchQueryState.job.toLowerCase()) {
              return j.jobtitle
                .toLowerCase()
                .includes(searchQueryState.job.toLowerCase());
            } else if (searchQueryState.location.toLowerCase()) {
              return j.location
                .toLowerCase()
                .includes(searchQueryState.location.toLowerCase());
            }
            return false;
          })
          .map((j) => {
            console.log(j.jobtitle);

            return (
              <JobCard
                key={j.id}
                img={`${images[Math.floor(Math.random() * 5)]}`}
                jobTitle={j.jobtitle}
                companyName={j.companyName}
                companySlogan="THINK"
                location={j.location}
                time={moment(j.createdAt).fromNow()}
                jobType={
                  [
                    "Temporary",
                    "Fulltime",
                    "Internship",
                    "Parttime",
                    "Freelance",
                  ][Math.floor(Math.random() * images.length)]
                }
              />
            );
          })
      : jobs.slice(0, numberOfJobsToShow).map((j) => {
          return (
            <JobCard
              key={j.id}
              img={`${images[Math.floor(Math.random() * images.length)]}`}
              jobTitle={j.jobtitle}
              companyName={j.companyName}
              companySlogan="THINK"
              location={j.location}
              time={moment(j.createdAt).fromNow()}
              jobType={
                [
                  "Temporary",
                  "Fulltime",
                  "Internship",
                  "Parttime",
                  "Freelance",
                ][Math.floor(Math.random() * 5)]
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
          {isError && (
            <div class="alert alert-danger" role="alert">
              An error has occurred while fetching jobs!
            </div>
          )}
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
            {jobComponents.filter((j) => {
              return j.props.jobType === "Fulltime";
            })}
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
            {console.log(jobComponents)}
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
