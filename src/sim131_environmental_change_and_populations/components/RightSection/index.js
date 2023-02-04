import React from "react";
import "./style.scss";
import RightStaticContainer from '../../containers/RightStaticContainer';
import RightInteractiveContainer from '../../containers/RightInteractiveContainer';

const RightSection = (props) => {

  const { isInteractive } = props;

  return (
    <>
      { isInteractive ? <RightInteractiveContainer /> : <RightStaticContainer /> }
    </>
  )
}

export default RightSection;