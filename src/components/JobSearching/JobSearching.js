import CSS from "./JobSearching.module.css";
import JobResults from "../JobResults/JobResults";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getJobs } from "../../store/jobSlice";

const JobSearching = () => {
  const dispatch = useDispatch();

  useEffect(
    (_) => {
      dispatch(getJobs());
    },
    [dispatch]
  );

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-8">
          <JobResults />
        </div>
        <div className="col-4"></div>
      </div>
    </div>
  );
};

export default JobSearching;
