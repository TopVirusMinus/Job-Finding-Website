import { LoadMoreListings } from "../LoadMoreListings/LoadMoreListings";
import JobCard from "../JobCard/JobCard";
import CSS from "./JobResults.module.css";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import moment from "moment";
import { increaseJobs, setCurrentJobs } from "../../store/jobSlice";
import { setState } from "../../store/searchQuerySlice";
import { useSelector } from "react-redux";
import JobToggleFilter from "../JobToggleFilter/JobToggleFilter";
import { useDispatch } from "react-redux";

const JobResults = () => {
  // SEPARATE DIFFERENT TABS TO DIFFERENT COMPONENETS
  //  WITH DIFFERENT PROPS TO KNOW HOW MANY ITEMS IT HAS
  const jobState = useSelector((state) => state.jobSlice);
  const dispatch = useDispatch();

  const searchQueryState = useSelector((state) => state.searchQuerySlice);

  let jobsComponentArray =
    jobState.jobs && (searchQueryState.job || searchQueryState.location)
      ? jobState.jobs
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
            //`https://picsum.photos/id/${j.id}/200/300`
            return (
              <JobCard
                key={j.id}
                img={j.img}
                jobTitle={j.jobtitle}
                companyName={j.companyName}
                companySlogan="THINK"
                location={j.location}
                time={moment(j.createdAt).fromNow()}
                jobType={j.jobType}
                slogan={j.slogan}
              />
            );
          })
      : jobState.jobs.slice(0, jobState.numberOfJobsToShow).map((j) => {
          return (
            <JobCard
              key={j.id}
              img={j.img}
              jobTitle={j.jobtitle}
              companyName={j.companyName}
              companySlogan="THINK"
              location={j.location}
              time={moment(j.createdAt).fromNow()}
              jobType={j.jobType}
              slogan={j.slogan}
            />
          );
        });

  return (
    <>
      <div className="row justify-content-between">
        <div className="col-6">
          <span>
            We have{" "}
            <span className={CSS.jobCount}>{jobsComponentArray.length}</span>{" "}
            jobs for you
          </span>
        </div>

        <div className="col-6">
          <div className={`${CSS.sortFilter}`}>
            <span className="mr-2">Sort by: </span>
            <select className="form-select w-25">
              <option value="Newest">Newest</option>
            </select>
          </div>
        </div>
      </div>

      <ul className="nav nav-tabs fw-bold" id="myTab" role="tablist">
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
        <JobToggleFilter
          jobsComponentArray={jobsComponentArray}
          filterBy={true}
          id="All-Jobs"
          ariaLabelledby="All-Jobs-Tab"
          active={"active"}
        />
        <JobToggleFilter
          jobsComponentArray={jobsComponentArray}
          filterBy="Fulltime"
          id="fulltime"
          ariaLabelledby="Full-Time-Tab"
        />
        <JobToggleFilter
          jobsComponentArray={jobsComponentArray}
          filterBy="Temporary"
          id="temporary"
          ariaLabelledby="Temporary-Tab"
        />
        <JobToggleFilter
          jobsComponentArray={jobsComponentArray}
          filterBy="Internship"
          id="intern"
          ariaLabelledby="Internship-Tab"
        />
        <JobToggleFilter
          jobsComponentArray={jobsComponentArray}
          filterBy="Parttime"
          id="part-time"
          ariaLabelledby="Part-Time-Tab"
        />
        <JobToggleFilter
          jobsComponentArray={jobsComponentArray}
          filterBy="Freelance"
          id="freelance"
          ariaLabelledby="Freelance-Tab"
        />
      </div>
    </>
  );
};

export default JobResults;
