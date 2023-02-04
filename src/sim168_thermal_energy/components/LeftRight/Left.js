import React from "react";
import Button from "../../../app/components/Button";

const Left = (props) => {
  const {
    isPopupActive,
    onMainOptionClick,
    mainscreenOptions,
    visitedMainOptions,
    subQuestion,
  } = props;

  const onClick = (id) => {
    onMainOptionClick(id);
  };

  return (
    <div className="left-wrapper">
      {mainscreenOptions?.map(({ id, text }) => {
        const visited = visitedMainOptions.indexOf(id) >= 0;
        return (
          <div key={`moption${id}`} className={`main-screen-option ${id}`}>
            <div></div>
            <Button
              text={text}
              onClick={() => onClick(id)}
              disabled={visited || isPopupActive}
              classes={`hotspot-btn label ${visited ? "visited" : ""}`}
            />
          </div>
        );
      })}
      {subQuestion?.images.map((val, index) => {
        return (
          <img
            src={val}
            alt={subQuestion.alt}
            className={subQuestion.classes}
          />
        );
      })}
    </div>
  );
};

export default Left;
