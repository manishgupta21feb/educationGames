import React from 'react';
import './style.scss';
import MainScreenContainer from '../../containers/MainScreenContainer';
import ObjectScreensContainer from '../../containers/ObjectScreensContainer';

const TopSection = (props) => {

  const {
    nextButtonClickedState,
    visitedHotspots
  } = props;

  return (
    <div className="top-section">
      {
        nextButtonClickedState || visitedHotspots.length == 0
          ?
          <MainScreenContainer />
          :
          <ObjectScreensContainer />
      }
    </div>
  )
}

export default TopSection;