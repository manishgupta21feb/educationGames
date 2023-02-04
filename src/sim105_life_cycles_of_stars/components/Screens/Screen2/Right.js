import React from "react";
import MCQArea from "../../../containers/MCQArea";
import Radiobuttons from "../../../containers/Radiobuttons";
import NextScreenButton from "../../../containers/NextScreenButton";

const Right = (props) => {
  const { nextScreenButton } = props;
  return (
    <div className="right-wrapper">
      <MCQArea>
        <Radiobuttons />
      </MCQArea>
      {nextScreenButton ? <NextScreenButton /> : null}
    </div>
  );
};

export default Right;
