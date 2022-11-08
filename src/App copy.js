import React, { useState, useEffect } from "react";
import "./App.css";

// React icons
import { MdModeEditOutline } from "react-icons/md";
import { FaTimes } from "react-icons/fa";

// API
import { userData } from "./Data";

const App = () => {
  const [allDetails, setAllDetails] = useState(userData);

  const [loopingData, setLoopingData] = useState({
    error: "",
    success: "",
    datas: [],
  });

  const [isShown, setIsShown] = useState(false);
  const [isShown2, setIsShown2] = useState(false);

  const handleClick = (event) => {
    setIsShown(!isShown);
  };

  const handleClick2 = (event) => {
    setIsShown2(!isShown2);
  };

  const rootLevelOne = () => {
    handleClick(true);
    console.log("CLICK VALUE", isShown);
    console.log(allDetails);
    allDetails.map((IndividualDetail, index) => {
      console.log(IndividualDetail);
    });
  };

  const rootLevelTwo = () => {
    handleClick2();
    console.log("CLICK VALUE", isShown);
  };

  return (
    <div>
      <h1 className="text-center">Component Toggle</h1>

      <div className="ms-5">
        <button className="rounded-circle border border-info text-info m-4 fw-bold ">
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

              {allDetails.map((IndividualDetail, index) => {
                console.log(IndividualDetail.rootOneSubMenu?.title);
              })}

              <span className="fs-5  me-5">Services</span>

              <button
                className="border border-light rounded fs-5 me-5 p-2"
                style={{ marginLeft: "200px" }}
                onClick={() => rootLevelTwo()}
              >
                + Add Rule
              </button>

              <MdModeEditOutline size={25} />
              <FaTimes size={25} className="ms-3" />
            </div>

            {isShown2 && (
              <div style={{ marginLeft: "50px" }}>
                <div>
                  <button className="rounded-circle  border border-info text-info m-4 fw-bold">
                    +
                  </button>

                  <span className="fs-5  me-5">Technical Services</span>

                  <button
                    className="border border-light rounded fs-5 me-5 p-2"
                    style={{ marginLeft: "140px" }}
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

                  <span className="fs-5  me-5">Consultent Services</span>

                  <button
                    className="border border-light rounded fs-5 me-5 p-2"
                    style={{ marginLeft: "140px" }}
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

                  <span className="fs-5  me-5">Management Services</span>

                  <button
                    className="border border-light rounded fs-5 me-5 p-2"
                    style={{ marginLeft: "140px" }}
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

                  <span className="fs-5  me-5">Certification Services</span>

                  <button
                    className="border border-light rounded fs-5 me-5 p-2"
                    style={{ marginLeft: "140px" }}
                  >
                    + Add Rule
                  </button>

                  <MdModeEditOutline size={25} />
                  <FaTimes size={25} className="ms-3" />
                </div>
              </div>
            )}

            <div>
              <button className="rounded-circle  border border-info text-info m-4 fw-bold">
                +
              </button>

              <span className="fs-5  me-5">Transportation</span>

              <button
                className="border border-light rounded fs-5 me-5 p-2"
                style={{ marginLeft: "140px" }}
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

              <span className="fs-5  me-5">Software/Info/Digited Goods</span>

              <button
                className="border border-light rounded fs-5 me-5 p-2"
                style={{ marginLeft: "10px" }}
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

              <span className="fs-5  me-5">
                Rental/Leasing of Movable Property
              </span>

              <button
                className="border border-light rounded fs-5 me-5 p-2"
                style={{ marginLeft: "-40px" }}
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
        <button
          className="border border-light rounded fs-5 me-5 p-2"
          // onClick={() => rootLevelOne()}
        >
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
