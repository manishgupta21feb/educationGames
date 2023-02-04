import React from 'react';
import FullViewScreen2Container from '../../../containers/FullViewScreen2Container';
import FullViewScreen4Container from '../../../containers/FullViewScreen4Container';
import './style.scss';

const FullViewSection = (props) => {

  const { screenStatus } = props;

  const getFullViewScreen = () => {
    switch(screenStatus) {
      case 2: {
        return <FullViewScreen2Container/>
      }
      case 4: {
        return <FullViewScreen4Container/>
      }
    }
  }

  return (
    <>
      {getFullViewScreen()}
    </>
  )
}

export default FullViewSection;