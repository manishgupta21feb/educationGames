import React from "react";

const LaunchLowerSection = ({ mainScreenData, legendData }) => {
  const legends = () => {
    let renderObject = Object.entries(legendData.list).map((element, index) => {
      const { content, range, allyContent } = element[1];
      return (
        <div className={`list`} key={`list_${index}`}>
          <div className="sr-only">{allyContent}</div>
          <p className="content" aria-hidden="true">
            {content}
          </p>
          <span className={`color ${element[0]}`} aria-hidden="true"></span>
          <p className="range" aria-hidden="true">
            {range}
          </p>
        </div>
      );
    });
    return renderObject;
  };
  return (
    <div className="launchScrLoSect">
      {/* <div className="legendBg">
        <div className="legendHolder">
          <div className="sr-only">{legendData.headlineAria}</div>
          <p
            aria-hidden="true"
            className="heading"
            dangerouslySetInnerHTML={{ __html: legendData.headline }}
          />
          <div className="listContainer">{legends()}</div>
        </div>
      </div> */}
      <p dangerouslySetInnerHTML={{ __html: mainScreenData }}></p>
    </div>
  );
};

export default LaunchLowerSection;
