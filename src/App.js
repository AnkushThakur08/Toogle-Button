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

  const [root1Title, setRoot1Title] = useState('')
    const [root2Title, setRoot2Title] = useState("");

  const [isShown, setIsShown] = useState(false);
  const [isShown2, setIsShown2] = useState(false);

  const handleClick = (event) => {
    setIsShown(!isShown);
  };

  const handleClick2 = (event) => {
    setIsShown2(!isShown2);
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
          onClick={() => rootLevelOne('Company')}
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
            {allDetails.map((IndividualDetail, index) => {
              if (IndividualDetail.title === root1Title) { //company/individual
                
                // console.log(IndividualDetail, "selected submenu");
                
                return IndividualDetail.rootOneSubMenu.map((submenu, index2) => {
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
                      {console.log(
                        root1Title,
                        "submenu",
                        root2Title,
                        "submenu2"
                      )}
                      {isShown2 && (
                        <div className="" style={{ marginLeft: "160px" }}>
                          {submenu?.rootTwoSubMenu?.map((submenu2, index) => {
                            if (submenu.title === root2Title) { //services/transportation/software/rental
                              if (submenu?.rootTwoSubMenu.length) //if it has submenu
                                return submenu2?.rootThreeSubMenu?.map( //show all submenu of services/transportation etc
                                  (submenu, index2) => {
                                    return (
                                      <div>
                                        <button className="rounded-circle  border border-info text-info m-4 fw-bold">
                                          +
                                        </button>
                                        <span className="fs-5  me-5">
                                          {submenu.title}
                                        </span>
                                        <button
                                          className="border border-light rounded fs-5 me-5 p-2"
                                          style={{ marginLeft: "200px" }}
                                          // onClick={() =>
                                            //rootLevelThree(submenu.title) //set the key for next submenu (used to get the correct item for next mapping)
                                          // }
                                        >
                                          + Add Rule
                                        </button>
                                        <MdModeEditOutline size={25} />
                                        <FaTimes size={25} className="ms-3" />
                                      </div>
                                    );
                                  }
                                );
                            }
                          })}
                        </div>
                      )}
                    </div>
                  );
                })
               
              }
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
