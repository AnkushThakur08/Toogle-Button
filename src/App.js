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

  const [root1Title, setRoot1Title] = useState("");
  const [root2Title, setRoot2Title] = useState("");
  const [root3Title, setRoot3Title] = useState("");

  const [isShown, setIsShown] = useState(false);
  const [isShown2, setIsShown2] = useState(false);
  const [isShown3, setIsShown3] = useState(false);

  const handleClick = (event) => {
    setIsShown(!isShown);
  };

  const handleClick2 = (event) => {
    setIsShown2(!isShown2);
  };
  const handleClick3 = (event) => {
    setIsShown3(!isShown3);
  };

  const rootLevelOne = (key) => {
    handleClick(true);
    setRoot1Title(key);
    // console.log("CLICK VALUE", isShown);
    // console.log(allDetails);
    // allDetails.map((IndividualDetail, index) => {
    // console.log(IndividualDetail);
    // });
  };

  const rootLevelTwo = (key) => {
    handleClick2();
    setRoot2Title(key);
    // console.log("CLICK VALUE", isShown);
  };
  const rootLevelThree = (key) => {
    handleClick3();
    setRoot3Title(key);
    // console.log("CLICK VALUE", isShown);
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
          onClick={() => rootLevelOne("Company")}
        >
          + Add Rule
        </button>

        <button className="border border-light rounded fs-5 me-5 p-2">
          + Add Conclusion
        </button>

        <MdModeEditOutline size={30} />
        <FaTimes size={30} className="ms-5" />
        {/* {console.log(allDetails, 'allDetails')} */}
        {isShown && (
          <div className="" style={{ marginLeft: "160px" }}>
            {console.log(
              root1Title,
              "submenu",
              root2Title,
              "submenu2",
              root3Title,
              "submenu3"
            )}
            {allDetails.map((IndividualDetail, index) => {
              if (IndividualDetail.title === root1Title) {
                return IndividualDetail.rootOneSubMenu.map(
                  (submenu, index2) => {
                    // console.log(submenu, "submenu");
                    return (
                      <div className="">
                        <button className="rounded-circle  border border-info text-info m-4 fw-bold">
                          +
                        </button>
                        <span className="fs-5  me-5">{submenu.title}</span>
                        <button
                          className="border border-light rounded fs-5 me-5 p-2"
                          style={{ marginLeft: "200px" }}
                          onClick={() => rootLevelTwo(submenu.title)}
                        >
                          + Add Rule
                        </button>
                        <MdModeEditOutline size={25} />
                        <FaTimes size={25} className="ms-3" />
                        {isShown2 && (
                          <div className="" style={{ marginLeft: "160px" }}>
                            {submenu?.rootTwoSubMenu?.map((submenu2, index) => {
                              // console.log(submenu2, "submenu2");
                              if (submenu.title === root2Title) {
                                if (submenu?.rootTwoSubMenu.length)
                                  return (
                                    <div>
                                      <button className="rounded-circle  border border-info text-info m-4 fw-bold">
                                        +
                                      </button>
                                      <span className="fs-5  me-5">
                                        {submenu2.title}
                                      </span>
                                      <button
                                        className="border border-light rounded fs-5 me-5 p-2"
                                        style={{ marginLeft: "200px" }}
                                        onClick={
                                          () => rootLevelThree(submenu2.title) //set the key for next submenu (used to get the correct item for next mapping)
                                        }
                                      >
                                        + Add Rule
                                      </button>
                                      <MdModeEditOutline size={25} />
                                      <FaTimes size={25} className="ms-3" />
                                      {isShown3 && (
                                        <div
                                          className=""
                                          style={{ marginLeft: "160px" }}
                                        >
                                          {
                                            submenu2.title === root3Title && submenu2.rootThreeSubMenu.map((item, index) => {
                                            
                                              return (
                                                <div>
                                                  <button className="rounded-circle  border border-info text-info m-4 fw-bold">
                                                    +
                                                  </button>
                                                  <span className="fs-5  me-5">
                                                    {item.title}
                                                  </span>
                                                  <button
                                                    className="border border-light rounded fs-5 me-5 p-2"
                                                    style={{
                                                      marginLeft: "200px",
                                                    }}
                                                  >
                                                    + Add Rule
                                                  </button>
                                                  <MdModeEditOutline
                                                    size={25}
                                                  />
                                                  <FaTimes
                                                    size={25}
                                                    className="ms-3"
                                                  />
                                                </div>
                                              );
                                            })
                                          }
                                        </div>
                                      )}
                                    </div>
                                  );
                              }
                            })}
                          </div>
                        )}
                      </div>
                    );
                  }
                );
              }
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
