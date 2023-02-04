import React from 'react';
import OverfishingChart from './OverfishingChart';

const OverFishing = (props) => {

  const { 
    overfishingAlt, 
    chartAriaLabel 
  } = props;

  return (
    <div className="overfishing-chart-wrapper">
      <img className="sr-only sr-image" alt={overfishingAlt}/>
      <div className="overfishing-chart">
        <p className="overfishing-chart-title">Global Annual Seafood Amounts</p>
        <p className="overfishing-chart-info" aria-label="Millions of metric tons">Millions of metric tons</p>
        <OverfishingChart chartAriaLabel={chartAriaLabel}/>
      </div>
    </div>
  )
}

export default OverFishing;