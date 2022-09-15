import Spinner from "react-bootstrap/Spinner";
import { useSelector } from "react-redux";
import { LoadMoreListings } from "../LoadMoreListings/LoadMoreListings";
import { useState } from "react";

const JobToggleFilter = ({
  jobsComponentArray,
  filterBy,
  id,
  ariaLabelledby,
  active = "",
}) => {
  const jobState = useSelector((state) => state.jobSlice);
  const [showJobsCount, setShowJobsCount] = useState(4);

  const filteredJobs = jobsComponentArray.filter((job) =>
    filterBy === true ? filterBy : job.props.jobType === filterBy
  );

  console.log(filteredJobs.length);

  const showJobsPart = filteredJobs.slice(0, showJobsCount);

  const handleShow = () => {
    setShowJobsCount((prev) => prev + 7);
  };

  return (
    <div
      className={`mb-3 tab-pane fade show ${active}`}
      id={id}
      role="tabpanel"
      aria-labelledby={ariaLabelledby}
    >
      {jobState.isError && (
        <div class="alert alert-danger" role="alert">
          An error has occurred while fetching jobs!
        </div>
      )}
      {jobState.isLoading ? (
        <Spinner
          animation="border"
          className="mt-3 ms-3"
          role="status"
        ></Spinner>
      ) : (
        <div className={`${CSS.jobCards} container-fluid-lg`}>
          {filteredJobs.length ? (
            showJobsPart
          ) : (
            <div class="alert alert-light" role="alert">
              No jobs Found
            </div>
          )}
        </div>
      )}
      {showJobsPart.length < filteredJobs.length && filteredJobs.length > 0 && (
        <LoadMoreListings handleShow={handleShow} />
      )}
    </div>
  );
};

export default JobToggleFilter;
