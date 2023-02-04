import React from "react";
import NextButtonContainer from "../../containers/NextButtonContainer";
import "./style.scss";

const BottomStatic = (props) => {
  const { data, screenText } = props;
  return (
    <div className="bottom-static">
      <div className="intstruction-area">
        <p
          className="instruction-blue-text"
          dangerouslySetInnerHTML={{
            __html: screenText
          }}
        ></p>
        <NextButtonContainer />
      </div>
    </div>
  );
};

export default BottomStatic;