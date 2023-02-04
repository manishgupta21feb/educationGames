import React, { useRef, useEffect, useState } from "react";
import "./style.scss";
import Button from "../../../app/components/Button";

const FirstScreenRightView = (props) => {
  const {
    lastScreenOnClick,
    continueButtonLabel,
    isPopupActive,
    lastScreenPart,
    finishButtonLabel,
    finishOnClick,
    alligatorsArray,
    data,
  } = props;

  const btnRef = useRef();

  const [obj, setObj] = useState(null);

  useEffect(() => {
    let id = alligatorsArray[alligatorsArray.length - 1];
    let obj = { ...data[id] };
    setObj(obj);
  }, [alligatorsArray]);

  useEffect(() => {
    if (alligatorsArray.length === 3) {
      btnRef.current.focus();
    } else if (alligatorsArray.length === 6) {
      btnRef.current.focus();
    }
  }, [alligatorsArray]);

  return (
    <div className="last-screen-right-main">
      <div className="last-screen-right-text">
        <p>{data.sixthScreenRightOST1}</p>
        <p className="last-screen-right-second-text">
          {data.sixthScreenRightOST2}
        </p>
      </div>

      {(lastScreenPart === "first" && alligatorsArray.length) ||
      (lastScreenPart === "second" && alligatorsArray.length > 3) ? (
        <div className="alligator-container">
          <div className="alligator-img">
            <img alt={obj.altTxt} src={obj.imgSrc} />
          </div>

          <div className="alligator-info-txt">
            <p>{obj.txt}</p>
          </div>
        </div>
      ) : (
        ""
      )}
      {lastScreenPart === "first" ? (
        <div>
          <Button
            ref={btnRef}
            label={continueButtonLabel}
            text={continueButtonLabel}
            classes="toast-secondary-button positive right-arrow"
            onClick={lastScreenOnClick}
            isPopupActive={isPopupActive}
            disabled={alligatorsArray.length < 3}
          />
        </div>
      ) : (
        <div>
          <Button
            ref={btnRef}
            label={finishButtonLabel}
            text={finishButtonLabel}
            classes="toast-secondary-button positive"
            onClick={finishOnClick}
            isPopupActive={isPopupActive}
            disabled={alligatorsArray.length < 6}
          />
        </div>
      )}
    </div>
  );
};

export default FirstScreenRightView;
