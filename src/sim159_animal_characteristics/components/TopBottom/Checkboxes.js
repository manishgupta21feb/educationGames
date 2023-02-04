import React, { useRef } from "react";
import Checkbox from "../../../app/components/Checkbox";

const Checkboxes = (props) => {
  const timeout = useRef(null);
  const {
    onChange,
    checkboxes,
    questionId,
    isPopupActive,
    selectedOptions,
    questionAnswered,
  } = props;

  const _onChange = (id) => {
    onChange(id);
    EventManager.broadcast("STOP_ALL");
    clearTimeout(timeout.current);
    timeout.current = setTimeout(() => {
      EventManager.broadcast("PRIMARY_CLICK");
    }, 100);
  };

  return (
    <div className={`checkboxes ${questionId}`}>
      {checkboxes.map(({ id, text }) => (
        <Checkbox
          id={id}
          key={id}
          text={text}
          label={text}
          onChange={_onChange}
          isPopupActive={isPopupActive}
          checked={selectedOptions.indexOf(id) >= 0}
          disabled={isPopupActive || questionAnswered}
        />
      ))}
    </div>
  );
};

export default Checkboxes;
