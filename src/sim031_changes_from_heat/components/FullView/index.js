import React from "react";
import KitchenItems from "./KitchenItems";
import "./style.scss";

const FullView = (props) => {
  const { answered, activityHeading } = props;

  return (
    <div className="full-view">
      <div className="full-view-wrapper">
        <div
          aria-hidden="true"
          className={`bg-image ${answered ? `` : "show"}`}
        ></div>
        <div aria-hidden="true" className={`${answered ? "" : ""}`}></div>
        <h1 className="sr-only">{activityHeading}</h1>
        <KitchenItems {...props} />
      </div>
    </div>
  );
};

export default FullView;
