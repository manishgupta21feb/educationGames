import React, { useEffect } from 'react';
import './style.scss';

const LeftSection = (props) => {

  const {
    equationLeft,
    equationRight,
    leftEquationHeading,
    reactantsClass,
    reactantsAlt,
    equationLeftRead,
    equationRightRead
  } = props;

  return (
    <div className="left-section">
      <div className="equation-section">
        <h2 className="equation-heading">{leftEquationHeading}</h2>
        <div className="equation-text">
          <p>
            <span aria-hidden="true" dangerouslySetInnerHTML={{
              __html: equationLeft
            }}></span>
            <span className="sr-only">{equationLeftRead}</span>
          </p>
          <span className="sr-only">reacts to produce</span>
          <div className="custom-arrow-wrapper" aria-hidden="true">
            <span className="line"></span>
            <span className="arrow"></span>
          </div>
          <p>
            <span aria-hidden="true" dangerouslySetInnerHTML={{
              __html: equationRight
            }}></span>
            <span className="sr-only">{equationRightRead}</span>
          </p>
        </div>
      </div>
      <div className="reactants-wrapper">
        <h3 className="reactants-heading">Reactants</h3>
        <img className="sr-only sr-image" alt={reactantsAlt}/>
        <div className={`reactants-icon ${reactantsClass}`}></div>
      </div>
    </div>
  )
}

export default LeftSection;