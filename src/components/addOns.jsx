import React from "react";

const AddOns = () => {
  return (
    <div className="add-ons-selection">
      <h1>Pick add-ons</h1>
      <p>Add-ons help enhance your gaming experience.</p>
      <div className="add-on-div">
        <input type="checkbox" id="plan-checkbox" />
        <div className="add-on-description">
          <div className="add-on-title">Online service</div>
          <div className="add-on-itself">Access to multiplayer games</div>
        </div>
        <div className="add-on-price">+1$/mo</div>
      </div>
      <div className="add-on-div">
        <input type="checkbox" id="plan-checkbox" />
        <div className="add-on-description">
          <div className="add-on-title">Larger storage</div>
          <div className="add-on-itself">Extra 1TB of cloud save</div>
        </div>
        <div className="add-on-price">+2$/mo</div>
      </div>
      <div className="add-on-div">
        <input type="checkbox" id="plan-checkbox" />
        <div className="add-on-description">
          <div className="add-on-title">Customizable Profile</div>
          <div className="add-on-itself">Custom theme on your profile</div>
        </div>
        <div className="add-on-price">+2$/mo</div>
      </div>
    </div>
  );
};

export default AddOns;
