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
}) {
  return (
    <div
      className={`${CSS.cardContainer} row p-2 pd-5 border-bottom border-end w-100`}
    >
      <div className="col-4 w-30 ">
        <div className={CSS.companyInfo}>
          <img className={CSS.companyLogo} src={img} alt="" />
          <div className={CSS.companyDetails}>
            <h5 className={CSS.jobTitle}>{jobTitle}</h5>
            <span className={CSS.companyName}>{companyName}</span>
            <span className={CSS.companySlogan}>{companySlogan}</span>
          </div>
        </div>
      </div>
      <div className="col-2 d-flex align-items-center">
        <ImLocation
          style={{
            color: "gray",
          }}
        />
        <span>{location}</span>
      </div>
      <div className="col-2  d-flex align-items-center">
        <AiOutlineClockCircle />
        <span>{time}</span>
      </div>
      <div className="col d-flex align-items-center justify-content-evenly">
        <div
          className={`${CSS.jobType} ${jobType} d-inline-block p-1 w-fit text-uppercase text-white`}
        >
          {jobType}
        </div>
        <BsThreeDots />
      </div>
    </div>
  );
}
export default JobCard;
