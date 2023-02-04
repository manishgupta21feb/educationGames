import React, { useRef, useState, useEffect } from "react";
import ButtonNext from "../../../../containers/ButtonNextContainer";
export const common = { ...actions };
import * as actions from "../../../../../app/actions";
import View from "../../../../../app/components/View";
import PlayPauseButton from "../../../../containers/PlayPauseContainer";

import Slider from "../../../../containers/SliderContainer";
import "./style.scss";
const index = (props) => {
  const {
    ifSubScreen,
    questionScreen2,
    question,

    onClickPlay,
    isPopupActive,
  } = props;
  const refObj = useRef();
  const [value1, setValue1] = useState(0);
  const [changeVal, setChangeVal] = useState(4);
  const [prevVal, setPrevVal] = useState(0);
  const [keepCount, setKeepCount] = useState(0);
  const animDiv = ["0", "1", "2", "3", "4"];
  const [show, setShow] = useState(0);
  const [currentVal, setCurrentVal] = useState("");
  const [charlesVal, setChalesVal] = useState(4);
  const [charlesPrev, setCharlesPrev] = useState(4);
  const [disableSlider, setDisableSlider] = useState(false);

  const [flag, setFlag] = useState(true);
  const [currentAnimation, setCurrentAnimation] = useState();

  const BoylesOnChange = (value) => {
    setDisableSlider(true);
    let prevValOld = value1;

    setCurrentAnimation(prevValOld);
    setValue1(value);
    let newVal = value;
    let val2 = Math.abs(4 - value);

    setChangeVal(val2);
    setShow("");
    if (prevVal > newVal) {
      setCurrentVal(prevValOld - 1);
      setPrevVal((old) => old - 1);
    } else {
      setCurrentVal(prevValOld);

      setPrevVal((old) => old + 1);
    }

    setKeepCount(keepCount + 1);
  };

  const charlesOnChange = (value) => {
    setDisableSlider(true);
    let newValValue = Math.abs(4 - value);
    let prevValOld = charlesVal;
    let newVal = value;
    setCurrentAnimation(prevValOld);
    setValue1(newVal);
    setChalesVal(newValValue);
    setShow("");
    setValue1(newVal);
    if (charlesPrev > newValValue) {
      setCurrentVal(charlesPrev - 1);
      setCharlesPrev((old) => old - 1);
    } else {
      setCurrentVal(prevValOld);
      setCharlesPrev((old) => parseInt(old + 1));
    }
    setKeepCount(keepCount + 1);
  };

  const BoylesOnChange2 = (value) => {
    setDisableSlider(true);
    let prevValOld = value1;

    setCurrentAnimation(prevValOld);
    setChangeVal(value);

    let val2 = Math.abs(4 - value);

    setValue1(val2);
    setShow("");

    if (prevVal > val2) {
      setCurrentVal(prevValOld - 1);
      setPrevVal((old) => old - 1);
    } else {
      setCurrentVal(prevValOld);

      setPrevVal((old) => old + 1);
    }

    setKeepCount(keepCount + 1);
  };
  const handleClick = (e) => {
    setFlag(!flag);

    onClickPlay();
  };

  const animationEnd = (prevVala, value1) => {
    if (prevVal < value1) {
      setCurrentVal(prevVal);
      setPrevVal((old) => parseInt(old + 1));
    } else if (prevVal == value1) {
      setCurrentVal("");
      setShow(value1);
      setDisableSlider(false);
    } else {
      setCurrentVal(prevVal - 1);
      setPrevVal((old) => old - 1);
    }
  };

  const animationChanrles = () => {
    if (charlesPrev < charlesVal) {
      setCurrentVal((old) => old + 1);
      setCharlesPrev((old) => parseInt(old + 1));
    } else if (charlesPrev == charlesVal) {
      setCurrentVal("");
      setDisableSlider(false);
      setShow(value1);
    } else {
      setCurrentVal((old) => old - 1);
      setCharlesPrev((old) => old - 1);
    }
  };
  return (
    <View layout="leftright">
      <div className="left-area ">
        <PlayPauseButton
          onClick={handleClick}
          classes={
            flag
              ? "btn icon-only  position play-state"
              : "btn icon-only  position stop-state"
          }
          ariaLable={flag ? "Play animation" : "Pause animation"}
        >
          <span className="text" aria-hidden="true"></span>
          <span className="icon" aria-hidden="true"></span>
        </PlayPauseButton>
        <div className="hide"></div>
        <div
          ref={refObj}
          className={` ${questionScreen2} `}
          id={questionScreen2}
          key={questionScreen2}
        >
          {animDiv.map((a) => {
            return (
              <div
                id={`top--${a}`}
                className={`${
                  flag ? "" : "pause-state"
                }    point-animation${a} ${show == a ? "show anim" : "hide"}`}
              >
                {question.imgDescription.map((imgDesc) => {
                  if (imgDesc.id.includes(show) && show == a) {
                    return (
                      <img className="sr-only sr-image" alt={imgDesc.text} />
                    );
                  } else return null;
                })}
              </div>
            );
          })}
          {animDiv.map((a) => {
            return (
              <div
                id={`bottom--${a}`}
                className={`${
                  flag ? "" : "pause-state"
                } transition-animation${a} ${
                  currentVal == a
                    ? `show ${
                        question.isInverse
                          ? currentAnimation > value1
                            ? "transition-reverse"
                            : "transition"
                          : currentAnimation < charlesVal
                          ? "transition"
                          : "transition-reverse"
                      }`
                    : "hide"
                }`}
                onAnimationEnd={
                  question.isInverse
                    ? () => animationEnd(prevVal, value1)
                    : () => animationChanrles()
                }
              ></div>
            );
          })}
        </div>
        <div className="bottom-table"></div>
        {question.isInverse ? null : (
          <p className="tempText" aria-hidden>
            {question.tempArray
              ? question.tempArray.map((t) => {
                  if (t.id.includes(value1)) {
                    return t.text;
                  }
                })
              : null}
          </p>
        )}
      </div>

      <div className="right-area">
        <h2>{question.questionTitle}</h2>
        <p className="pressure">{question.imgTxt[1].name}</p>
        <Slider
          disabled={isPopupActive || disableSlider}
          title={question.sliderTitle1}
          onChange={question.isInverse ? BoylesOnChange : charlesOnChange}
          value={value1}
          ariaValueText={
            question.isInverse
              ? question.valuetextArrayPressure
              : question.valuetextArray
          }
        />
        <p className="vol-temp">{question.imgTxt[0].name}</p>
        <Slider
          disabled={isPopupActive || disableSlider}
          title={question.sliderTitle2}
          onChange={question.isInverse ? BoylesOnChange2 : charlesOnChange}
          value={question.isInverse ? changeVal : value1}
          ariaValueText={
            question.isInverse
              ? question.valuetextArrayVolume
              : question.valuetextArray
          }
        />

        {!ifSubScreen ? (
          <ButtonNext
            disabled={keepCount > 0 ? false : true}
            classes="toast-secondary-button positive"
          />
        ) : null}
      </div>
    </View>
  );
};

export default index;
