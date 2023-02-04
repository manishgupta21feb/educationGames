import React, { useEffect, useState } from "react";
import Button from "../../../app/components/Button";
import EventManager from "../../../app/events/manager";
import "./style.scss";

const ButtonSecond = (props) => {
  const { buttonList, answerList, items, clickedSecond, clickedButton } = props;

  const [selectedId, setSelectedId] = useState(false);

  const onClick = (e) => {
    if (selectedId) {
      if (!buttonList.includes(items.id)) {
        clickedSecond(e);
        EventManager.broadcast("SECONDARY_CLICK");
      } else if (!answerList.includes(items.id)) {
        setSelectedId(false);
        clickedButton(e);
        EventManager.broadcast("SECONDARY_CLICK");
      }
    } else {
      clickedSecond(e);
      setSelectedId(true);
      EventManager.broadcast("SECONDARY_CLICK");
    }
  };

  return (
    <Button
      text={items.value}
      disabled={answerList.includes(items.id)}
      classes={` btn-chip  ${
        buttonList.includes(items.id) || answerList.includes(items.id)
          ? `selected`
          : ""
      } label`}
      id={items.id}
      onClick={onClick}
      ariaPressed={
        buttonList.includes(items.id) || answerList.includes(items.id)
      }
    />
  );
};
export default ButtonSecond;
