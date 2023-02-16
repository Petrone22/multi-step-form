import React from "react";

const AddOns = ({
  checked1,
  checked2,
  checked3,
  setChecked1,
  setChecked2,
  setChecked3,
}) => {
  return (
    <div className="add-ons-selection">
      <h1>Pick add-ons</h1>
      <p>Add-ons help enhance your gaming experience.</p>
      <div
        className="add-on-div"
        onClick={() => {
          setChecked1((prevChecked) => !prevChecked);
        }}
      >
        <input
          type="checkbox"
          id="plan-checkbox"
          checked={checked1 ? "checked" : ""}
        />
        <div className="add-on-description">
          <div className="add-on-title">Online service</div>
          <div className="add-on-itself">Access to multiplayer games</div>
        </div>
        <div className="add-on-price">+1$/mo</div>
      </div>
      <div
        className="add-on-div"
        onClick={() => {
          setChecked2((prevChecked) => !prevChecked);
        }}
      >
        <input
          type="checkbox"
          id="plan-checkbox"
          checked={checked2 ? "checked" : ""}
        />
        <div className="add-on-description">
          <div className="add-on-title">Larger storage</div>
          <div className="add-on-itself">Extra 1TB of cloud save</div>
        </div>
        <div className="add-on-price">+2$/mo</div>
      </div>
      <div
        className="add-on-div"
        onClick={() => {
          setChecked3((prevChecked) => !prevChecked);
        }}
      >
        <input
          type="checkbox"
          id="plan-checkbox"
          checked={checked3 ? true : false}
        />
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
