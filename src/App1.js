import React, { useState, useEffect } from "react";
import "./App.css";

// React icons
import { MdModeEditOutline } from "react-icons/md";
import { FaTimes } from "react-icons/fa";

import { userData } from "./Data";

const App = () => {
  console.log("ALL DATA", userData);

  const [allDetails, setAllDetails] = useState(userData);

  const [isShown, setIsShown] = useState(false);
  const [isShown2, setIsShown2] = useState(false);

  const [displayLevelOneData, setDisplayLevelTwoData] = useState([]);

  const handleClick = (event) => {
    setIsShown(!isShown);
    setIsShown2(!isShown2);
  };

  const toggle = () => {
    setAllDetails(userData);

    console.log("STATE", allDetails);

    userData.map((IndividualData, index) => {
      console.log(IndividualData);
      console.log(IndividualData.rootOneSubMenu?.[0]);
    });
  };

  const rootLevelOne = () => {
    handleClick();
    console.log("CLICK VALUE", isShown);
    console.log(allDetails);
    allDetails.map((IndividualDetail, index) => {
      console.log(IndividualDetail.rootOneSubMenu);
      setDisplayLevelTwoData(IndividualDetail.rootOneSubMenu);

      console.log("FINAL", displayLevelOneData);
    });
  };

  const rootLevelTwo = () => {
    handleClick();
    console.log("CLICK VALUE", isShown);
  };

  return (
    <div>
      <h1 className="text-center">Component Toggle</h1>

      <div className="ms-5">
        <button
          className="rounded-circle border border-info text-info m-4 fw-bold "
          onClick={toggle}
        >
          +
        </button>
        <span className="fs-3 fw-bold me-5">Company</span>

        <button
          className="border border-light rounded fs-5 me-5 p-2"
          onClick={() => rootLevelOne()}
        >
          + Add Rule
        </button>

        <button className="border border-light rounded fs-5 me-5 p-2">
          + Add Conclusion
        </button>

        <MdModeEditOutline size={30} />
        <FaTimes size={30} className="ms-5" />

        {isShown && (
          <div className="" style={{ marginLeft: "160px" }}>
            {/* {allDetails.map((IndividualDetail, index) => {
              console.log(IndividualDetail.rootOneSubMenu);
            })} */}

            <div>
              <button className="rounded-circle  border border-info text-info m-4 fw-bold">
                +
              </button>

              <span className="fs-5  me-5">Services</span>

              <button
                className="border border-light rounded fs-5 me-5 p-2"
                style={{ marginLeft: "100px" }}
                onClick={() => rootLevelTwo()}
              >
                + Add Rule
              </button>

              <MdModeEditOutline size={25} />
              <FaTimes size={25} className="ms-3" />
            </div>

            <div>
              <button className="rounded-circle  border border-info text-info m-4 fw-bold">
                +
              </button>

              <span className="fs-5  me-5">Services</span>

              <button
                className="border border-light rounded fs-5 me-5 p-2"
                style={{ marginLeft: "100px" }}
              >
                + Add Rule
              </button>

              <MdModeEditOutline size={25} />
              <FaTimes size={25} className="ms-3" />
            </div>

            <div>
              <button className="rounded-circle  border border-info text-info m-4 fw-bold">
                +
              </button>

              <span className="fs-5  me-5">Services</span>

              <button
                className="border border-light rounded fs-5 me-5 p-2"
                style={{ marginLeft: "100px" }}
              >
                + Add Rule
              </button>
              <MdModeEditOutline size={25} />
              <FaTimes size={25} className="ms-3" />
            </div>

            <div>
              <button className="rounded-circle  border border-info text-info m-4 fw-bold">
                +
              </button>

              <span className="fs-5  me-5">Services</span>

              <button
                className="border border-light rounded fs-5 me-5 p-2"
                style={{ marginLeft: "100px" }}
              >
                + Add Rule
              </button>
              <MdModeEditOutline size={25} />
              <FaTimes size={25} className="ms-3" />
            </div>
          </div>
        )}
      </div>

      <div className="ms-5">
        <button className="rounded-circle  border border-info text-info m-4 fw-bold">
          +
        </button>
        <span className="fs-3 fw-bold me-5">Individual</span>
        <button className="border border-light rounded fs-5 me-5 p-2">
          + Add Rule
        </button>
        <button className="border border-light rounded fs-5 me-5 p-2">
          + Add Conclusion
        </button>
        <MdModeEditOutline size={30} />
        <FaTimes size={30} className="ms-5" />
      </div>
    </div>
  );
};

export default App;
