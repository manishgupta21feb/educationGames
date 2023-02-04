import React from "react";
import NextButtonCompletePyramidContainer from "../../containers/NextButtonCompletePyramidContainer";
import "./style.scss";

const MainArea = (props) => {
  const {
    kitchenItems,
    altTexts: { sun, eagle, snake, plants, rabbit, pyramid, foodChain },
    headingText,
  } = props;

  return (
    <div className="main screen">
      <div className="top-area">
        <h1 className="sr-only">{headingText}</h1>
        <div role="img" aria-label={foodChain} className="bg-img-screen2"></div>
        <div
          role="img"
          aria-label={sun}
          className="highlighter producers1"
        ></div>
        <div
          role="img"
          aria-label={plants}
          className="highlighter primary1"
        ></div>
        <div
          role="img"
          aria-label={rabbit}
          className="highlighter secondary1"
        ></div>
        <div
          role="img"
          aria-label={snake}
          className="highlighter secondary2"
        ></div>
        <div
          role="img"
          aria-label={eagle}
          className="highlighter tertairy2"
        ></div>
      </div>
      <div className="bottom-area">
        <p className="text-info">{props.screentext1}</p>
        <div className="pyramid-wrapper">
          <div role="img" className="sr-readonly" aria-label={pyramid}></div>
          <div className="empty-pyramid" aria-hidden={true}>
            {kitchenItems.map((q) => {
              return (
                <React.Fragment key={`${q.id}-overlay`}>
                  <div className={`pyramid-sections ${q.className}`}></div>
                  <div className={`button-wrapper ${q.className}`}>
                    <div className={`bullet `}></div>
                    <div className={`dotted-line `}></div>
                    <div className={"pyramid-button btn"}>{q.text}</div>
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </div>
        <p aria-hidden={true} className="text-info">
          {props.text}{" "}
        </p>
        <NextButtonCompletePyramidContainer />
      </div>
    </div>
  );
};
export default MainArea;
