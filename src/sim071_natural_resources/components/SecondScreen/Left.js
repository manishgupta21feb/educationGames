import React, { useState } from "react";
// import Button from "../../../app/components/Button";
import ButtonSecond from "./ButtonSecond";
// import Button from "./ButtonSecond";
import "./style.scss";

const Left = (props) => {
  const {
    mainImageAlt,
    buttonsInfoSecond,
    onClickSecond,
    buttonPressed,
    buttonList,
    answerList,
    submitButtonPressed,
    answerAttempt,
    questionCount,
    onClickedButton,
    ImageAlt,
  } = props;

  const [selectedId, setSelectedId] = useState("");
  //  let { questionCount: count } = getState();

  const clickedButton = (e) => {
    // buttonList.splice(buttonList.indexOf(e.target.id),1)
    onClickedButton(e.target.id);
  };

  const clickedSecond = (e) => {
    onClickSecond(e.target.id);
    setSelectedId(e.target.id);
  };

  return (
    <div className="left-sideview">
      {/* <img className="sr-only sr-image" /> */}
      <div className="image-sidebutton">
        <div className="sideimg">
          <img className="sr-only sr-image" alt={mainImageAlt} />
          {buttonsInfoSecond.map((items, index) => {
            const check = items.id;
            return (
              <div key={index} className={`btn-chip ${items.id} `}>
                <div
                  className={`bullets bullet ${
                    selectedId == items.id ? "show" : " "
                  }`}
                />
                <div className="dottedlines" />

                <ButtonSecond
                  buttonList={buttonList}
                  answerList={answerList}
                  items={items}
                  clickedSecond={clickedSecond}
                  clickedButton={clickedButton}
                ></ButtonSecond>

                <div
                  className={`correcttick ${
                    answerList.includes(items.id) ? "show" : ""
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
