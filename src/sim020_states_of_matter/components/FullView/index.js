import React from "react";
import KitchenItems from "./KitchenItems";
import "./style.scss";

const FullView = (props) => {
  const { answered, activityHeading, mainScreenText, ariaLiveText } = props;

  return (
    <div className="full-view">
      <div className="full-view-wrapper">
        <div
          aria-hidden="true"
          className={`bg-image ${answered ? `` : "show"}`}
        ></div>
        <div
          aria-hidden="true"
          className={`${answered ? "" : "bg-shadow"}`}
        ></div>
        <h1 className="sr-only">{activityHeading}</h1>
        {answered ? null : <p className="instructions">{mainScreenText}</p>}
        <KitchenItems {...props} />
      </div>
    </div>
  );
};

export default FullView;
