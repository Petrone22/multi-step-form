import React from "react";

const SideBar = ({ page }) => {
  return (
    <div className="side-bar-div">
      <div className="step">
        <div
          className="step-number"
          style={{
            backgroundColor: page === 0 ? "hsl(228, 100%, 84%)" : "transparent",
            color: page === 0 ? "hsl(213, 96%, 18%)" : "hsl(0, 0%, 100%)",
          }}
        >
          1
        </div>
        <div className="step-title">
          STEP 1<div className="step-description">YOUR INFO</div>
        </div>
      </div>
      <div className="step">
        <div
          className="step-number"
          style={{
            backgroundColor: page === 1 ? "hsl(228, 100%, 84%)" : "transparent",
            color: page === 1 ? "hsl(213, 96%, 18%)" : "hsl(0, 0%, 100%)",
          }}
        >
          2
        </div>
        <div className="step-title">
          STEP 2<div className="step-description">SELECT PLAN</div>
        </div>
      </div>
      <div className="step">
        <div
          className="step-number"
          style={{
            backgroundColor: page === 2 ? "hsl(228, 100%, 84%)" : "transparent",
            color: page === 2 ? "hsl(213, 96%, 18%)" : "hsl(0, 0%, 100%)",
          }}
        >
          3
        </div>
        <div className="step-title">
          STEP 3<div className="step-description">ADD-ONS</div>
        </div>
      </div>
      <div className="step">
        <div
          className="step-number"
          style={{
            backgroundColor: page === 3 ? "hsl(228, 100%, 84%)" : "transparent",
            color: page === 3 ? "hsl(213, 96%, 18%)" : "hsl(0, 0%, 100%)",
          }}
        >
          4
        </div>
        <div className="step-title">
          STEP 4<div className="step-description">SUMMARY</div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
