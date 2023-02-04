import React, { useState, useEffect } from "react";
import Wrapper from "../../containers/WrapperContainer";
import Button from "../../../app/components/Button";
import Home from "../../containers/HomeContainer";
import steady_state_model from "../../assets/images/steady_state_model.png";
import imageTop from "../../assets/images/big_bang_new.png";
import Question from "../../containers/QuestionContainer";

import "./schoolView.scss";

const schoolView = (props) => {
  const {
    btnIds,
    videoTitle,
    sliderTitle,
    buttonLabel,
    btnSound,
    nextBtnText,
    continueBtnText,
    resetActivity,
    getScreenNumber,
    getIsVisitedBoth,
    setIsVisitedBoth,
    bigBang,
    stateModel,
    videoSecond,
    isPopupActive,
    clickButton,
    altTextBigBang,
    altTextSteadyState,
  } = props;
  const [mcqVisible, setMcqVisible] = useState(false);

  const [allContentEnd, setAllContentEnd] = useState(false);
  const [count, setCount] = useState(0);
  const [loopData, setLoopData] = useState([]);
  const onClickOfBtn = (e) => {
    EventManager.broadcast("SECONDARY_CLICK");
    setCount(count + 1);
    clickButton();
    if (count + 1 == 3) {
      resetActivity();
      if (getIsVisitedBoth.length == 0) {
        setIsVisitedBoth({ screen: 1, btn: 0 }, e.target.id);
        setAllContentEnd(false);
      } else {
        setAllContentEnd(true);
      }
    }
  };

  const showMcqHandler = (e) => {
    btnSound(e.target.id);
    setAllContentEnd(!allContentEnd);
    EventManager.broadcast("SECONDARY_CLICK");
  };

  useEffect(() => {
    let result = sliderTitle.slice(count, count + 1);
    setLoopData(result);
  }, [count]);

  return (
    <>
      {getIsVisitedBoth.length == 1 && allContentEnd == true ? (
        <Question />
      ) : getScreenNumber.btn == 1 ? (
        <>
          <Wrapper className="wrapper--wrap full-area" layout="topbottom">
            <div className="universeTop">
              {/* <div className="universeImage"></div> */}
              <img
                src={steady_state_model}
                className="universeImage"
                alt={altTextSteadyState}
              />
              <p className="universeText" aria-hidden>
                {stateModel}
              </p>
            </div>
            <div className="universeBottom">
              <p className="paragraphSecond">{videoTitle}</p>
              <p className="paragraphThird">{videoSecond}</p>
              <Button
                id={btnIds[0].id}
                text={buttonLabel}
                classes="toast-secondary-button positive right-arrow"
                onClick={(e) => showMcqHandler(e)}
              />
            </div>
          </Wrapper>
        </>
      ) : (
        loopData.map((text, index) => {
          return (
            <Wrapper
              key={index}
              className="wrapper--wrap full-area"
              layout="topbottom"
            >
              <>
                {/* <div className="imageTop"></div> */}
                <img src={imageTop} className="imageTop" alt={altTextBigBang} />
                <p className="bigBang" aria-hidden>
                  {bigBang}
                </p>
              </>
              <>
                <p className="buttoninfo">{text.text}</p>
                <Button
                  id={btnIds[1].id}
                  text={count == 2 ? nextBtnText : continueBtnText}
                  classes="toast-secondary-button positive right-arrow"
                  disabled={isPopupActive}
                  onClick={(e) => onClickOfBtn(e)}
                />
              </>
            </Wrapper>
          );
        })
      )}
    </>
  );
};

export default schoolView;
