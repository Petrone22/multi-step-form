import React from "react";

const PersonalInfo = () => {
  return (
    <div className="personal-info-container">
      <h1>Personal info</h1>
      <p>Please provide your name, email address, and phone number.</p>
      <div className="input">
        <div className="name-div">Name</div>
        <input type="text" placeholder="e.g. Stephen King" />
        <div className="email-div">Email Adress</div>
        <input type="text" placeholder="e.g. stephenking@lorem.com" />
        <div className="number-div">Phone number</div>
        <input type="text" placeholder="e.g. +1 234 567 890" />
      </div>
    </div>
  );
};

export default PersonalInfo;
