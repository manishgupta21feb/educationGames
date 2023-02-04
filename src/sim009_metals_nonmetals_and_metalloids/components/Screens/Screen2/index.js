import React from "react";
import View from "../../../../app/components/View";
import FinishButton from "../../../containers/ButtonFinishContainer";
import PeriodicTable from "../../../containers/PeriodicTableContainer";
import "./style.scss";

export default ({ periodicLables, isPopupActive, headingScreen2 }) => {
  return (
    <div className="screen2-container">
      <View ariahidden={isPopupActive}>
        <h1 className="heading-ally">{headingScreen2}</h1>
        <PeriodicTable />
        <div className="label-container">
          <ul className="periodic-labels" role="list">
            {periodicLables.map((list, i) => {
              return (
                <li key={i} role="listitem">
                  <span
                    className={`color-box ${list.classes}`}
                    role="img"
                    aria-label={list.altTextForLegend}
                  ></span>
                  <span aria-label={list.ariaLabel} className="text">
                    {list.text}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
        <FinishButton />
      </View>
    </div>
  );
};
