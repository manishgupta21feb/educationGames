import React from "react";
import PropTypes from "prop-types";
import ContinueButton from "../common/ContinueButton";
import Arrow from "../common/Arrow";

const PartOne = (props) => {
  const {
    isPopupActive,
    text,
    electoSpectrumTitle,
    topText,
    bottomText,
    onContinue,
    buttonLabels,
    setData,
    arrowAltText,
    altText,
    imageLabel,
  } = props;

  const onContinueClick = () => {
    onContinue();
    setData();
  };
  return (
    <div className="part_one_container">
      <p className="title part1" dangerouslySetInnerHTML={{ __html: text }}></p>
      <h2 className="image-title part1">{electoSpectrumTitle}</h2>
      <p className="txt top-text">{topText}</p>
      <Arrow altText={arrowAltText} classes={"part1"}></Arrow>
      <div className="image">
        <p>{imageLabel}</p>
        <img className="sr-only sr-image" alt={altText}></img>
      </div>
      <Arrow altText={arrowAltText} classes={"part1"}></Arrow>
      <p className="txt bottom-text">{bottomText}</p>
      <ContinueButton
        text={buttonLabels.continue}
        classes={"right-arrow"}
        onClick={onContinueClick}
        isPopupActive={isPopupActive}
      ></ContinueButton>
    </div>
  );
};

export default PartOne;
