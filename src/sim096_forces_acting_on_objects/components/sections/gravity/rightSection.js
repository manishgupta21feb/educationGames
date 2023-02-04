import { element } from "prop-types";
import React, { useEffect, useRef, useState } from "react";
import Button from "../../../../app/components/Button";

const RightSection = ({
  sectionContent,
  ballsData,
  onUpdateBallsData,
  nextButton,
  isPopupActive,
  videoEnded,
  currentBall,
  onBallsUpdate,
  resetActivity,
  runningTest,
}) => {
  const nextRef = useRef(null);
  const _ballsData = [...ballsData];
  const [nextBtn, setNextBtn] = useState(false);

  useEffect(() => {
    if (videoEnded) {
      updateViewData();
    }
  }, [videoEnded]);

  useEffect(() => {
    const getNxtState = _ballsData.every((element) => element.isViewed == true);

    setNextBtn(getNxtState);
  });

  const updateViewData = () => {
    _ballsData[currentBall - 1] = {
      ..._ballsData[currentBall - 1],
      isViewed: true,
    };
    onBallsUpdate(_ballsData);
  };
  const updateBallData = (index) => {
    _ballsData.forEach((element, _index) => {
      if (element.currentSelected) {
        _ballsData[_index] = { ..._ballsData[_index], currentSelected: false };
      }
    });
    _ballsData[index] = { ..._ballsData[index], currentSelected: true };
    onUpdateBallsData(_ballsData, index + 1);
  };
  return (
    <div className="gravityRightHolder">
      <p dangerouslySetInnerHTML={{ __html: sectionContent }}></p>
      <div className="ballContainer">
        {_ballsData.map((element, index) => {
          return (
            <div className="ballBox" key={`ball${index}`}>
              <button
                className={`balls ${
                  element.currentSelected ? "balls--selected" : ""
                }`}
                style={{ backgroundImage: `url(${element.imgSrc})` }}
                title={element.details.name}
                onClick={() => {
                  updateBallData(index);
                }}
                disabled={runningTest || isPopupActive}
                aria-hidden={runningTest || isPopupActive}
                aria-pressed={element.currentSelected}
              ></button>
              <p className="ballName" aria-hidden="true">
                {element.details.name}
              </p>
            </div>
          );
        })}
      </div>
      {nextBtn && (
        <Button
          text={nextButton}
          ref={nextRef}
          onClick={() => {
            resetActivity();
          }}
          hideTooltip={false}
          disabled={!nextBtn}
          ariaHidden={isPopupActive}
          isPopUpOpen={isPopupActive}
          classes="toast-secondary-button positive right-arrow frictionRight"
        />
      )}
    </div>
  );
};

export default RightSection;
