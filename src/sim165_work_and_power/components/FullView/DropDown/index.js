import React from "react";
import Select from "../../../../app/components/Select";

const DropDown = (props) => {
  const {
    isPopupActive,
    heading,
    selectOptions,
    dropSelection,
    disableRest,
    onSelectionUpdate,
    selectNumber,
  } = props;
  return (
    <Select
      isPopupActive={isPopupActive}
      key={`select1`}
      heading={heading}
      options={selectOptions}
      value={dropSelection}
      disabled={disableRest}
      onChange={(e) => onSelectionUpdate(e, selectNumber)}
      onClick={() => {}}
      classes={`horizontal`}
    />
  );
};
export default DropDown;
