import React from "react";
import { ImLocation } from "react-icons/im";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import CSS from "./JobCard.module.css";

function JobCard({
  jobTitle,
  companyName,
  companySlogan,
  location,
  time,
  jobType,
  img,
  slogan,
}) {
  return (
    <div
      className={`${CSS.cardContainer} container-fluid p-2 border-bottom d-flex align-items-center justify-content-center border-end `}
    >
      <div className="row d-flex justify-content-lg-center align-items-center">
        <img className={` ${CSS.companyLogo}`} src={img} alt="company-logo" />
        <div className="col-lg-3 col-sm-12 w-30 mb-3 ">
          <div className="">
            <div className={CSS.companyDetails}>
              <h6 className={`fw-bold ${CSS.jobTitle}`}>{jobTitle}</h6>
              <span className={CSS.companyName}>{companyName}</span>
              <span className={CSS.companySlogan}>{slogan}</span>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-12 d-flex align-items-center">
          <ImLocation
            style={{
              color: "gray",
            }}
          />
          <span className="ms-1">{location}</span>
        </div>
        <div className="col-lg-2  col-sm-12 d-flex align-items-center">
          <AiOutlineClockCircle />
          <span className="ms-1">{time}</span>
        </div>
        <div className="col-lg d-flex align-items-center justify-content-lg-evenly">
          <div
            className={`${CSS.jobType} ${jobType} fw-bold d-inline-block p-1 w-fit text-uppercase text-center text-white`}
          >
            {jobType}
          </div>
          <BsThreeDots />
        </div>
      </div>
    </div>
  );
}
export default JobCard;
