import CSS from "./JobSearching.module.css";
import JobResults from "../JobResults/JobResults";

const JobSearching = () => {
  return (
    <div className="row mt-5">
      <div className="col-8">
        <JobResults />
      </div>
    </div>
  );
};

export default JobSearching;
