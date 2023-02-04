import React from "react";

const SpectrumAnimation = (props) => {
  const {
    data,
    wavelength,
    selectedControlOption,
    animationState,
    playAnimation,
  } = props;

  const onAnimationEnd = () => {
    playAnimation(false);
  };

  let voltage,
    initVoltage = data.copperv2,
    electron,
    animation;
  animation = `animation-${wavelength}`;
  if (selectedControlOption == "copper") {
    if (wavelength == 1) {
      voltage = data.copperv1;
      electron = (
        <div
          className={`electron-image-container`}
          onAnimationEnd={onAnimationEnd}
        >
          <div
            className={`copperAnimation electron-image animate ${animation}`}
            role="img"
            aria-label={`${data.ariaLabels.electron}`}
          ></div>
        </div>
      );
    } else if (wavelength == 2) {
      voltage = data.copperv2;
      electron = (
        <div
          className={`electron-image-container`}
          onAnimationEnd={onAnimationEnd}
        >
          <div
            className={`no-electron-image animate ${animation}`}
            role="img"
            aria-label={`${data.ariaLabels.electron}`}
          ></div>
        </div>
      );
    } else if (wavelength == 3) {
      voltage = data.copperv2;
      electron = (
        <div
          className={`electron-image-container`}
          onAnimationEnd={onAnimationEnd}
        >
          <div
            className={`no-electron-image animate ${animation}`}
            role="img"
            aria-label={`${data.ariaLabels.electron}`}
          ></div>
        </div>
      );
    }
  } else {
    if (wavelength == 1) {
      voltage = data.sodiumv1;
    } else if (wavelength == 2) {
      voltage = data.sodiumv2;
    } else if (wavelength == 3) {
      voltage = data.sodiumv3;
    }
    electron = (
      <div
        className={`electron-image-container`}
        onAnimationEnd={onAnimationEnd}
      >
        <div
          className={`electron-image animate ${animation}`}
          role="img"
          aria-label={`${data.ariaLabels.car}`}
        ></div>
      </div>
    );
  }

  return (
    <div className="animation-container">
      <div className="wavelegth-scale">
        <img className="sr-image sr-only" alt={data.colorBar}></img>
        <span className="wavelength-heading">{data.wavelengthHeading}</span>
        <div className="wavelenth-numbers">
          {data.spectrumList.map((item) => {
            return (
              <div key={item.wavelengthVal} className="wlnumber">
                {item.wavelengthVal}
              </div>
            );
          })}
        </div>
        <div className="wavelength-art"></div>
        <div className="left-arrow"></div>
        <div className="right-arrow"></div>
        <div className="spectrum-box">
          <div className="spectrum-name">{data.spectrumlabel1}</div>
          <div className="spectrum-name">{data.spectrumlabel2}</div>
          <div className="spectrum-name">{data.spectrumlabel3}</div>
          <div className="spectrum-art"></div>
          <div className="spectrum-name">{data.spectrumlabel4}</div>
          <div className="spectrum-name">{data.spectrumlabel5}</div>
          <div className="spectrum-name">{data.spectrumlabel6}</div>
        </div>

        {animationState && (
          <div
            className={`torch-light light-${wavelength}`}
            onAnimationEnd={onAnimationEnd}
          ></div>
        )}

        <div className={`metal-type ${selectedControlOption}`}></div>
      </div>

      <div className="electron-container">
        {" "}
        <img className="sr-image sr-only" alt={data.ariaLabels.circuit}></img>
        {animationState && electron}
      </div>
      {animationState ? (
        <div className="voltageVal" onAnimationEnd={onAnimationEnd}>
          {data.voltages}
          {voltage}
        </div>
      ) : (
        <>
          <div className="sr-only sr-Boundary">
            {data.voltages}
            {data.ariacopv2}
          </div>
          <div className="voltageVal" role="button" aria-hidden="true">
            {data.voltages}
            {initVoltage}
          </div>
        </>
      )}
    </div>
  );
};

export default SpectrumAnimation;
