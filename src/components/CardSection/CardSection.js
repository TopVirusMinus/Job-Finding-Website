import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { BiTime } from "react-icons/bi";
import CSS from "./CardSection.module.css";

export function CardSection() {
  return (
    <div className="container mt-5 p-0">
      <div className="row">
        <div className="col-lg-6 col-sm-12">
          <div
            className="card"
            style={{
              backgroundColor: "#333",
              color: "white",
              borderRadius: 0,
              height: "285px",
            }}
          >
            <div className="card-body p-0">
              <div
                className="container d-flex align-items-center"
                style={{ borderBottom: "1px solid white", height: "50px" }}
              >
                <div className="icon">
                  <FaPaperPlane />
                </div>
                <div className="title">
                  <span className="card-title fs-5 ms-2 fw-bold p-2">
                    Subscribe To Our News
                  </span>
                </div>
              </div>
              <div className="container p-3">
                <p className="card-text">
                  Subscribe to our news letter to get our the latest jobs
                  posted, candidates, and latest news.
                </p>
                <input
                  style={{
                    backgroundColor: "transparent",
                    borderRadius: 0,
                  }}
                  type="email"
                  className={`${CSS.emailInput} form-control mt-4 mb-3`}
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
                <button
                  className="btn btn-primary p-3 mt-3 w-100"
                  style={{ backgroundColor: "#4f53d2" }}
                >
                  SUBSCRIBE
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-6 col-md-6 col-sm-12 mt-lg-0 mt-sm-3">
          <div
            className="card mb-4"
            style={{
              backgroundColor: "#40c2f6",
              color: "white",
              borderRadius: 0,
              height: "285px",
            }}
          >
            <div className="card-body p-0">
              <div
                className="container d-flex align-items-center"
                style={{ borderBottom: "1px solid white", height: "50px" }}
              >
                <div className="icon">
                  <BsTwitter />
                </div>
                <div className="title">
                  <span className="card-title fs-5 ms-2 fw-bold p-2">
                    Latest Tweets
                  </span>
                </div>
              </div>
              <div className="container p-3">
                <span
                  className="badge badge-dark ps-4 mb-3 pe-4"
                  style={{ backgroundColor: "#333", borderRadius: "1px" }}
                >
                  Dark
                </span>
                <p className="card-text">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </p>
                <BiTime />
                <span className="ms-2">8 minutes ago</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
