import React from "react";
import TabButtons from "../../containers/TabButtonContainer";
import GraphArea from "../../containers/GraphAreaContainer";
import "./style.scss";

const CenterArea = (props) => {
  let { topHeading, isPopupActive } = props;
  return (
    <div className="left-area">
      <h2 className="graph-heading">{topHeading}</h2>
      <TabButtons classes={"accessible-button"} isPopupActive={isPopupActive} />
      <div className="border-area">
        <GraphArea />
      </div>
    </div>
  );
};

export default CenterArea;
