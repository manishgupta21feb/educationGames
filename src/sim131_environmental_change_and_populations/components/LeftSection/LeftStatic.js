import React from 'react';
import fish from '../../assets/images/fish.png';

const LeftStatic = (props) => {

  const { leftStaticAlt } = props;

  return (
    <div className="left-static-section">
      <img src={fish} alt={leftStaticAlt} height="470px"/>
    </div>
  )
}

export default LeftStatic;