import React from "react";
import NextButtonContainer from "../../containers/NextButtonContainer";
import "./style.scss";

const BottomSection = (props) => {
  return (
    <div className="bottom-static">
      <div className="intstruction-area">
        <p
          className="instruction-blue-text"
          dangerouslySetInnerHTML={{
            __html: props.answerText
          }}
        ></p>
        <NextButtonContainer />
      </div>
    </div>
  );
};

export default BottomSection;