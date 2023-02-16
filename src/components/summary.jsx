import React from "react";

const Summary = ({
  plan,
  planPrice,
  checked1,
  checked2,
  checked3,
  checkedPrice,
}) => {
  function addprices() {
    let pprice = parseInt(planPrice);
    let cprice = parseInt(checkedPrice);
    let finalPrice = pprice + cprice;
    return finalPrice;
  }
  return (
    <div className="summary-div">
      <h1>Finishing up</h1>
      <p>Double-check everything looks OK before Confirming.</p>
      <div className="plan-summary-div">
        <div className="plan-summary">
          {plan} <span>+{planPrice}/mo</span>
        </div>
        <hr />
        <div
          className="add-on-summary"
          style={{ display: checked1 ? "flex" : "none" }}
        >
          Online service<span>+1$/mo</span>
        </div>
        <div
          className="add-on-summary"
          style={{ display: checked2 ? "flex" : "none" }}
        >
          Larger storage<span>+2$/mo</span>
        </div>
        <div
          className="add-on-summary"
          style={{ display: checked3 ? "flex" : "none" }}
        >
          Customizable Profile<span>+2$/mo</span>
        </div>
      </div>
      <div className="calculation">
        <span>Total (per month)</span>
        {addprices()}
      </div>
    </div>
  );
};

export default Summary;
