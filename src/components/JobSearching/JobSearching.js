import CSS from "./JobSearching.module.css";
import JobResults from "../JobResults/JobResults";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getJobs } from "../../store/jobSlice";

const JobSearching = () => {
  const dispatch = useDispatch();
  const jobState = useSelector((state) => state.jobSlice);

  useEffect(
    (_) => {
      dispatch(getJobs());
    },
    [dispatch]
  );

  return (
    <div className="row mt-5">
      <div className="col-8">
        <JobResults
          isLoading={jobState.isLoading}
          isError={jobState.isError}
          jobs={jobState.jobs}
        />
      </div>
      <div className="col-4"></div>
    </div>
  );
};

export default JobSearching;
