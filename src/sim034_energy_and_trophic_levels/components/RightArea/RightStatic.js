import React, { useRef, useEffect } from "react";
import CloseButtonContainer from "../../containers/CloseButtonContainer";
import NextButtonContainer from "../../containers/NextButtonContainer";

const RightStatic = (props) => {
  const ref = useRef(null);
  const { questions, levelSelected, selectedOrganisms } = props;
  useEffect(() => {
    if (levelSelected) {
      setTimeout(() => {
        if (ref && ref.current) {
          const button = ref.current.querySelector("button");
          if (button) {
            button.focus();
          }
        }
      }, 50);
    }
  }, [levelSelected]);
  return (
    <div className="right-static">
      <div className="intstruction-area">
        <div>
          <p className="instruction-text">{props.screentext3}</p>
        </div>
        {questions
          .filter((q) => q.text == levelSelected)
          .map((q) => {
            return (
              <div key={`${q.id}-info`}>
                <div
                  role="alertdialog"
                  className={`instruction-text-wrapper  ${levelSelected}`}
                  aria-label={q.textAlt}
                >
                  <p
                    dangerouslySetInnerHTML={{ __html: q.textContent }}
                    className="info-text"
                    // aria-hidden={true}
                  ></p>
                  <div
                    role="img"
                    className={`bttry ${levelSelected}`}
                    aria-label={q.batteryAlt}
                  >
                    <div className="percentage-indicator" aria-hidden={true}>
                      <p>{q.batteryPercentage}</p>
                    </div>
                  </div>
                  <p aria-hidden={true} className="bttryText">
                    {props.bttryText}
                  </p>
                  <div ref={ref}>
                    <CloseButtonContainer />
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      <NextButtonContainer />
    </div>
  );
};

export default RightStatic;
