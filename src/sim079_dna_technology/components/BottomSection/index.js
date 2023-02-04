import React from "react";
import NextButtonContainer from "../../containers/NextButtonContainer";

import "./style.scss";

const BottomSection = (props) => {
  const { secondScreenData: q } = props;
  return (
    <div className="bottom-section">
      <div className="bottom-static">
        <div className="intstruction-area">
          <div key={q.id}>
            <h2
              className="instruction-heading"
              dangerouslySetInnerHTML={{
                __html: q.heading,
              }}
            ></h2>
            <p
              className="instruction-text"
              dangerouslySetInnerHTML={{
                __html: q.introductionHeading,
              }}
            ></p>
            <div>
              <NextButtonContainer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomSection;
