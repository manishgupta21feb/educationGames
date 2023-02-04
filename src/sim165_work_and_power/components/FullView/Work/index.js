import React, { useEffect, useState } from "react";
import CommonSliderContainer from "../../../containers/CommonSliderContainer";
import DropDownContainer from "../../../containers/DropDownContainer";
import AnimationContainer from "../../../containers/AnimationContainer";
import ResultBox from "../ResultBox";
import * as Helper from "../../helper.js";
import "./style.scss";

const Work = ({
  workHeading,
  dropHeadings,
  forceContent,
  workDoneContent,
  disValue,
  forceDirection,
  disDirect,
  begunAnimation,
  calculationAria,
}) => {
  const [workValue, setWorkValue] = useState(0);
  useEffect(() => {
    if (!begunAnimation) {
      setWorkValue(0);
      return;
    }
    setWorkValue(Helper.workCalculation(forceDirection, disDirect, disValue));
  }, [begunAnimation]);

  return (
    <>
      <div className="power-container">
        <h2 className="heading">{workHeading}</h2>
        <CommonSliderContainer />
        <div className="dropDown">
          {dropHeadings.map((element, index) => (
            <React.Fragment key={`dropSection${index}`}>
              <DropDownContainer heading={element} selectNumber={index} />
            </React.Fragment>
          ))}
        </div>
        <div className="defaultValueHolder">
          <div className="sr-only sr-Boundary">{calculationAria[0]}</div>
          <p className="forceHolder" aria-hidden="true">
            {forceContent}
          </p>
        </div>
        <ResultBox
          content={workDoneContent.replace("-1-", workValue)}
          ariaContent={calculationAria[3].replace("-1-", workValue)}
        />
        <AnimationContainer />
        <div className="platform"></div>
      </div>
    </>
  );
};

export default Work;
