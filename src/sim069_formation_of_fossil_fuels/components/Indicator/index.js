import React from 'react';
import Wrapper from "../Wrapper";
import './indicator.scss';

const Indicator = (props) => {

  const {
    fossil,
    operatablesData,
    indicator,
  } = props;

  const length = operatablesData[fossil].length;
  let _indicator = [...indicator];
  _indicator = _indicator.slice(0, length);

  const steps = _indicator?.map(item => {
    return(
      <div key={item.id} className="indicator__step">
        {item.text}
      </div>
    )
  });

  return (
    <Wrapper className="indicator">
      <div aria-hidden className="indicator__pipe">
        {steps}
      </div>
    </Wrapper>
  )
}

export default Indicator
