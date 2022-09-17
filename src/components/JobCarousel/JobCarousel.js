import CSS from "./JobCarousel.module.css";
import { ImLocation } from "react-icons/im";
import { AiOutlineClockCircle } from "react-icons/ai";
import { useSelector } from "react-redux";
import { useCallback, useState } from "react";
import { current } from "@reduxjs/toolkit";
import moment from "moment";
import { useEffect } from "react";

const JobCarousel = () => {
  const [jobCounter, setJobCounter] = useState(0);
  const [jobNum, setJobNum] = useState(5);

  const jobState = useSelector((state) => state.jobSlice);

  const firstJobs = jobState.jobs && jobState.jobs.slice(0, jobNum);
  const currentJob = firstJobs && firstJobs[jobCounter];

  //console.log(firstJobs);

  const leftButtonClick = () => {
    const remainder = (jobCounter - 1) % jobNum;
    setJobCounter((prev) => (remainder < 0 ? remainder + jobNum : remainder));
  };

  const rightButtonClick = useCallback(() => {
    setJobCounter((prev) => (prev + 1) % jobNum);
  });

  useEffect(() => {
    const swipe = setTimeout(() => {
      rightButtonClick();
    }, 3500);

    return () => {
      clearTimeout(swipe);
    };
  }, [rightButtonClick]);

  return (
    <>
      <>
        <h3 className="p-0 mt-3">Featured Jobs</h3>
        <div className="row p-3 shadow-sm border mb-3">
          <div className="container" key={currentJob && currentJob.id}>
            <div className="row">
              {firstJobs.length > 0 ? (
                <>
                  <div className={`${CSS.imgContainer} row`}>
                    <img
                      className={`mb-3 m-auto ${CSS.bigImg}`}
                      src="https://media.istockphoto.com/photos/success-happens-when-you-combine-will-with-skill-picture-id874812746?k=20&m=874812746&s=612x612&w=0&h=GOF52jHNiVBKXV6CnQKr4H-SowcFO1_jdYAFPEb5Skg="
                      alt=""
                    />
                    <div
                      className={`${CSS.jobType} ${CSS.fadeIn} ${currentJob.jobType} fw-bold  p-1 w-fit text-uppercase text-center text-white`}
                    >
                      {currentJob.jobType}
                    </div>
                  </div>
                  <img
                    className={`${CSS.fadeIn}  mb-3`}
                    style={{ height: "auto", width: "auto", maxHeight: "40px" }}
                    src={currentJob.img}
                    alt=""
                  />
                  <h4 className={`fw-bold ${CSS.jobTitle} ${CSS.fadeIn} `}>
                    {currentJob.jobtitle}
                  </h4>
                  <div>
                    <span
                      className={`fw-bold ${CSS.companyName} ${CSS.fadeIn} `}
                    >
                      {currentJob.companyName} |
                    </span>
                    <span className={`${CSS.fadeIn} ${CSS.companySlogan} `}>
                      {" "}
                      {currentJob.slogan}
                    </span>
                  </div>

                  <p className={`${CSS.fadeIn} mt-3`}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Officiis, labore? Nisi ratione aliquam placeat perspiciatis
                    iure asperiores fugit ducimus, saepe, iste ea sint
                    reprehenderit! Iusto facilis minima nam molestias voluptas?
                  </p>

                  <div className={`${CSS.fadeIn} d-flex mb-3`}>
                    <div className="d-flex align-items-center ">
                      <ImLocation
                        style={{
                          color: "gray",
                        }}
                      />
                      <span className="ms-1">{currentJob.location}</span>
                    </div>
                    <div className="d-flex ms-3 align-items-center">
                      <AiOutlineClockCircle />
                      <span className="ms-1">
                        {moment(currentJob.createdAt).fromNow()}
                      </span>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-6 border-top pt-3">
                    <div
                      className="btn-group btn-group-toggle mb-3 w-100"
                      data-toggle="buttons"
                    >
                      <input
                        type="radio"
                        name="options"
                        id="option1"
                        autoComplete="off"
                      />{" "}
                      <label
                        className="btn btn-secondary"
                        htmlFor="option1"
                        onClick={() => leftButtonClick()}
                      >
                        &lt;
                      </label>
                      <input
                        type="radio"
                        name="options"
                        id="option2"
                        autoComplete="off"
                      />
                      <label
                        className="btn btn-secondary"
                        htmlFor="option2"
                        onClick={() => rightButtonClick()}
                      >
                        &gt;
                      </label>
                    </div>
                  </div>

                  <div className="col border-top pt-3">
                    <button
                      className="btn w-100 btn-primary"
                      style={{ backgroundColor: "#4f53d2" }}
                    >
                      APPLY FOR THIS JOB
                    </button>
                  </div>
                </>
              ) : (
                <div className="spinner-border" role="status">
                  <span className="sr-only"></span>
                </div>
              )}
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default JobCarousel;
