import React from 'react';
import OildrillingContainer from '../../containers/OildrillingContainer';
import ArtificialReefContainer from '../../containers/ArtificialReefContainer';
import OverfishingContainer from '../../containers/OverfishingContainer';

const ObjectScreens = (props) => {

  const { selectedHotspot } = props;

  const selectObjects = () => {
    switch(selectedHotspot) {
      case 1: {
        return <OildrillingContainer/>
      }
      case 2: {
        return <OverfishingContainer/>
      }
      case 3: {
        return <ArtificialReefContainer/>
      }
    }
  }

  return (
    <>
      {selectObjects()}
    </>
  )
}

export default ObjectScreens;