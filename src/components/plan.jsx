import React from "react";

const Plan = ({ plan, setPlan, setPlanPrice }) => {
  return (
    <div className="plan-selection">
      <h1>Select your plan</h1>
      <p>You have the option of monthly or yearly billing.</p>
      <div className="plan-capsule">
        <div
          className="plan-div"
          style={{
            backgroundColor:
              plan === "Arcade" ? "hsl(217, 100%, 97%)" : "white",
          }}
          onClick={() => {
            setPlan("Arcade");
            setPlanPrice("9");
          }}
        >
          <img id="img1" src="" alt="" />
          <div className="plan-title">Arcade</div>
          <div className="plan-price">$9/mo</div>
        </div>
        <div
          className="plan-div"
          style={{
            backgroundColor:
              plan === "Advanced" ? "hsl(217, 100%, 97%)" : "white",
          }}
          onClick={() => {
            setPlan("Advanced");
            setPlanPrice("12");
          }}
        >
          <img id="img2" src="" alt="" />
          <div className="plan-title">Advanced</div>
          <div className="plan-price">$12/mo</div>
        </div>
        <div
          className="plan-div"
          style={{
            backgroundColor: plan === "Pro" ? "hsl(217, 100%, 97%)" : "white",
          }}
          onClick={() => {
            setPlan("Pro");
            setPlanPrice("15");
          }}
        >
          <img id="img3" src="" alt="" />
          <div className="plan-title">Pro</div>
          <div className="plan-price">$15/mo</div>
        </div>
      </div>
      <div className="billing-check">
        <span>Monthly</span>
        <input id="billing-checkbox" type="checkbox" />
        <span>Yearly</span>
      </div>
    </div>
  );
};

export default Plan;
