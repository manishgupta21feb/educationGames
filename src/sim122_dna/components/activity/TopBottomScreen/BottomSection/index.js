import React from 'react';
import './style.scss';
import Screen1BottomContainer from '../../../../containers/Screen1BottomContainer';
import Screen3BottomContainer from '../../../../containers/Screen3BottomContainer';
import Screen5BottomContainer from '../../../../containers/Screen5BottomContainer';

const BottomSection = (props) => {

  const {
    screenStatus
  } = props;

  const getBottomScreen = () => {
    switch(screenStatus) {
      case 1: {
        return <Screen1BottomContainer/>
      }
      case 3: {
        return <Screen3BottomContainer/>
      }
      case 5: {
        return <Screen5BottomContainer/>
      }
    }
  }

  return (
    <>
      {getBottomScreen()} 
    </>
  )
}

export default BottomSection;