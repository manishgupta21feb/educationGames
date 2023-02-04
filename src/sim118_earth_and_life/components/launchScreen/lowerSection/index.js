import React from "react";

const LaunchLowerSection = ({ mainScreenData }) => {
  return (
    <div className="launchScrLoSect">
      <p dangerouslySetInnerHTML={{ __html: mainScreenData }}></p>
    </div>
  );
};

export default LaunchLowerSection;
