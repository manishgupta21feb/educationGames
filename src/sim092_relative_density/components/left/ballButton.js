import React from "react";
import "./style.scss";

const BallButton = (props) => {
  const {
    sphereData,
    onClickSphere,
    animateEnd,
    isPopupActive,
    labelData,
    sphereType,
  } = props;

  return (
    <>
      <div className="label-container">
        {labelData.map((i, j) => (
          <React.Fragment key={i.id}>
            <p
              className={`label-details label-${i.id}`}
              style={{
                opacity:
                  !i.show || (sphereType.includes(i.id) && !animateEnd) ? 1 : 0,
              }}
              aria-hidden={sphereType.includes(i.id) || !i.show ? false : true}
            >
              <span className="sr-only">{i.label}</span>
              <span aria-hidden="true">{i.densityInfo}</span>
            </p>
          </React.Fragment>
        ))}
      </div>
      <div className="sphere-button-container">
        {sphereData.map((i, j) => (
          <React.Fragment key={i.id}>
            {i.show && (
              <>
                <button
                  className={`sphere-button sphere-button-${i.id}`}
                  onClick={() => onClickSphere(i.id)}
                  aria-label={i.label}
                  disabled={animateEnd}
                  tabIndex={isPopupActive ? "-1" : null}
                ></button>
                <p
                  className={`sphere-button-details sphere-button-details-${j}`}
                >
                  <span className="sr-only">{i.labelInfo}</span>
                  <span
                    aria-hidden="true"
                    dangerouslySetInnerHTML={{ __html: i.density }}
                  ></span>
                </p>
              </>
            )}
          </React.Fragment>
        ))}
      </div>
      <div className="sphere-animation-container">
        {sphereData.map((i, j) => (
          <React.Fragment key={i.id}>
            <div
              className={`sphere-button sphere-button-${j} ${
                !i.show == true ? `animate-${j}` : ""
              }`}
            ></div>
          </React.Fragment>
        ))}
      </div>
    </>
  );
};

export default BallButton;
