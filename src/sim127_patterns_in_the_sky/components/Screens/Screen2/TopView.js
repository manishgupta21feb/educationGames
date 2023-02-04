import React from "react";
import { selectMCQAnswerOption } from "../../../actions";

const TopView = (props) => {
  const { selectedMCQQuestion, isPopupActive } = props;
  const _class =
    selectedMCQQuestion && selectedMCQQuestion.id ? selectedMCQQuestion.id : "";
  return (
    <div className={`screen2-top ${_class}`.trim()} aria-hidden={isPopupActive}>
      <img className="sr-only sr-image" alt={selectedMCQQuestion.alt} />
    </div>
  );
};

export default TopView;
