import React, { useState } from "react";
import PersonalInfo from "./personalInfo";
import Plan from "./plan";
import AddOns from "./addOns";
import Summary from "./summary";
import SideBar from "./sideBar";
import "../App.css";
const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [plan, setPlan] = useState("");
  const [planPrice, setPlanPrice] = useState();
  const [page, setPage] = useState(0);
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  var checkedPrice = 0;

  function getAddonPrice() {
    if (checked1) {
      checkedPrice += 1;
    }
    if (checked2) {
      checkedPrice += 2;
    }

    if (checked3) {
      checkedPrice += 2;
    }
  }
  getAddonPrice();
  // console.log(name, phone, email);

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
      return (
        <PersonalInfo
          setEmail={setEmail}
          setPhone={setPhone}
          setName={setName}
          name={name}
          email={email}
          phone={phone}
        />
      );
    }
    if (page === 1) {
      return <Plan setPlan={setPlan} plan={plan} setPlanPrice={setPlanPrice} />;
    }
    if (page === 2) {
      return (
        <AddOns
          checked1={checked1}
          checked2={checked2}
          checked3={checked3}
          setChecked1={setChecked1}
          setChecked2={setChecked2}
          setChecked3={setChecked3}
        />
      );
    }
    if (page === 3) {
      return (
        <Summary
          planPrice={planPrice}
          plan={plan}
          checked1={checked1}
          checked2={checked2}
          checked3={checked3}
          checkedPrice={checkedPrice}
        />
      );
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
              disabled={
                page === 3 ||
                name === "" ||
                email === "" ||
                phone === "" ||
                (page === 1 && plan === "")
              }
              onClick={() => {
                setPage((currPage) => currPage + 1);
              }}
              style={{
                backgroundColor:
                  page === 3 || name === "" || email === "" || phone === ""
                    ? "hsl(231, 11%, 63%)"
                    : "hsl(243, 100%, 62%)",
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
