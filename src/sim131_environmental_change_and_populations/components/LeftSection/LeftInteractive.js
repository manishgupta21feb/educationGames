import React from 'react';
import FishChartContainer from '../../containers/FishChartContainer';

const LeftInteractive = (props) => {

  const {
    questionNo,
    leftFirstImgAlt,
    leftSecondImgAlt,
    fishChartTitleFirst,
    fishChartTitleSecond,
    fishChartInfo,
    fishChartInfoLabel
  } = props;

  return (
    <div className="left-interactive-section">
      <img className="sr-image sr-only" alt={questionNo < 2 ? leftFirstImgAlt : leftSecondImgAlt} />
      <div className={`left-image ${questionNo < 2 ? 'first' : 'second'}`}></div>
      <div className="fish-chart-wrapper">
        <p className="fish-chart-title">{questionNo < 2 ? fishChartTitleFirst : fishChartTitleSecond}</p>
        <p className="fish-chart-info">
          <span className="sr-only">{fishChartInfoLabel}</span>
          <span
            aria-hidden="true"
            dangerouslySetInnerHTML={{
              __html: fishChartInfo
            }}>
          </span>
        </p>
        <FishChartContainer />
        <div className="chart-bottom-fish-wrapper">
          <div className="fish-wrapper">
            <span className="fish-1"></span>
          </div>
          <div className="fish-wrapper">
            <span className="fish-2"></span>
          </div>
          <div className="fish-wrapper">
            <span className="fish-3"></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeftInteractive;