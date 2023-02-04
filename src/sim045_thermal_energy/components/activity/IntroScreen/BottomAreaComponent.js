import React from "react";
import "./main.scss";

const IntroductionArea = (props) => {
  const { introductionHeading } = props;

  return (
    <>
      <p
        className="questionIntroHeading"
        dangerouslySetInnerHTML={{
          __html: introductionHeading,
        }}
      ></p>
    </>
  );
};

export default IntroductionArea;
