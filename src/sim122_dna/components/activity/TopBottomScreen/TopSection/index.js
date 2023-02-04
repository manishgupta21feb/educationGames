import React from 'react';
import './style.scss';
import Screen1TopContainer from '../../../../containers/Screen1TopContainer';
import Screen3TopContainer from '../../../../containers/Screen3TopContainer';
import Screen5TopContainer from '../../../../containers/Screen5TopContainer';

const TopSection = (props) => {

  const {
    screenStatus
  } = props;

  const getTopScreen = () => {
    switch(screenStatus) {
      case 1: {
        return <Screen1TopContainer/> 
      }
      case 3: {
        return <Screen3TopContainer/>
      }
      case 5: {
        return <Screen5TopContainer/>
      }
    }
  }

  return (
    <>
      {getTopScreen()}
    </>
  )
}

export default TopSection;