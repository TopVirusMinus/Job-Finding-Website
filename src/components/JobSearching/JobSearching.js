import JobResults from "../JobResults/JobResults";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getJobs } from "../../store/jobSlice";
import SidebarSearch from "../SidebarSearch/SidebarSearch";

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
      <div className="row mt-5 gx-5">
        <div className="col-8">
          <JobResults />
        </div>
        <div className="col-4 shadow-sm">
          <SidebarSearch />
        </div>
      </div>
    </div>
  );
};

export default JobSearching;
