import React from 'react';
import './style.scss';
import NextButtonContainer from '../../containers/NextButtonContainer';
import DraggablesContainer from '../../containers/DraggablesContainer';

const RightSection = (props) => {
  
  const { 
    introductionHeading 
  } = props;

  return (
    <div className="right-section">
      <h2 className="introduction-heading">{introductionHeading}</h2>
      <DraggablesContainer/>
      <NextButtonContainer/>
    </div>
  )
}

export default RightSection;