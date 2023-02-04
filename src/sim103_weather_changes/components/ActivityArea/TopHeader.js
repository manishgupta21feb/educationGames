import React, { useEffect, useRef } from "react";
import Button from "../../../app/components/Button";
import BottomContainer from "../../containers/BottomContainer";

const TopHeader = (props) => {
  const { visibleButtons, isPopupActive, clickDay, selectedDay } = props;
  const ref = useRef(null);
  const getClassName = (item) => {
    if (item.visited) {
      return `btn weekButton ${item.id} visited`;
    } else if (selectedDay == "") {
      return `btn weekButton ${item.id}`;
    } else if (selectedDay == item.id) {
      return `btn weekButton ${item.id} active`;
    } else if (selectedDay !== item.id) {
      return `btn weekButton ${item.id} not-visited`;
    } else {
      return null;
    }
  };

  return (
    <div className="headerRow">
      <div className="wrapperContainer">
        {visibleButtons.map((item, index) => {
          const selected = selectedDay == item.id;
          const isShow = selectedDay == item.id ? "showImg" : "";
          return (
            <div key={`wrapper${item.id}`} className={`section-wrapper`}>
              <div className={`button-wrapper wrapper_${index}`}>
                <Button
                  id={item.id}
                  text={item.name}
                  classes={getClassName(item)}
                  ariaPressed={selected || item.visited}
                  onClick={() => clickDay(item.id, index)}
                  disabled={isPopupActive || item.visited || !!selectedDay}
                />
              </div>
              <BottomContainer item={item} isShow={isShow} index={index} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopHeader;
