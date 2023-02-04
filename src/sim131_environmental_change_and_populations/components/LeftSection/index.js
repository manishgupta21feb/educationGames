import React from 'react';
import "./style.scss";
import LeftStaticContainer from '../../containers/LeftStaticContainer';
import LeftInteractiveContainer from '../../containers/LeftInteractiveContainer';

const LeftSection = (props) => {

  const { isInteractive } = props;

  return (
    <>
      { isInteractive ? <LeftInteractiveContainer /> : <LeftStaticContainer /> }
    </>
  )
}

export default LeftSection;