import React, { useEffect } from "react";
import "./style.scss";
import ImageAreaContainer from "../../../containers/ImageContainer";
import Button from "../../../../app/components/Button";

const LeftView = (props) => {
  const {
    buttonsInfo,
    onClickValue,
    buttonPressed,
    isClick,
    forFinishButton,
    buttonList,
    altText,
    isPopupActive,
  } = props;

  const clickedVal = (e) => {
    onClickValue(e.target.id);
    isClick(!buttonPressed);

  };

  useEffect(() => {}, [buttonPressed]);

  return (
    <>
      <div
        aria-hidden={buttonPressed || isPopupActive}
        className={`image-button ${!buttonPressed ? "show" : ""}`}
      >
        <div className="img">
          <img className="sr-only sr-image" alt={altText} />
          {buttonsInfo.map((items, index) => {
            return (
              <div key={index} className={`button ${items.id}`}>
                <div className="bullets" />
                <div className="dottedlines" />
                <Button
                  text={items.value}
                  disabled={buttonList.includes(items.id)}
                  classes={` hotspot-btn ${
                    buttonList.includes(items.id) ? `visited` : ""
                  } label`}
                  id={items.id}
                  onClick={clickedVal}
                  ariaHidden={buttonPressed || isPopupActive}
                  isPopupActive={buttonPressed || isPopupActive}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div aria-hidden={!buttonPressed || isPopupActive}>
        <ImageAreaContainer />
      </div>
    </>
  );
};
export default LeftView;
