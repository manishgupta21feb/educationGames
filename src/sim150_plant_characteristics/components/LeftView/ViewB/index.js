import React from "react";

const ViewB = ({ questionImage, imgAlt, imgContent }) => {
  return (
    <div className="launchScrUpSect viewAPanel">
      <img src={questionImage} alt={imgAlt} />
      <p className="imageContent" aria-hidden="true">
        {imgContent}
      </p>
    </div>
  );
};

export default ViewB;
