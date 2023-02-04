import React from "react";
import Wrapper from "../Wrapper";
import Operatables from "../Operatables";
import Placements from "../Placements";
import Indicator from "../Indicator";
import AccessibleList from "../../containers/AccessibleList";

const Workmat = (props) => {
  const {
    screenText,
    fossil,
    getOperatablesData,
    getPlacementZones,
    isPopupActive,
    onOperatable,
    continueBtnText,
    showFinalScreen,
    showToastMessage,
    toggleDesciptionBox,
    indicator,
    dropzoneText,
    closeText,
    onPlacement,
    onOperatableNonAcc,
    dropzoneBlankText,
    dropzoneBlankTextEnd,
    opened,
    closeDescriptionBox,
    setDroppedItem,
    droppedItem,
    setCurrentOperatable,
  } = props;

  return (
    <Wrapper className="wrapper--wrap">
      <h2 className="paragraph gap">{screenText}</h2>
      <Operatables
        fossil={fossil}
        operatablesData={getOperatablesData}
        isPopupActive={isPopupActive}
        onOperatable={onOperatable}
        toggleDesciptionBox={toggleDesciptionBox}
        closeText={closeText}
        onOperatableNonAcc={onOperatableNonAcc}
        opened={opened}
        closeDescriptionBox={closeDescriptionBox}
        showToastMessage={showToastMessage}
        setCurrentOperatable={setCurrentOperatable}
      />
      <AccessibleList />
      <Placements
        fossil={fossil}
        operatablesData={getOperatablesData}
        placementZones={getPlacementZones}
        continueBtnText={continueBtnText}
        showFinalScreen={showFinalScreen}
        showToastMessage={showToastMessage}
        dropzoneText={dropzoneText}
        isPopupActive={isPopupActive}
        onPlacement={onPlacement}
        dropzoneBlankText={dropzoneBlankText}
        dropzoneBlankTextEnd={dropzoneBlankTextEnd}
        setDroppedItem={setDroppedItem}
        droppedItem={droppedItem}
      />
      <Indicator
        fossil={fossil}
        operatablesData={getOperatablesData}
        indicator={indicator}
      />
    </Wrapper>
  );
};

export default Workmat;
