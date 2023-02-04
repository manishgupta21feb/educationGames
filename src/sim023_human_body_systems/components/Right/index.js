import React from "react";
import Button from "../../../app/components/Button";
import InformationBox from "../common/InformationBox";

export default (props) => {
  const {
    departmentData,
    buttonLabels,
    onBackClick,
    isPopupActive,
    selectedHotspot,
    onContinueClick,
    globalDeptText,
    disabledBackToLobby,
  } = props;

  return (
    <div className="right-container">
      <h2 className="right-title">{departmentData.title}</h2>
      <div className="content">
      <p className="sr-only sr-image">
        {departmentData.textLabel + " " + globalDeptText}
      </p>
      <p
        aria-hidden
        className="content-text"
        dangerouslySetInnerHTML={{
          __html: departmentData.text + " " + globalDeptText,
        }}
      ></p>
      </div>
      {selectedHotspot ? (
        <InformationBox hotspotData={selectedHotspot} />
      ) : null}
      {selectedHotspot ? (
        <Button
          label={buttonLabels.continue}
          text={buttonLabels.continue}
          onClick={onContinueClick}
          classes="toast-secondary-button positive right-arrow"
          isPopupActive={isPopupActive}
        ></Button>
      ) : (
        <Button
          key={selectedHotspot ? selectedHotspot.id : null}
          label={buttonLabels.backButton}
          text={buttonLabels.backButton}
          onClick={onBackClick}
          classes="toast-secondary-button positive"
          isPopupActive={isPopupActive}
          disabled={disabledBackToLobby || isPopupActive}
        ></Button>
      )}
    </div>
  );
};
