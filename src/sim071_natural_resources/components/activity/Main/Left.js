import React, { useState, useEffect } from "react";
import Button from "../../../../app/components/Button";
import { submitAnswer } from "../../../actions";
import "./style.scss";

const Left = (props) => {
  const {
    mainImageAlt,
    ImageAlt,
    buttonsInfo,
    onClickValue,
    buttonPressed,
    buttonList,
    isClick,
    buttonLabels,
    question,
    questionsData,
    activeButton,
    isPopupActive,
  } = props;

  const [selectedId, setSelectedId] = useState("");
  const [questionActive, setQuestionActive] = useState("");
  useEffect(() => {
    const result = questionsData.filter((item) => item.active);
  }, [selectedId]);

  const clickedVal = (e) => {
    onClickValue(e.target.id);
    setSelectedId(e.target.id);
  };

  return (
    <div className="left-view">
      {/* <img className="sr-only sr-image" /> */}
      <div className="image-button">
        <div className="img">
          <img className="sr-only sr-image" alt={mainImageAlt} />
          {buttonsInfo.map((items, index) => {
            const check = items.id;
            return (
              <div key={index} className={`button ${items.id}`}>
                <div className="bullets bullet" />
                <div className="dottedlines" />

                <Button
                  text={items.value}
                  disabled={buttonList.includes(items.id) || isPopupActive}
                  classes={` hotspot-btn ${
                    activeButton.length > 0 && selectedId == items.id
                      ? "active"
                      : ""
                  } ${buttonList.includes(items.id) ? "visited" : ""}
                   label `}
                  id={items.id}
                  onClick={clickedVal}
                  ariaPressed={
                    buttonList.includes(items.id) || selectedId == items.id
                  }
                />
                <div
                  className={`${
                    activeButton.length > 0 && selectedId == items.id
                      ? "show"
                      : " "
                  }`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Left;
