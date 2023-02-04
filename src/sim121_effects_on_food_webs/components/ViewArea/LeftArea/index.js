import React, { useEffect, useState } from "react";
import Button from "../../../../app/components/Button";
import GraphContainer from "../../../containers/GraphContainer";
import SelectOneContainer from "../../../containers/SelectOneContainer";
import SelectThreeContainer from "../../../containers/SelectThreeContainer";
import SelectTwoContainer from "../../../containers/SelectTwoContainer";
import "./style.scss";
const LeftArea = (props) => {
  const {
    buttonShow,
    mcqShow,
    secondScreen,
    updateClick,
    visitedHotspots,
    disableHotspot,
    correctAnswer,
    imgAlt,
    chartShow,
    dropdownOne,
    dropdownTwo,
    dropdownThree,
    isPopupActive,
    

  } = props;
  const [state, setstate] = useState([]);
  const clickedValue = (e) => {
    let statusCheck = state.filter((x) => {
      return x.value == e.target.id;
    });

    let obj;
    let result = [...state];
    if (statusCheck.length > 0) {
      obj = {
        value: e.target.id,
        
      };
      result = result.filter((val) => {
        return val.value != e.target.id;
      });


      setstate([...result]);
    } else {
      obj = {
        value: e.target.id,
       
      };
      setstate([...state, obj]);
    }

    updateClick(e.target.id);
  };


  useEffect(() => {}, [state]);

  

  return (
    <div className="left-area">
      {!chartShow ? (
        <div
          className={`left-img ${!chartShow ? "image-show" : ""}`}
          role="img"
          
          aria-label={imgAlt}
        />
      ) : null}

      {!mcqShow ? (
        buttonShow.map((items, index) => {
          return (
            <p key={index} aria-hidden="true" className={`label ${items.id} `}>
              {items.text}
            </p>
          );
        })
      ) : !secondScreen ? (
        buttonShow.map((items, index) => {
          return (
            <div key={index} className="scenerio2">
              <div className={`line ${items.id}`}></div>
              <div className={`dot ${items.id}`}></div>

              <Button
                text={items.text}
                id={items.id}
                ariaPressed={
                    visitedHotspots.includes(items.id) ||
                    correctAnswer.includes(items.id)
                  }
  
                classes={`btn-chip ${items.id} ${
                  visitedHotspots.includes(items.id) ||
                  correctAnswer.includes(items.id)
                    ? "selected"
                    : ""
                }`}
                onClick={clickedValue}
                disabled={disableHotspot || isPopupActive||correctAnswer.includes(items.id)}
              />
              <div
                className={`correcttick ${items.id} ${
                  correctAnswer.includes(items.id) ? "show" : ""
                }`}
              />
            </div>
          );
        })
      ) : chartShow ? (
        <div className="graph-container">
          <GraphContainer />
        </div>
      ) : (
        <>
          {buttonShow.map((items, index) => {
            return (
              <p key={index} aria-hidden="true" className={`label ${items.id} `}>
                {items.text}
              </p>
            );
          })}
          <div className={`highlighter ${dropdownOne}`} />
          <div className={`highlighter ${dropdownTwo}`} />
          <div className={`highlighter ${dropdownThree}`} />
          <div className={`dropdown ${dropdownOne}`}>
            {" "}
            <SelectOneContainer />
          </div>
          <div className={`dropdown ${dropdownTwo}`}>
            {" "}
            <SelectTwoContainer />
          </div>
          <div className={`dropdown ${dropdownThree}`}>
            {" "}
            <SelectThreeContainer />
          </div>
        </>
      )}
    </div>
  );
};
export default LeftArea;
