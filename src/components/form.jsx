import React, { useState } from "react";
import PersonalInfo from "./personalInfo";
import Plan from "./plan";
import AddOns from "./addOns";
import Summary from "./summary";
import SideBar from "./sideBar";
import "../App.css";
const Form = () => {
  const [page, setPage] = useState(0);
  // const pages = [
  //   "Personal info",
  //   "Select your plan",
  //   "Pick add-ons",
  //   "Finishing up",
  // ];
  const barDisplay = () => {
    return <SideBar page={page} />;
  };
  const pageDisplay = () => {
    if (page === 0) {
      return <PersonalInfo />;
    }
    if (page === 1) {
      return <Plan />;
    }
    if (page === 2) {
      return <AddOns />;
    }
    if (page === 3) {
      return <Summary />;
    }
  };
  return (
    <div className="form">
      <div className="form-Contaienr">
        <div className="sideBar">{barDisplay()}</div>
        <div className="content">
          <div className="mainContent">{pageDisplay()}</div>
          <div className="footer">
            <button
              style={{ opacity: page === 0 ? "0%" : "100%" }}
              id="backbtn"
              disabled={page === 0}
              onClick={() => {
                setPage((currPage) => currPage - 1);
              }}
            >
              Go Back
            </button>
            <button
              id="nextbtn"
              disabled={page === 3}
              onClick={() => {
                setPage((currPage) => currPage + 1);
              }}
            >
              Next Step
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
