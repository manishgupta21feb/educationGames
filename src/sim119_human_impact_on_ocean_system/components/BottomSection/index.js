import React from 'react';
import BottomStaticContainer from '../../containers/BottomStaticContainer';
import BottomInteractiveContainer from '../../containers/BottomInteractiveContainer';
import './style.scss';

const BottomSection = (props) => {

  const {
    visitedHotspots,
    nextButtonClickedState
  } = props;

  return (
    <div className="bottom-section">
      {
        nextButtonClickedState || visitedHotspots.length == 0 ?
          <BottomStaticContainer />
          :
          <BottomInteractiveContainer />
      }
    </div>
  )
}

export default BottomSection;