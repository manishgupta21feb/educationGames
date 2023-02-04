import React from "react";
import MCQContainer from "../../containers/MCQContainer";
import "./style.scss";
import { getSimLanguage } from "../../../app/helpers";
const lang = getSimLanguage();

const rightSection = (props) => {
  const { matchedItems, isPopupOpen, headingOne, headingTwo } = props;
  return (
    <div className="bottom-section" aria-hidden={isPopupOpen}>
      <MCQContainer>
        <div className="selected-hotspots-sections">
          <div className="selected-hotspots-section">
            <div className="heading-section">
              <h2>{headingOne}</h2>
            </div>
            <div className="selected-hotspots">
              {matchedItems.living.map((h) => {
                return <p key={h}>{h}</p>;
              })}
            </div>
          </div>
          <div className="selected-hotspots-section">
            <div className="heading-section">
              <h2>{headingTwo}</h2>
            </div>
            <div className="selected-hotspots">
              {matchedItems.nonliving.map((h) => {
                return <p key={h}>{h}</p>;
              })}
            </div>
          </div>
        </div>
      </MCQContainer>
    </div>
  );
};

export default rightSection;
