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
    <div className={`${CSS.cardContainer} row p-2 border-bottom border-end `}>
      <img className={CSS.companyLogo} src={img} alt="" />
      <div className="col-3 w-30 mb-3 ">
        <div className={CSS.companyInfo}>
          <div className={CSS.companyDetails}>
            <h6 className={CSS.jobTitle}>{jobTitle}</h6>
            <span className={CSS.companyName}>{companyName}</span>
            <span className={CSS.companySlogan}>{companySlogan}</span>
          </div>
        </div>
      </div>
      <div className="col-3 d-flex align-items-center">
        <ImLocation
          style={{
            color: "gray",
          }}
        />
        <span className="ms-1">{location}</span>
      </div>
      <div className="col-2  d-flex align-items-center">
        <AiOutlineClockCircle />
        <span className="ms-1">{time}</span>
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
