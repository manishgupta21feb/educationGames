import React from "react";
import Wrapper from "../Wrapper";
import "./top_area.scss";

import Options from "../../containers/OptionsContainer";
import VideoLabels from "../../containers/VideoLabelsContainer";

const TopArea = (props) => {
  const { optionTrigger, bgImgAlt, options } = props;

  const experimentImgs = options?.map((item, index) => {
    return (
      <div
        key={`img-${item.id}`}
        className={`exp exp--${index + 1} ${
          item.isDisabled ? `exp--${index + 1}-end` : `exp--${index + 1}-start`
        }`}
      ></div>
    );
  });

  return (
    <Wrapper className={`wrapper--full ${!optionTrigger ? "bg-img" : ""}`}>
      {optionTrigger ? (
        <VideoLabels />
      ) : (
        <>
          <img className="sr-only sr-image" alt={bgImgAlt} />
          {experimentImgs}
          <Options />
        </>
      )}
    </Wrapper>
  );
};

export default TopArea;
