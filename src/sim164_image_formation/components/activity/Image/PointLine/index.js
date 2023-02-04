import React, { useRef, useState } from "react";
import "./style.scss";

const PointLine = (props) => {
  const {
    ownClass = "",
    pointLineData,
    describeContent,
    isPopupActive,
    pointLineLive,
  } = props;

  const pointerLineRef = useRef();
  const [currentTip, setCurrentTip] = useState();

  const selectClick = (index, _data) => {
    setCurrentTip((prevState) => (prevState = index));
    pointLineLive(_data);
  };

  const hideAllTip = () => {
    setCurrentTip((prevState) => (prevState = undefined));
  };
  return (
    <div ref={pointerLineRef} className={`pointerLine ${ownClass}`}>
      {pointLineData.map((val, index) => {
        return (
          <div className="buttonHolder" key={`${index}_pointLine`}>
            <button
              /* title={val.content} */
              aria-label={val.content.toLowerCase()}
              className="btn-cl"
              tabIndex={isPopupActive ? "-1" : null}
              disabled={isPopupActive}
              onClick={() => {
                selectClick(index, `${describeContent} ${val.hoverContent}`);
              }}
              onBlur={hideAllTip}
              // aria-describedby={`${index}descLabel`}
            >
              <div
                className={`hoverContent ${
                  currentTip == index ? "showTip" : ""
                }`}
              >
                {val.hoverContent}
              </div>
            </button>
            <p className="content" aria-hidden="true">
              {val.content}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default PointLine;
